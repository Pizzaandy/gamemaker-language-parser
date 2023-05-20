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
    lineShouldEndWithSemicolon,
    isLastStatement,
    isNextLineEmpty
} from "./util.js";

export function print(path, options, print) {
    const node = path.getValue();

    if (!node) { return ""; }

    if (typeof node === "string") { return node; }

    switch (node.type) {
        case "Program": {
            return printStatements(path, options, print, "body");
        }
        case "BlockStatement": {
            return [
                "{",
                indent([
                    softline,
                    join(line, printStatements(path, options, print, "body"))
                ]),
                softline,
                "}"
            ];
        }
        case "IfStatement": {
            if (node.alternate == null) {
                return [
                    "if", " (", print("test"), ") ",
                    printInBlock(path, options, print, "consequent")
                ];
            } else {
                return [
                    "if", " (", print("test"), ") ",
                    print("consequent"),
                    " else ", print("alternate")
                ];
            }
        }
        case "AssignmentExpression": {
            const groupId = Symbol("assignment");
            return group([
                group(print("left")),
                " ", node.operator,
                group(indent(line), { id: groupId }),
                lineSuffixBoundary,
                indentIfBreak(print("right"), { groupId }),
            ]);
        }
        case "CallExpression": {
            return [
                print("object"),
                group([
                    '(',
                    indent([
                        softline,
                        join([",", line], path.map(print, "arguments"))
                    ]),
                    softline,
                    ')'
                ])
            ];
        }
        case "MemberDotExpression": {
            return group([
                print("object"), softline, ".", print("property")
            ]);
        }
        case "ArrayExpression": {
            return group([
                '[',
                indent([
                    softline,
                    join([",", line], path.map(print, "elements"))
                ]),
                softline,
                ']'
            ]);
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

function printInBlock(path, options, print, expressionKey) {
    const node = path.getValue()[expressionKey];
    if (node.type !== "BlockStatement") {
        return [
            '{',
            indent([
                softline,
                print(expressionKey), optionalSemicolon()
            ]),
            softline,
            '}'
        ];
    } else {
        return print(expressionKey);
    }
}

function printStatements(path, options, print, childrenAttribute) {
    return path.map((childPath) => {
        const parts = [];
        parts.push(print(childPath));

        if (lineShouldEndWithSemicolon(childPath)) {
            parts.push(optionalSemicolon());
        }

        if (!isLastStatement(childPath)) {
            parts.push(hardline);
            if (isNextLineEmpty(options.originalText, childPath.getValue(), options)) {
                parts.push(hardline);
            }
        }

        return parts;
    }, childrenAttribute);
}

export function printComment(commentPath) {
    const comment = commentPath.getValue();
    switch (comment.type) {
        case "CommentBlock": {
            // for now, don't touch single line block comments
            if (comment.lineCount === 1) {
                return `/*${comment.value}*/`;
            }

            const lines = comment.value.split(/[\r\n\u2028\u2029]/);
            // if this is a block comment, handle indentation
            if (
                lines
                    .slice(1, lines.length - 1)
                    .every((line) => line.trim()[0] === "*")
            ) {
                return join(
                    "/*",
                    hardline,
                    lines.map(
                        (line, index) =>
                            (index > 0 ? " " : "") +
                            (index < lines.length - 1 ? line.trim() : line.trimLeft())
                    ),
                    "*/",
                );
            }

            // otherwise we can't be sure about indentation, so just print as is
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

function optionalSemicolon() {
    return ";";
}