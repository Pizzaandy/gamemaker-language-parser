import { parse } from './gml-parser.js';

const input = 
`
function a(b, c=1) {}
`

const ast = parse(input);
const str = JSON.stringify(ast, null, 4);
console.log(str);