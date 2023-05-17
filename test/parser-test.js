import GMLParser from '../src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = 'test/input/loungeware.gml';
let input = fs.readFileSync(fp, 'utf8');

input = `function/*fuck*/ a(/*shit*/) /*ass*/ {
    a /*bollocks*/ = b + c // end of line
    // own line
}`;

console.time("total");
const ast = GMLParser.parse(input, {getLocations: false});
console.timeEnd("total");

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);
