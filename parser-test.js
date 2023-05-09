import { parse, printTokens } from './src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = './test/__scribble_gen_6_build_lines.gml';
let input = fs.readFileSync(fp, 'utf8');

input = String.raw`abc.123 = foo`

const ast = parse(input);
const astText = JSON.stringify(ast, null, 2);

clipboardy.writeSync(astText);

const lines = astText.split('\n');
for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}