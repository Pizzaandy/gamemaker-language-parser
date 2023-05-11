import antlr4 from 'antlr4';
import { ParseTreeWalker } from 'antlr4';

// A comment group (g) is associated with a node (n) if:
//
//   - g starts on the same line as n ends
//   - g starts on the line immediately following n, and there is
//     at least one empty line after g and before the next node
//   - g starts before n and is not associated to the node before n
//     via the previous rules
//

export function associateCommentsWithNode(node, ctx, comments) {
    console.log("searching...");
    node.comments = [];

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];

        const startLine = comment.line;
        const endLine = startLine + (
            comment.value.matchAll(/[\r\n\u2028\u2029]/g) || []
        ).length;


        // comment starts on the same line as node ends
        if (ctx.stop.line === startLine) {
            console.log("found trailing comment");
            node.comments.push(comment.value);
        }

        // comment starts on the line immediately following node
        if (ctx.stop.line - 1 === comment.end) {
            console.log("found leading comment");
            node.comments.push(comment.value);
        }
    }
}