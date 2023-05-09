import { parse, printTokens } from './src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = './test/SnowState.gml';
let input = fs.readFileSync(fp, 'utf8');

// input = String.raw`
//foo = bar
//`

console.profile("parse");
const ast = parse(input, {getLocationInformation: false});
console.profileEnd();

const astText = JSON.stringify(ast, null, 2);
clipboardy.writeSync(astText);

const lines = astText.split('\n');
for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}