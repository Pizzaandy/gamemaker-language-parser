// A comment group (g) is associated with a node (n) if:
//
//   - g starts on the same line as n ends
//   - g starts on the line immediately following n, and there is
//     at least one empty line after g and before the next node
//   - g starts before n and is not associated to the node before n
//     via the previous rules
//

export function associateCommentsWithNodes(builder) {
    function findNeighborNode(idx, direction) {
        idx += direction;
        while (
            (builder.nodes[idx] !== undefined) && (
                !builder.nodes[idx].type.includes("Statement") &&
                !builder.nodes[idx].type.includes("Expression") &&
                !builder.nodes[idx].type.includes("Declaration") &&
                !builder.nodes[idx].type.includes("Enum")
            )
        ) {
            idx += direction;
        }
        return builder.nodes[idx];
    }

    function attachComment(node, comment) {
        if (node.comments == undefined) {
            node.comments = [];
        }
        //console.log(`attached comment '${comment.value}' to node ${node.text}`)
        node.comments.push(comment);
    }

    // sort nodes in lexical order
    builder.nodes.sort(function(a, b) {
        // sort nodes by size if they start at the same index 
        if (a.start.index === b.start.index) {
            console.log(`node ${a.type}, size: ${(a.end.index - a.start.index + 1)}`);
            console.log(`node ${b.type}, size: ${(b.end.index - b.start.index + 1)}\n`);
            return (b.end.index - b.start.index) - (a.end.index - a.start.index);
        }
        return a.start.index - b.start.index;
    });

    for (const node of builder.nodes) {
        console.log(node.type);
    }

    let rootNode;

    for (let i = 0; i < builder.nodes.length; i++) {
        const node = builder.nodes[i];
        node.trailingNewLines = 0;

        if (node.type === "Program") { 
            rootNode = node; 
            continue;
        }

        if (node.type === "WhiteSpace" && node.isNewline) {
            if (i > 0) {
                builder.nodes[i - 1].trailingNewLines += 1;
            }
            continue;
        }

        if (node.type === "CommentLine" || node.type === "CommentBlock") {
            const nextNode = findNeighborNode(i, 1);
            const prevNode = findNeighborNode(i, -1);

            // 1) comment starts on the same line as previous node ends
            if (prevNode && prevNode.end.line === node.start.line) {
                attachComment(prevNode, node);
            }

            // 2) comment starts on the line immediately after previous node, 
            // and there is at least one empty line after the comment and before the next node
            else if (prevNode && node.start.line === prevNode.end.line + 1 &&
                nextNode && node.end.line < nextNode.start.line - 1) {
                attachComment(prevNode, node);
            }

            // 3) comment starts before next node and is not 
            // already associated with the previous node
            else if (nextNode) {
                attachComment(nextNode, node);
            } else {
                // dangling comment!
                attachComment(rootNode, node);
            }
        }
    }
}