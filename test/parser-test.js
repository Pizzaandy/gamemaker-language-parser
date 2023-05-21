import GMLParser from '../src/parser/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = 'test/input/loungeware.gml';
let input = fs.readFileSync(fp, 'utf8');

input = `a[1]
`;

console.time("total");
const ast = GMLParser.parse(input, {getLocations: true});
console.timeEnd("total");

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);
