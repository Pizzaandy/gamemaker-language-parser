import antlr4 from 'antlr4';
import { PredictionMode } from 'antlr4';
import GameMakerLanguageLexer from '../Generated/GameMakerLanguageLexer.js';
import GameMakerLanguageParser from '../Generated/GameMakerLanguageParser.js';
import GameMakerASTBuilder from './gml-ast-builder.js';
import GameMakerParseErrorListener from './gml-syntax-error.js';

export default class GMLParser {
    constructor(text, options) {
        this.text = text;
        this.options = options;
        this.comments = [];
        this.whitespaces = [];
    }

    static parse(
        text,
        options = {
            getComments: true,
            getWhitespaces: true,
            getLocationInformation: true,
        }
    ) {
        return new this(text, options).parse();
    }

    parse() {
        console.time("lex");
        const chars = new antlr4.InputStream(this.text);
        const lexer = new GameMakerLanguageLexer(chars);
        lexer.strictMode = false;
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new GameMakerLanguageParser(tokens);

        console.timeEnd("lex");

        parser._interp.predictionMode = PredictionMode.SLL;

        parser.removeErrorListeners();
        parser.addErrorListener(new GameMakerParseErrorListener());

        console.time("PARSING");
        try {
            var tree = parser.program();
        } catch (error) {
            console.error(error);
            console.timeEnd();
            return null;
        }
        console.timeEnd("PARSING");

        if (this.options.getComments || this.options.getWhitespaces) {
            lexer.reset();
            this.getHiddenNodes(lexer);
        }

        const builder = new GameMakerASTBuilder(this.options, this.comments, this.whitespaces);

        console.time("build ast");
        let astTree = {};
        astTree = builder.build(tree);
        console.timeEnd("build ast");

        return astTree;
    }

    printTokens(text) {
        console.log("===== TOKEN =====" + " ".repeat(14) + "===== TEXT =====");

        const chars = new antlr4.InputStream(text);
        const lexer = new GameMakerLanguageLexer(chars);
        lexer.strictMode = false;
        const names = GameMakerLanguageLexer.symbolicNames;

        for (
            let token = lexer.nextToken();
            token.type != GameMakerLanguageLexer.EOF;
            token = lexer.nextToken()
        ) {
            const name = names[token.type];
            console.log(
                `${name}:${" ".repeat(29 - name.length)} '${token.text.replace('\n', '\\n')}'`
            );
        }

        console.log("");
    }

    // returns a list of comments in lexical order
    getHiddenNodes(lexer) {
        for (
            let token = lexer.nextToken();
            token.type != GameMakerLanguageLexer.EOF;
            token = lexer.nextToken()
        ) {
            let node;
            if (this.options.getComments) {
                if (token.type == GameMakerLanguageLexer.SingleLineComment) {
                    node = {
                        type: "CommentLine",
                        value: token.text.replace(/^[\/][\/]/, ''),
                        start: { line: token.line, index: token.start },
                        end: {
                            line: token.line,
                            index: token.stop
                        },
                    };
                    this.comments.push(node);
                }
                else if (token.type == GameMakerLanguageLexer.MultiLineComment) {
                    node = {
                        type: "CommentBlock",
                        value: token.text.replace(/^[\/][\*]/, '').replace(/[\*][\/]$/, ''),
                        start: { line: token.line, index: token.start },
                        end: {
                            line: token.line + (token.text.matchAll(/[\r\n\u2028\u2029]/g) || []).length,
                            index: token.stop
                        },
                    };
                    this.comments.push(node);
                }
            }

            if (this.options.getWhitespaces) {
                if (token.type === GameMakerLanguageLexer.WhiteSpaces
                    || token.type === GameMakerLanguageLexer.LineTerminator) {
                    node = {
                        type: "WhiteSpace",
                        value: token.text,
                        start: { line: token.line, index: token.start },
                        end: {
                            line: token.line + (token.text.matchAll(/[\r\n\u2028\u2029]/g) || []).length,
                            index: token.stop
                        },
                        line: token.line,
                        isNewline: token.type === GameMakerLanguageLexer.LineTerminator
                    };
                    this.whitespaces.push(node);
                }
            }
        }
    }
}