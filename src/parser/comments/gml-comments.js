import {
    addTrailingComment,
    addLeadingComment,
    addDanglingComment,
    hasNewline,
} from './utils.js'

// get all child nodes associated with this node
function getSortedChildNodes(node) {
    const children = [];
    const isObject = (object) => object !== null && typeof object === "object";

    for (const key of Object.keys(node)) {
        if (["start", "end", "comments"].indexOf(key) > -1) { continue; }
        const value = node[key];

        if (Array.isArray(value)) {
            for (const child of value) {
                if (isObject(child)) {
                    children.push(child);
                }
            }
        } else if (isObject(value)) {
            children.push(value);
        }
    }

    // sort by start index, then end index
    children.sort((a, b) =>
        a.start.index - b.start.index || a.end.index - b.end.index
    );

    return children;
}

// decorated comments are annotated with one or more of the following properties: 
// enclosingNode
// precedingNode
// followingNode
function decorateComment(node, comment, enclosingNode) {
    const commentStart = comment.start.index;
    const commentEnd = comment.end.index;
    const childNodes = getSortedChildNodes(node);

    let precedingNode;
    let followingNode;

    // binary search for enclosing node, preceding node, and following node
    // lifted from prettier lmao
    let left = 0;
    let right = childNodes.length;

    while (left < right) {
        const middle = (left + right) >> 1;
        const child = childNodes[middle];
        const start = child.start.index;
        const end = child.end.index;

        // The comment is completely contained by this child node.
        if (start <= commentStart && commentEnd <= end) {
            // Abandon the binary search at this level.
            return decorateComment(child, comment, child);
        }

        if (end <= commentStart) {
            // This child node falls completely before the comment.
            // Because we will never consider this node or any nodes
            // before it again, this node must be the closest preceding
            // node we have encountered so far.
            precedingNode = child;
            left = middle + 1;
            continue;
        }

        if (commentEnd <= start) {
            // This child node falls completely after the comment.
            // Because we will never consider this node or any nodes after
            // it again, this node must be the closest following node we
            // have encountered so far.
            followingNode = child;
            right = middle;
            continue;
        }

        throw new Error("Comment location overlaps with node location");
    }

    return {
        enclosingNode,
        precedingNode,
        followingNode
    };
}

export function attachComments(ast, comments, originalText) {
    const decoratedComments = comments.map(
        comment => ({
            comment: comment,
            ...decorateComment(ast, comment),
        })
    );

    const tiesToBreak = [];

    for (const decorated of decoratedComments) {
        console.log("\ncomment: ", decorated.comment.value);
        if (decorated.enclosingNode !== undefined) {
            console.log("enclosingNode: ", decorated.enclosingNode.type);
        }
        if (decorated.precedingNode !== undefined) {
            console.log("precedingNode: ", decorated.precedingNode.type);
        }
        if (decorated.followingNode !== undefined) {
            console.log("followingNode: ", decorated.followingNode.type);
        }
    }

    for (const decoratedComment of decoratedComments) {
        const {
            comment,
            enclosingNode,
            precedingNode,
            followingNode,
            value: text,
        } = decoratedComment;

        if (isOwnLineComment(comment)) {
            comment.placement = "ownLine";
            // If a comment exists on its own line, prefer a leading comment.
            // We also need to check if it's the first line of the file.
            if (followingNode) {
                // Always a leading comment.
                addLeadingComment(followingNode, comment);
            } else if (precedingNode) {
                addTrailingComment(precedingNode, comment);
            } else if (enclosingNode) {
                addDanglingComment(enclosingNode, comment);
            } else {
                // There are no nodes, let's attach it to the root of the ast
                addDanglingComment(ast, comment);
            }
        } else if (isEndOfLineComment(comment)) {
            comment.placement = "endOfLine";
            if (precedingNode) {
                // There is content before this comment on the same line, but
                // none after it, so prefer a trailing comment of the previous node.
                addTrailingComment(precedingNode, comment);
            } else if (followingNode) {
                addLeadingComment(followingNode, comment);
            } else if (enclosingNode) {
                addDanglingComment(enclosingNode, comment);
            } else {
                // There are no nodes, let's attach it to the root of the ast
                addDanglingComment(ast, comment);
            }
        } else {
            comment.placement = "remaining";
            if (precedingNode && followingNode) {
                // Otherwise, text exists both before and after the comment on
                // the same line. If there is both a preceding and following
                // node, use a tie-breaking algorithm to determine if it should
                // be attached to the next or previous node. In the last case,
                // simply attach the right node;
                const tieCount = tiesToBreak.length;
                if (tieCount > 0) {
                    const lastTie = tiesToBreak[tieCount - 1];
                    if (lastTie.followingNode !== followingNode) {
                        breakTies(tiesToBreak, originalText);
                    }
                }
                tiesToBreak.push(decoratedComment);
            } else if (precedingNode) {
                addTrailingComment(precedingNode, comment);
            } else if (followingNode) {
                addLeadingComment(followingNode, comment);
            } else if (enclosingNode) {
                addDanglingComment(enclosingNode, comment);
            } else {
                // There are no nodes, let's attach it to the root of the ast
                addDanglingComment(ast, comment);
            }
        }
    }
    breakTies(tiesToBreak, originalText);
}

function breakTies(tiesToBreak, originalText) {
    console.log("there are", tiesToBreak.length, "ties!");
    if (tiesToBreak.length === 0) { return; }

    const { precedingNode, followingNode } = tiesToBreak[0];
    let gapEndPos = followingNode.start.index;

    let firstLeadingCommentIndex;
    for (
        firstLeadingCommentIndex = tiesToBreak.length;
        firstLeadingCommentIndex > 0;
        --firstLeadingCommentIndex
    ) {
        const { comment, followingNode } = tiesToBreak[firstLeadingCommentIndex - 1];
        const gap = originalText.slice(comment.end.index + 1, followingNode.start.index);
        console.log(`gap: ${gap}`)

        if (/^[\s(]*$/.test(gap)) {
            gapEndPos = comment.start.index;
        } else {
            // The gap string contained something other than whitespace or open
            // parentheses.
            break;
        }
    }

    for (const [i, { comment }] of tiesToBreak.entries()) {
        if (i < firstLeadingCommentIndex) {
            addTrailingComment(precedingNode, comment);
        } else {
            addLeadingComment(followingNode, comment);
        }
    }

    for (const node of [precedingNode, followingNode]) {
        if (node.comments && node.comments.length > 1) {
            node.comments.sort((a, b) => a.start.index - b.start.index);
        }
    }

    tiesToBreak.length = 0;
}

function isOwnLineComment(comment) {
    return (
        (hasNewline(comment.leadingWS) || comment?.isTopComment) &&
        (hasNewline(comment.trailingWS) || comment?.isBottomComment)
    );
}

function isEndOfLineComment(comment) {
    return hasNewline(comment.trailingWS) || comment?.isBottomComment;
}


