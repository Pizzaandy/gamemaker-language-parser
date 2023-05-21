import { util } from "prettier";
import { builders } from "prettier/doc";

const { addLeadingComment, addDanglingComment, addTrailingComment } = util;

const { join, indent, hardline, dedent } = builders;

const handleComments = {
    ownLine(comment, text, options, ast, isLastComment) {
        return (
            handleCommentInEmptyBody(
                comment,
                text,
                options,
                ast,
                isLastComment
            ) ||
            handleCommentInEmptyParens(
                comment,
                text,
                options,
                ast,
                isLastComment
            ) ||
            handleOnlyComments(comment, text, options, ast, isLastComment) ||
            false
        );
    },
    endOfLine(comment, text, options, ast, isLastComment) {
        return (
            handleOnlyComments(comment, text, options, ast, isLastComment) ||
            handleCommentAttachedToOpenBrace(
                comment,
                text,
                options,
                ast,
                isLastComment
            ) ||
            false
        );
    },
    remaining(comment, text, options, ast, isLastComment) {
        return (
            handleOnlyComments(comment, text, options, ast, isLastComment) ||
            handleCommentAttachedToOpenBrace(
                comment,
                text,
                options,
                ast,
                isLastComment
            ) ||
            handleCommentInEmptyParens(
                comment,
                text,
                options,
                ast,
                isLastComment
            ) ||
            false
        );
    },
};

function printComment(commentPath, options) {
    const comment = commentPath.getValue();
    comment.printed = true;
    switch (comment.type) {
        case "CommentBlock": {
            return `/*${comment.value}*/`;
        }
        case "CommentLine": {
            return "// " + comment.value.trim();
        }
        default: {
            throw new Error(`Not a comment: ${JSON.stringify(comment)}`);
        }
    }
}

function printDanglingComments(path, options, sameIndent, filter) {
    const parts = [];
    const node = path.getValue();

    if (!node || !node.comments) {
        return "";
    }

    path.each((commentPath) => {
        const comment = commentPath.getValue();
        if (
            comment &&
            !comment.leading &&
            !comment.trailing &&
            (!filter || filter(comment))
        ) {
            if (comment.attachToBrace) {
                parts.push([" ", printComment(commentPath, options)]);
            } else {
                parts.push([printComment(commentPath, options)]);
            }
        }
    }, "comments");

    if (parts.length === 0) {
        return "";
    }

    if (parts[parts.length - 1] === hardline) {
        parts.pop();
    }

    return parts;
}

function handleCommentInEmptyBody(comment, text, options, ast, isLastComment) {
    if (
        comment.enclosingNode?.type === "BlockStatement" &&
        comment.enclosingNode?.body.length === 0
    ) {
        addDanglingComment(comment.enclosingNode, comment);
        return true;
    }

    return false;
}

function handleCommentAttachedToOpenBrace(
    comment,
    text,
    options,
    ast,
    isLastComment
) {
    if (comment.enclosingNode?.type === "BlockStatement") {
        // if a comment is enclosed in a block statement and starts on the same line,
        // it is considered "attached" to the opening brace.
        if (comment.start.line === comment.enclosingNode.start.line) {
            comment.attachToBrace = true;
            addDanglingComment(comment.enclosingNode, comment);
            return true;
        }
        return false;
    }
}

function handleCommentInEmptyParens(
    comment,
    text,
    options,
    ast,
    isLastComment
) {
    if (
        comment.enclosingNode?.type === "CallExpression" &&
        comment.enclosingNode?.arguments.length === 0
    ) {
        addDanglingComment(comment.enclosingNode, comment);
        return true;
    }

    if (
        comment.enclosingNode?.type === "FunctionExpression" &&
        comment.enclosingNode?.params.length === 0
    ) {
        addDanglingComment(comment.enclosingNode, comment);
        return true;
    }

    return false;
}

function handleOnlyComments(comment, text, options, ast, isLastComment) {
    const { enclosingNode, followingNode } = comment;

    if (ast && ast.body && ast.body.length === 0) {
        addDanglingComment(ast, comment);
        return true;
    }

    if (enclosingNode?.type === "Program" && enclosingNode?.body.length === 0) {
        addDanglingComment(enclosingNode, comment);
        return true;
    }

    if (followingNode?.type === "Program" && followingNode?.body.length === 0) {
        addDanglingComment(followingNode, comment);
        return true;
    }

    return false;
}

function getLineBreakCount(text) {
    return text.split(/[\r\n\u2028\u2029]/).length - 1;
}

export { printDanglingComments, handleComments, printComment };
