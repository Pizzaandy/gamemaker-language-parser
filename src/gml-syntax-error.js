import ErrorListener from 'antlr4/src/antlr4/error/ErrorListener.js';
import GameMakerLanguageLexer from '../Generated/GameMakerLanguageLexer.js';

export default class GameMakerParseErrorListener extends ErrorListener {
    constructor() {
        super();
    }

    // TODO: better error messages
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const parser = recognizer;
        const wrongSymbol = offendingSymbol.text;

        const tokens = parser.getInputStream();
        const stack = parser.getRuleInvocationStack();

        const expected = stack[0]
            .replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
            .toLowerCase();
        const symbolStr = parser.getExpectedTokens().toString(parser.symbolicNames);
        throw (
            `Syntax Error (line ${line}, column ${column}): ` +
            `unexpected symbol '${wrongSymbol}', expecting ${expected}\n` +
            msg + "\n" +
            `Stack: ${stack}`
        );
    }
}