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
    }

    static parse(
        text, 
        options = {
            getComments: true,
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

        console.time("parse");
        try {
            var tree = parser.program();
        } catch (error) {
            console.error(error);
            console.timeEnd();
            return null;
        }
        console.timeEnd("parse");

        lexer.reset();
        const comments = this.options.getComments ? this.collectComments(lexer) : [];
        const visitor = new GameMakerASTBuilder(comments, this.options);

        console.time("build ast");
        let astTree = {};
        try {
            astTree = visitor.visitProgram(tree);
        } catch (error) {
            console.error(error);
            return null;
        }
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

    collectComments(lexer) {
        const comments = [];
        for (
            let token = lexer.nextToken();
            token.type != GameMakerLanguageLexer.EOF;
            token = lexer.nextToken()
        ) {
            if (token.type == GameMakerLanguageLexer.SingleLineComment) {
                comments.push({
                    type: "CommentLine",
                    value: token.text.replace(/^[\/][\/]/, ''),
                    start: token.start,
                    end: token.stop
                });
            }
            if (token.type == GameMakerLanguageLexer.MultiLineComment) {
                comments.push({
                    type: "CommentBlock",
                    value: token.text.replace(/^[\/][\*]/, '').replace(/[\*][\/]$/, ''),
                    start: token.start,
                    end: token.stop
                });
            }
        }
        return comments;
    }
}