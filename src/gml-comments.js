function getSortedChildNodes(node) {
    const children = [];
    const isObject = (object) => object !== null && typeof object === "object";

    for (const key of Object.keys(node)) {
        if (["start", "end"].indexOf(key) > -1) { continue; }
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

    children.sort((a, b) =>
        a.start.index - b.start.index || a.end.index - b.end.index
    );

    return children;
}

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

export function attachComments(ast, comments) {
    ast.comments = comments;
    const decoratedComments = comments.map(
        comment => ({
            comment: comment,
            ...decorateComment(ast, comment),
        })
    );
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
            
        }
    }
}

const isAllEmptyAndNoLineBreak = (text) => !/[\S\n\u2028\u2029]/.test(text);
function isOwnLineComment(comment) {
    return hasNewline(comment.leadingWS) && hasNewline(comment.trailingWS);
}

function hasNewline(text) {
    return text.split(/[\r\n\u2028\u2029]/).length > 0;
}