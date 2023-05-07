import { parse } from './gml-parser.js';

const input = 
`
switch (direction) {
    case 1:
        sprite_index = spr_idle_up;
        a = [1.25, foo(), 3, false, noone]
        break;
    default:
        break;
}
`

console.profile();

const ast = parse(input);
const str = JSON.stringify(ast, null, 2);
console.log(str);

console.profileEnd();