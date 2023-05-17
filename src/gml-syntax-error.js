import ErrorListener from 'antlr4/src/antlr4/error/ErrorListener.js';

export default class GameMakerParseErrorListener extends ErrorListener {
    constructor() {
        super();
    }

    // TODO: better error messages
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const parser = recognizer;
        let wrongSymbol = offendingSymbol.text;

        if (wrongSymbol === "<EOF>") {
            wrongSymbol = "end of file";
        } else {
            wrongSymbol = `symbol '${wrongSymbol}'`;
        }

        const tokens = parser.getInputStream();
        const stack = parser.getRuleInvocationStack();

        const currentRule = stack[0];

        if (currentRule == "block") {
            const openBraceToken = parser._ctx.openBlock().start;
            throw (
                `Syntax Error (line ${openBraceToken.line}, column ${openBraceToken.column}): ` +
                `missing closing brace for this block`
            );
        }

        if (currentRule == "closeBlock") {
            const openBraceToken = parser._ctx.parentCtx.openBlock().start;
            throw (
                `Syntax Error (line ${openBraceToken.line}, column ${openBraceToken.column}): ` +
                `missing closing brace for this block`
            );
        }

        if (currentRule == "expression") {
            throw (
                `Syntax Error (line ${line}, column ${column}): ` +
                `unexpected ${wrongSymbol} in expression`
            );
        }

        if (currentRule == "statement") {
            throw (
                `Syntax Error (line ${line}, column ${column}): ` +
                `unexpected ${wrongSymbol} in statement`
            );
        }

        if (currentRule == "lValueExpression" && stack[1] == "incDecStatement") {
            throw (
                `Syntax Error (line ${line}, column ${column}): ` +
                `++, -- can only be used on a variable-addressing expression`
            );
        }

        const currentRuleFormatted = currentRule
            .replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
            .toLowerCase();

        throw (
            `Syntax Error (line ${line}, column ${column}): ` +
            `unexpected ${wrongSymbol}`
            + `while matching ${currentRuleFormatted}`
        );
    }
}