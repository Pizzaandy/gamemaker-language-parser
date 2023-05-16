import antlr4, { Lexer } from 'antlr4';
import { PredictionMode } from 'antlr4';
import GameMakerLanguageLexer from '../Generated/GameMakerLanguageLexer.js';
import GameMakerLanguageParser from '../Generated/GameMakerLanguageParser.js';
import GameMakerASTBuilder from './gml-ast-builder.js';
import GameMakerParseErrorListener from './gml-syntax-error.js';

export default class GMLParser {
    constructor(text, options) {
        this.text = text;
        this.options = options;
        this.whitespaces = [];
    }

    static parse(
        text,
        options = {
            getHiddenNodes: true,
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

        if (this.options.getHiddenNodes) {
            lexer.reset();
            this.whitespaces = this.getHiddenNodes(lexer);
            //console.log(JSON.stringify(this.whitespaces, null, 2));
        }

        const builder = new GameMakerASTBuilder(this.options);

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

    // returns a list of non-significant nodes in lexical order
    // two types: Whitespace and CommentWhitespace
    getHiddenNodes(lexer) {
        let currentGroup = [];
        let nodes = [];

        for (
            let token = lexer.nextToken();
            token.type != GameMakerLanguageLexer.EOF;
            token = lexer.nextToken()
        ) {
            if (token.type == GameMakerLanguageLexer.SingleLineComment) {
                let node = {
                    type: "CommentLine",
                    value: token.text.replace(/^[\/][\/]/, ''),
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line,
                        index: token.stop
                    },
                };
                currentGroup.push(node);
            }
            else if (token.type == GameMakerLanguageLexer.MultiLineComment) {
                let node = {
                    type: "CommentBlock",
                    value: token.text.replace(/^[\/][\*]/, '').replace(/[\*][\/]$/, ''),
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line + getLineBreakCount(token.text),
                        index: token.stop
                    },
                };
                currentGroup.push(node);
            } else if (token.type === GameMakerLanguageLexer.WhiteSpaces
                || token.type === GameMakerLanguageLexer.LineTerminator) {
                let node = {
                    type: "Whitespace",
                    value: token.text,
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line + getLineBreakCount(token.text),
                        index: token.stop
                    },
                    line: token.line,
                    isNewline: token.type === GameMakerLanguageLexer.LineTerminator
                };
                currentGroup.push(node);
            } else {
                // non-hidden token, end whitespace group
                if (currentGroup.length < 1) { continue; }
                let groupComments = [];
                let groupText = "";
                for (const wsNode of currentGroup) {
                    if (wsNode.type === "CommentLine" || wsNode.type === "CommentBlock") {
                        groupComments.push(wsNode);
                    }
                    groupText += wsNode.value;
                }
                nodes.push({
                    type: groupComments.length > 0 ? "CommentWhitespace" : "Whitespace",
                    text: groupText,
                    comments: groupComments,
                    start: currentGroup[0].start,
                    end: currentGroup[currentGroup.length - 1].end,
                    newLineCount: (groupText.matchAll(/[\r\n\u2028\u2029]/g) || []).length
                });
                currentGroup = [];
            }
        }

        return nodes;
    }
}

export function getLineBreakCount(text) {
    return text.split(/[\r\n\u2028\u2029]/).length - 1;
}