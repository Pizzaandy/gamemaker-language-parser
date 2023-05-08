import { parse, logTokens } from './src/gml-parser.js';
import fs from 'fs';
import prune from 'json-prune';

const fp = './test/__scribble_gen_6_build_lines.gml';
let input = fs.readFileSync(fp, 'utf8');

const ast = parse(input);
console.log(JSON.stringify(prune(ast), null, 2));

