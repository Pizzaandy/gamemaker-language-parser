import { parse, printTokens } from './src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = './test/SnowState.gml';
let input = fs.readFileSync(fp, 'utf8');

// input = String.raw`
//foo = bar
//`
//console.profile("parse");
console.time();

const ast = parse(input, {getLocationInformation: true});

console.timeEnd();
//console.profileEnd();

const astText = JSON.stringify(ast, null, 2);
clipboardy.writeSync(astText);

// const lines = astText.split('\n');
// for (let i = 0; i < lines.length; i++) {
//     console.log(lines[i]);
// }