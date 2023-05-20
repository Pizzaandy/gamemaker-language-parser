import GMLParser from "../../parser/gml-parser.js";
import { print, printComment } from "./printer/print.js";

export const languages = [
    {
        name: 'GameMaker Language',
        extensions: ['.gml'],
        parsers: ['gml-parse'],
    }
];

export const parsers = {
    'gml-parse': {
        parse: text => GMLParser.parse(text, {
            getLocations: true,
            simplifyLocations: false
        }),
        astFormat: 'gml-ast',
        locStart: (node) => node.start.index,
        locEnd: (node) => node.end.index
    }
}

export const printers = {
    'gml-ast': {
        print: print,
        printComment: printComment,
        isBlockComment: (comment) => comment.type === "CommentBlock",
        canAttachComment: (node) => node.type && !node.type.includes("Comment"),
    }
}

export const defaultOptions = {
    tabWidth: 4
}