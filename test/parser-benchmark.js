import GMLParser from '../src/parser/gml-parser.js';
import fs from 'fs';

const options = {
    getLocationInformation: true,
}

const files = fs.readdirSync("test/large-files");

console.profile("benchmark")

for (const file of files) {
    console.log(`\n==== Parsing ${file} ====`);
    let input = fs.readFileSync("test/large-files/" + file, "utf8");
    console.time(file)
    let ast = GMLParser.parse(input);
    console.timeEnd(file)
}

for (const file of files) {
    console.log(`\n==== Parsing ${file} ====`);
    let input = fs.readFileSync("test/large-files/" + file, "utf8");
    console.time(file + " (warm)")
    let ast = GMLParser.parse(input);
    console.timeEnd(file  + " (warm)")
}

console.profileEnd("benchmark")