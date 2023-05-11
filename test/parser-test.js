import GMLParser from '../src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = 'test/input/loungeware.gml';
let input = fs.readFileSync(fp, 'utf8');

// const options = {
//     getLocationInformation: false,
// }
input = `if (/*bruh*/ foo) bar()`

console.time();
const ast = GMLParser.parse(input);
console.timeEnd();

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);
