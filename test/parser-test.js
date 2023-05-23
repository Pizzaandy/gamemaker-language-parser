import GMLParser from '../src/parser/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = 'test/input/loungeware.gml';
let input = fs.readFileSync(fp, 'utf8');

input = `switch foo {
    case bar:
    case baz:
        break
    case foobar:
        break
}`;

console.time("cold");
GMLParser.parse(input, {getLocations: true});
console.timeEnd("cold");

console.time("warm");
const ast = GMLParser.parse(input, {getLocations: true});
console.timeEnd("warm");

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);
