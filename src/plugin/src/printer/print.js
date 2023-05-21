import { builders } from "prettier/doc";

const {
    breakParent,
    join,
    line,
    lineSuffix,
    group,
    conditionalGroup,
    indent,
    dedent,
    ifBreak,
    hardline,
    softline,
    literalline,
    align,
    dedentToRoot,
    concat,
    indentIfBreak,
    lineSuffixBoundary,
} = builders;

import {
    statementShouldEndWithSemicolon,
    isLastStatement,
    isNextLineEmpty,
    optionalSemicolon,
    isAssignmentLikeExpression,
} from "./util.js";

import { printDanglingComments } from "./comments.js";

export function print(path, options, print) {
    const node = path.getValue();

    if (!node) {
        return "";
    }

    if (typeof node === "string") {
        return node;
    }

    switch (node.type) {
        case "Program": {
            if (node.body.length === 0) {
                return printDanglingComments(path, options, true);
            }
            return printStatements(path, options, print, "body");
        }
        case "BlockStatement": {
            if (node.body.length === 0) {
                if (node?.comments?.length > 0) {
                    // an empty block with comments
                    return [
                        "{",
                        printDanglingComments(
                            path,
                            options,
                            true,
                            (comment) => comment.attachToBrace
                        ),
                        indent([
                            hardline,
                            join(
                                hardline,
                                printDanglingComments(
                                    path,
                                    options,
                                    true,
                                    (comment) => !comment.attachToBrace
                                )
                            ),
                        ]),
                        hardline,
                        "}",
                    ];
                } else {
                    // empty braces
                    let emptyBlockText = "\n";
                    if (
                        (path.grandparent &&
                            isAssignmentLikeExpression(
                                path.grandparent.type
                            )) ||
                        path.parent.type == "Program"
                    ) {
                        emptyBlockText = "";
                    }
                    return ["{", emptyBlockText, "}"];
                }
            }

            return [
                "{",
                printDanglingComments(
                    path,
                    options,
                    true,
                    (comment) => comment.attachToBrace
                ),
                indent([
                    hardline, // the first statement of a non-empty block must begin on its own line.
                    printStatements(path, options, print, "body"),
                ]),
                hardline,
                "}",
            ];
        }
        case "IfStatement": {
            const parts = [];
            parts.push(
                printStatementWithClause(path, options, print, "if", "test", "consequent")
            );

            if (node.alternate != null) {
                // don't add braces to else-if
                const elseBlock =
                    node.alternate.type === "IfStatement"
                        ? print("alternate")
                        : printInBlock(path, options, print, "alternate");
                parts.push([
                    " else ",
                    elseBlock,
                ]);
            }
            return parts;
        }
        case "ForStatement": {
            return [
                "for (",
                group([
                    indent([
                        ifBreak(line),
                        join([";", line], [print("init"), print("test"), print("update")]),
                    ]),
                    line,
                ]),
                ") ",
                printInBlock(path, options, print, "body"),
            ];
        }
        case "WhileStatement": {
            return printStatementWithClause(path, options, print, "while", "test", "body");
        }
        case "RepeatStatement": {
            return printStatementWithClause(path, options, print, "repeat", "test", "body");
        }
        case "WithStatement": {
            return printStatementWithClause(path, options, print, "with", "test", "body");
        }
        case "FunctionExpression": {
            const parts = [];
            parts.push(["function", node.id ? " " : "", print("id")]);

            if (node.params.length > 0) {
                parts.push(
                    printDelimitedList(path, print, "params", "(", ")", {
                        delimiter: ",",
                        allowTrailingDelimiter: false,
                    })
                );
            } else {
                parts.push([
                    "(",
                    printDanglingComments(path, options, true),
                    ")",
                ]);
            }
            parts.push(" ");
            parts.push(printInBlock(path, options, print, "body"));
            return parts;
        }
        case "DefaultParameter": {
            return printSimpleDeclaration(print("left"), print("right"));
        }
        case "AssignmentExpression": {
            const groupId = Symbol("assignment");
            return group([
                group(print("left")),
                " ",
                node.operator,
                group(indent(line), { id: groupId }),
                lineSuffixBoundary,
                indentIfBreak(print("right"), { groupId }),
            ]);
        }
        case "GlobalVarStatement":
        case "VariableDeclaration": {
            return [
                node.kind,
                " ",
                printDelimitedList(path, print, "declarations", "", "", {
                    delimiter: ",",
                    allowTrailingDelimiter: false,
                    leadingNewline: false,
                    trailingNewline: false,
                }),
            ];
        }
        case "VariableDeclarator": {
            return printSimpleDeclaration(print("id"), print("init"));
        }
        case "CallExpression": {
            return [
                print("object"),
                printDelimitedList(path, print, "arguments", "(", ")", {
                    delimiter: ",",
                    allowTrailingDelimiter: false,
                }),
            ];
        }
        case "BinaryExpression": {
            return group([
                print("left"),
                " ",
                node.operator,
                line,
                print("right"),
            ]);
        }
        case "IncDecStatement":
        case "UnaryExpression": {
            if (node.prefix) {
                return [node.operator, print("argument")];
            } else {
                return [print("argument"), node.operator];
            }
        }
        case "MemberDotExpression": {
            if (
                path.parent?.type === "CallExpression" ||
                node.type === "CallExpression"
            ) {
                return [
                    print("object"),
                    group(indent([ifBreak(line), ".", print("property")])),
                ];
            } else {
                return [
                    print("object"),
                    group(indent([softline, ".", print("property")])),
                ];
            }
        }
        case "MemberIndexExpression": {
            let accessor = print("accessor");
            if (accessor.length > 1) {
                accessor += " ";
            }
            let property = print("property");
            if (property === undefined) {
                property = printDelimitedList(path, print, "property", "", "", {
                    delimiter: ",",
                    allowTrailingDelimiter: false,
                });
            }
            return [
                print("object"),
                accessor,
                group(indent(property)),
                "]",
            ];
        }
        case "ArrayExpression": {
            return printDelimitedList(path, print, "elements", "[", "]", {
                delimiter: ",",
                allowTrailingDelimiter: true,
                forceBreak: node.hasTrailingComma,
            });
        }
        case "ReturnStatement": {
            if (node.argument) {
                return ["return ", print("argument")];
            } else {
                return "return";
            }
        }
        case "ThrowStatement": {
            if (node.argument) {
                return ["throw ", print("argument")];
            } else {
                return "throw";
            }
        }
        case "DeleteStatement": {
            return ["delete ", print("argument")];
        }
        case "BreakStatement": {
            return "break";
        }
        case "ExitStatement": {
            return "exit";
        }
        case "ContinueStatement": {
            return "continue";
        }
        case "EmptyStatement": {
            return "";
        }
        case "Literal": {
            return node.value.toString();
        }
        case "Identifier": {
            return node.name;
        }
    }
}

function printDelimitedList(
    path,
    print,
    listKey,
    startChar,
    endChar,
    {
        delimiter = ",",
        allowTrailingDelimiter = true,
        leadingNewline = true,
        trailingNewline = true,
        forceBreak = false,
    } = delimiterOptions
) {
    const lineBreak = forceBreak ? hardline : line;
    const finalDelimiter = allowTrailingDelimiter ? delimiter : "";
    return group([
        startChar,
        indent([
            ifBreak(leadingNewline ? lineBreak : ""),
            join([delimiter, lineBreak], path.map(print, listKey)),
        ]),
        ifBreak([finalDelimiter, trailingNewline ? lineBreak : ""]),
        endChar,
    ]);
}

// wrap a statement in a block if not already in a block
function printInBlock(path, options, print, expressionKey) {
    const node = path.getValue()[expressionKey];
    if (node.type !== "BlockStatement") {
        return [
            "{",
            indent([
                hardline,
                print(expressionKey),
                optionalSemicolon(node.type),
            ]),
            hardline,
            "}",
        ];
    } else {
        return [print(expressionKey), optionalSemicolon(node.type)];
    }
}

function printStatements(path, options, print, childrenAttribute) {
    return path.map((childPath) => {
        const parts = [];
        const node = childPath.getValue();

        const printed = print();
        const semi = optionalSemicolon(node.type);

        if (docHasTrailingComment(printed)) {
            printed.splice(printed.length - 1, 0, semi);
            parts.push(printed);
        } else {
            parts.push(printed);
            parts.push(semi);
        }

        if (!isLastStatement(childPath)) {
            parts.push(hardline);
            if (isNextLineEmpty(options.originalText, node, options)) {
                parts.push(hardline);
            }
        }

        return parts;
    }, childrenAttribute);
}

function printStatementWithClause(path, options, print, keyword, clauseKey, bodyKey) {
    return [
        `${keyword} (`,
        group([indent([ifBreak(line), print(clauseKey)]), ifBreak(line)]),
        ") ",
        printInBlock(path, options, print, bodyKey),
    ]
}

function docHasTrailingComment(doc) {
    if (Array.isArray(doc) && doc.length > 0) {
        const lastItem = doc[doc.length - 1];
        if (Array.isArray(lastItem) && lastItem.length > 0) {
            const commentArr = lastItem[0];
            if (Array.isArray(commentArr) && commentArr.length > 0) {
                return commentArr.some((item) => {
                    return (
                        typeof item === "string" &&
                        (item.startsWith("//") || item.startsWith("/*"))
                    );
                });
            }
        }
    }
    return false;
}

function printSimpleDeclaration(leftDoc, rightDoc) {
    return rightDoc ? [leftDoc, " = ", rightDoc] : leftDoc;
}