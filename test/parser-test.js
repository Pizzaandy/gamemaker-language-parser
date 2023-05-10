import GMLParser from '../src/gml-parser.js';
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = './test/test.gml';
let input = fs.readFileSync(fp, 'utf8');

const parser = new GMLParser(
    input, {
        getLocationInformation: true,
    }
);

const ast = parser.parse(input);

const astText = JSON.stringify(ast, null, 3);
clipboardy.writeSync(astText);