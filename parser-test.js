import { parse, logTokens } from './gml-parser.js';
import fs from 'fs';

const fp = 'Parsing/test/__scribble_gen_6_build_lines.gml';
let input = fs.readFileSync(fp, 'utf8');

const ast = parse(input);
console.log(JSON.stringify(ast, null, 2));

