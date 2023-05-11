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

export function associateCommentsWithNode(node, ctx, _comments) {
    let comments = _comments;
    node.comments = [];

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        if (comment == null) { continue; }

        const startLine = comment.line;
        const endLine = startLine + (
            comment.value.matchAll(/[\r\n\u2028\u2029]/g) || []
        ).length;

        // 1) comment starts on the same line as the node ends
        if (startLine === ctx.stop.line) {
            console.log("trailing comment");
            node.comments.push(comment.value);
        }

        // 2) comment starts on the line immediately following the node
        // and there is at least one empty line after the comment
        if (startLine === ctx.stop.line + 1
            && comment.trailingNewLines >= 2) {
            console.log("under comment");
            node.comments.push(comment.value);
        }

        // 3) comment starts before node and is not already associated 
        // with a previous node. 
        if () {

        }
    }
}