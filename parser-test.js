import { parse, printTokens } from './src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

//const fp = './test/__scribble_gen_6_build_lines.gml';
const fp = './test/SnowState.gml';
let input = fs.readFileSync(fp, 'utf8');

// input = `
// (function foo() {})() // good
// `;

const ast = parse(input, {getLocationInformation:false});

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);