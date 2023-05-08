import { parse, printTokens } from './src/gml-parser.js';
import fs from 'fs';
import { inspect } from 'util';

const fp = './test/character_controller_step.gml';
let input = fs.readFileSync(fp, 'utf8');

input = `#region #region`
const ast = parse(input, true);

const astText = JSON.stringify(ast, null, 2);
const lines = astText.split('\n');
for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}