import { util } from "prettier";

const {
    skipNewline,
    skipSpaces,
    skipToLineEnd,
    skipInlineComment,
    skipTrailingComment,
    hasNewline
} = util;

function lineShouldEndWithSemicolon(path) {
    const node = path.getValue();
    const parentNode = path.getParentNode();
    if (!parentNode) {
        return false;
    }

    // for single line control structures written in a shortform (ie without a block),
    // we need to make sure the single body node gets a semicolon
    if (
        ["ForStatement", "WhileStatement", "DoUntilStatement", "IfStatement", "SwitchStatement"].includes(
            parentNode.type
        ) &&
        node.type !== "BlockStatement" &&
        node.type !== "IfStatement" &&
        (parentNode.body === node || parentNode.alternate === node)
    ) {
        return true;
    }
    return nodeHasStatement(node);
}

function nodeHasStatement(node) {
    return [
        "CallExpression",
        "AssignmentExpression",
        "FunctionDeclaration",
        "GlobalVarStatement",
        "ReturnStatement",
        "BreakStatement",
        "ContinueStatement",
        "ExitStatement",
        "ThrowStatement",
        "ForStatement",
        "IncDecStatement",
        "VariableDeclaration",
    ].includes(node.type);
}

function isLastStatement(path) {
    const body = getParentNodeListProperty(path);
    if (!body) {
        return true;
    }
    const node = path.getValue();
    return body[body.length - 1] === node;
}

function getParentNodeListProperty(path) {
    const parent = path.getParentNode();
    if (!parent) {
        return null;
    }
    return getNodeListProperty(parent);
}

function getNodeListProperty(node) {
    const body = node.children || node.body || node.adaptations;
    return Array.isArray(body) ? body : null;
}


function isNextLineEmpty(text, startIndex) {
    let oldIdx = null;
    let idx = startIndex;
    while (idx !== oldIdx) {
        // We need to skip all the potential trailing inline comments
        oldIdx = idx;
        idx = skipToLineEnd(text, idx);
        idx = skipInlineComment(text, idx);
        idx = skipSpaces(text, idx);
    }
    idx = skipTrailingComment(text, idx);
    idx = skipNewline(text, idx);
    return idx !== false && hasNewline(text, idx);
}

export {
    lineShouldEndWithSemicolon,
    isLastStatement,
    isNextLineEmpty,
}