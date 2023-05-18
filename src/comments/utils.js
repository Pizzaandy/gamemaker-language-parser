function addComment(node, comment) {
    const comments = (node.comments ??= []);
    comments.push(comment);
    console.log(`Attached '${comment.value}' to ${node.type}`);
}

export function addLeadingComment(node, comment) {
    comment.leading = true;
    comment.trailing = false;
    addComment(node, comment);
}

export function addDanglingComment(node, comment) {
    comment.leading = false;
    comment.trailing = false;
    addComment(node, comment);
}

export function addTrailingComment(node, comment) {
    comment.leading = false;
    comment.trailing = true;
    addComment(node, comment);
}

export function hasNewline(text) {
    return text.split(/[\r\n\u2028\u2029]/).length - 1> 0;
}