import GMLParser from '../src/gml-parser.js';
import fs from 'fs';

const options = {
    getLocationInformation: true,
}

const files = fs.readdirSync("test/input");

for (const file of files) {
    console.log(`\n==== Parsing ${file} ====`);
    let input = fs.readFileSync("test/input/" + file, "utf8");
    let ast = GMLParser.parse(input, options);
}
