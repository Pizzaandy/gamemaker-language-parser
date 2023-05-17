import antlr4, { Lexer } from 'antlr4';
import { PredictionMode } from 'antlr4';
import GameMakerLanguageLexer from '../Generated/GameMakerLanguageLexer.js';
import GameMakerLanguageParser from '../Generated/GameMakerLanguageParser.js';
import GameMakerASTBuilder from './gml-ast-builder.js';
import GameMakerParseErrorListener from './gml-syntax-error.js';
import { attachComments } from './gml-comments.js';

export default class GMLParser {
    constructor(text, options) {
        this.text = text;
        this.whitespaces = [];
        this.comments = [];
        this.options = Object.assign({}, GMLParser.optionDefaults, options);
    }

    static optionDefaults = {
        handleComments: true,
        getLocations: true,
        simplifyLocations: true,
    }

    static parse(
        text,
        options = {
            handleComments: true,
            getLocations: true,
            simplifyLocations: true
        }
    ) {
        return new this(text, options).parse();
    }

    parse() {
        console.time("lexing");
        const chars = new antlr4.InputStream(this.text);
        const lexer = new GameMakerLanguageLexer(chars);
        lexer.strictMode = false;
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new GameMakerLanguageParser(tokens);

        console.timeEnd("lexing");

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

        console.time("building ast");

        if (this.options.handleComments) {
            lexer.reset();
            this.getHiddenNodes(lexer);
        }

        const builder = new GameMakerASTBuilder(this.options, this.whitespaces);
        let astTree = {};
        astTree = builder.build(tree);
        attachComments(astTree, this.comments);

        if (!this.options.getLocations) {
            this.removeLocationInfo(astTree);
        } else if (this.options.simplifyLocations) {
            this.simplifyLocationInfo(astTree);
        }

        console.timeEnd("building ast");

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

    // populates comments and whitespaces lists
    // also records any trailing or leading whitespace on comments
    getHiddenNodes(lexer) {
        let nodes = [];
        let reachedEOF = false;
        let prevComment = null;
        let prevWS = "";
        for (
            let token = lexer.nextToken();
            !reachedEOF;
            token = lexer.nextToken()
        ) {
            if (token.type === GameMakerLanguageLexer.EOF) {
                reachedEOF = true;

            } else if (token.type == GameMakerLanguageLexer.SingleLineComment) {
                let node = {
                    type: "CommentLine",
                    value: token.text.replace(/^[\/][\/]/, ''),
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line,
                        index: token.stop
                    },
                    leadingWS: prevWS,
                    trailingWS: "",
                };
                prevComment = node;
                prevWS = "";
                this.comments.push(node);

            } else if (token.type == GameMakerLanguageLexer.MultiLineComment) {
                let node = {
                    type: "CommentBlock",
                    value: token.text.replace(/^[\/][\*]/, '').replace(/[\*][\/]$/, ''),
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line + getLineBreakCount(token.text),
                        index: token.stop
                    },
                    leadingWS: prevWS,
                    trailingWS: "",
                };
                prevComment = node;
                prevWS = "";
                this.comments.push(node);

            } else if (token.type === GameMakerLanguageLexer.WhiteSpaces
                || token.type === GameMakerLanguageLexer.LineTerminator) {
                const isNewline = token.type === GameMakerLanguageLexer.LineTerminator;
                let node = {
                    type: "Whitespace",
                    value: token.text,
                    start: { line: token.line, index: token.start },
                    end: {
                        line: token.line + getLineBreakCount(token.text),
                        index: token.stop
                    },
                    line: token.line,
                    isNewline: isNewline
                };
                this.whitespaces.push(node);
                if (prevComment !== null) {
                    prevComment.trailingWS += token.text;
                }
                prevComment = null;
                prevWS += token.text;

            } else {
                prevComment = null;
                prevWS = "";
            }
        }
    }

    removeLocationInfo(obj) {
        for (const prop in obj) {
            if (prop === "start" || prop === "end") {
                delete obj[prop];
            } else if (typeof obj[prop] === "object") {
                this.removeLocationInfo(obj[prop]);
            }
        }
    }

    simplifyLocationInfo(obj) {
        for (const prop in obj) {
            if (prop === "start") {
                obj.start = obj.start.index;
            } else if (prop === "end") {
                obj.end = obj.end.index;
            } else if (typeof obj[prop] === "object") {
                this.simplifyLocationInfo(obj[prop]);
            }
        }
    }
}

export function getLineBreakCount(text) {
    return text.split(/[\r\n\u2028\u2029]/).length - 1;
}