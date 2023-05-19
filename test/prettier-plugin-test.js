import { format } from "prettier";
import fs from 'fs';
import clipboardy from 'clipboardy';

const fp = 'test/input/loungeware.gml';
let input = fs.readFileSync(fp, 'utf8');

const output = format(input, {
    parser: "gml-parse",
    pluginSearchDirs: ["../gamemaker-language-parser"],
    plugins: ["prettier-plugin-gamemaker"],
});

clipboardy.writeSync(output);
