import antlr4 from 'antlr4';
import GameMakerLanguageLexer from './GameMakerLanguageLexer.js';
import GameMakerLanguageParser from './GameMakerLanguageParser.js';

const input = '{}';
const chars = new antlr4.InputStream(input);
const lexer = new GameMakerLanguageLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new GameMakerLanguageParser(tokens);

lexer.strictMode = false; // do not use js strictMode

console.log("yo");

const tree = parser.program();

console.log(tree.toStringTree());
