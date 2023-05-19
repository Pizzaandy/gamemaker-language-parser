import GMLParser from "../../parser/gml-parser";
import { printAst } from "./print"; 

const languages = [
    {
        name: 'GameMaker Language',
        extensions: ['.gml'],
        parsers: ['gml-parse'],
    }
];

const parsers = {
    'gml-parse': {
        parse: text => GMLParser.parse(text, {
            handleComments: false,
            getLocations: true,
            simplifyLocations: false
        }),
        astFormat: 'gml-ast'
    }
}

const printers = {
    'gml-ast': {
        print: printAst
    }
}

export {
    languages,
    parsers,
    printers
}