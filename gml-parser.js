import antlr4 from 'antlr4';
import GameMakerLanguageLexer from './Parsing/GameMakerLanguageLexer.js';
import GameMakerLanguageParser from './Parsing/GameMakerLanguageParser.js';
import GameMakerLanguageParserVisitor from './Parsing/GameMakerLanguageParserVisitor.js';

export function parse(text) {
    const chars = new antlr4.InputStream(text);
    const lexer = new GameMakerLanguageLexer(chars);
    lexer.strictMode = false; // do not use js strictMode

    let comments = collectComments(lexer);
    lexer.reset();

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new GameMakerLanguageParser(tokens);
    const tree = parser.program();

    const visitor = new GMLVisitor(comments);

    return visitor.visitProgram(tree);
}

function collectComments(lexer) {
    const comments = [];
    for (
        let token = lexer.nextToken();
        token.type != GameMakerLanguageLexer.EOF;
        token = lexer.nextToken()
    ) {
        if (token.type == GameMakerLanguageLexer.SingleLineComment) {
            comments.push({
                value: token.text
            });
        }
    }
    return comments;
}

export class GMLVisitor extends GameMakerLanguageParserVisitor {
    constructor(comments = []) {
        super();
        this.commentList = comments;
        for (let i = 0; i < comments.length; i++) {
            console.log(comments[i]);
        }
    }

    // Visit a parse tree produced by GameMakerLanguageParser#program.
    visitProgram(ctx) {
        return {
            type: "Program",
            body: this.visit(ctx.statementList()),
            comments: this.commentList
        };
    }

    // Visit a parse tree produced by GameMakerLanguageParser#statementList.
    visitStatementList(ctx) {
        let statements = ctx.statement();
        let list = []
        for (let i = 0; i < statements.length; i++) {
            const stmtObject = this.visit(statements[i]);
            if (stmtObject == null) { continue; }
            list.push(stmtObject);
        }
        return list;
    }

    // Visit a parse tree produced by GameMakerLanguageParser#statement.
    visitStatement(ctx) {
        if (ctx.block() != null) {
            return this.visit(ctx.block());
        }
        if (ctx.ifStatement() != null) {
            return this.visit(ctx.ifStatement());
        }
        if (ctx.variableDeclarationList() != null) {
            return this.visit(ctx.variableDeclarationList());
        }
        if (ctx.assignmentStatement() != null) {
            return this.visit(ctx.assignmentStatement());
        }
        if (ctx.callStatement() != null) {
            return this.visit(ctx.callStatement());
        }
        if (ctx.iterationStatement() != null) {
            return this.visit(ctx.iterationStatement());
        }
        if (ctx.functionDeclaration() != null) {
            return this.visit(ctx.functionDeclaration());
        }
        if (ctx.switchStatement() != null) {
            return this.visit(ctx.switchStatement());
        } 

        if (ctx.incDecStatement() != null) {
            return this.visit(ctx.incDecStatement());
        }
        if (ctx.returnStatement() != null) {
            return this.visit(ctx.returnStatement());
        }
        if (ctx.exitStatement() != null) {
            return this.visit(ctx.exitStatement());
        }
        if (ctx.withStatement() != null) {
            return this.visit(ctx.withStatement());
        }
        if (ctx.continueStatement() != null) {
            return this.visit(ctx.continueStatement());
        }
        if (ctx.breakStatement() != null) {
            return this.visit(ctx.breakStatement());
        }
        if (ctx.throwStatement() != null) {
            return this.visit(ctx.throwStatement());
        }
        if (ctx.tryStatement() != null) {
            return this.visit(ctx.tryStatement());
        }

        if (ctx.globalVarStatement() != null) {
            return this.visit(ctx.globalVarStatement());
        }
        if (ctx.macroStatement() != null) {
            return this.visit(ctx.macroStatement());
        }
        if (ctx.defineStatement() != null) {
            return this.visit(ctx.defineStatement());
        }
        if (ctx.regionStatement() != null) {
            return this.visit(ctx.regionStatement());
        }
        return null;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#block.
    visitBlock(ctx) {
        if (!ctx.statementList()) {
            return { type: "BlockStatement", body: [] };
        }
        return { type: "BlockStatement", body: this.visit(ctx.statementList()) }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#ifStatement.
    visitIfStatement(ctx) {
        const test = this.visit(ctx.expression());
        const consequent = this.visit(ctx.statement()[0]);
        let alternate = null;

        if (ctx.statement()[1] != null) {
            alternate = this.visit(ctx.statement()[1]);
        }
        return {
            type: "IfStatement",
            test: test,
            consequent: consequent,
            alternate: alternate
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#DoStatement.
    visitDoStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#WhileStatement.
    visitWhileStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#ForStatement.
    visitForStatement(ctx) {
        let init = null;
        let test = null;
        let update = null;

        if (ctx.variableDeclarationList() != null) {
            init = this.visit(ctx.variableDeclarationList());
        } else if (ctx.assignmentExpression() != null) {
            init = this.visit(ctx.assignmentExpression());
        }
        if (ctx.expression() != null) {
            test = this.visit(ctx.expression());
        }
        if (ctx.statement()[0] != null) {
            update = this.visit(ctx.statement()[0]);
        }

        return {
            type: "ForStatement",
            init: init,
            test: test,
            update: update,
            body: this.visit(ctx.statement()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#RepeatStatement.
    visitRepeatStatement(ctx) {
        return {
            type: "RepeatStatement",
            test: this.visit(ctx.expression()),
            body: this.visit(ctx.statement())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#withStatement.
    visitWithStatement(ctx) {
        return {
            type: "WithStatement",
            object: this.visit(ctx.expression()),
            body: this.visit(ctx.statement())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#switchStatement.
    visitSwitchStatement(ctx) {
        return {
            type: "SwitchStatement",
            discriminant: this.visit(ctx.expression()),
            cases: this.visit(ctx.caseBlock())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#continueStatement.
    visitContinueStatement(ctx) {
        return {
            type: "ContinueStatement"
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#breakStatement.
    visitBreakStatement(ctx) {
        return {
            type: "BreakStatement"
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#exitStatement.
    visitExitStatement(ctx) {
        return {
            type: "ExitStatement"
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#emptyStatement.
    visitEmptyStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#caseBlock.
    visitCaseBlock(ctx) {
        let caseClauses = []
        // yucky
        if (ctx.caseClauses() != null) {
            let cases = ctx.caseClauses();
            for (let i = 0; i < cases.length; i++) {
                caseClauses = caseClauses.concat(this.visit(cases[i]));
            }
        }
        if (ctx.defaultClause() != null) {
            caseClauses.push(this.visit(ctx.defaultClause()));
        }
        return caseClauses;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#caseClauses.
    visitCaseClauses(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#caseClause.
    visitCaseClause(ctx) {
        let consequent = null;
        if (ctx.statementList() != null) {
            consequent = this.visit(ctx.statementList());
        }
        return {
            type: "SwitchCase",
            test: this.visit(ctx.expression()),
            consequent: consequent
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#defaultClause.
    visitDefaultClause(ctx) {
        let consequent = null;
        if (ctx.statementList() != null) {
            consequent = this.visit(ctx.statementList());
        }
        return {
            type: "SwitchCase",
            test: null,
            consequent: consequent
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#throwStatement.
    visitThrowStatement(ctx) {
        return {
            type: "ThrowStatement",
            argument: this.visit(ctx.expression())
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#tryStatement.
    visitTryStatement(ctx) {
        let handler = null;
        let finalizer = null;
        if (ctx.catchProduction() != null) {
            handler = this.visit(ctx.catchProduction());
        }
        if (ctx.finallyProduction() != null) {
            finalizer = this.visit(ctx.finallyProduction());
        }
        return {
            type: "TryStatement",
            block: this.visit(ctx.statement()),
            handler: handler,
            finalizer: finalizer
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#catchProduction.
    visitCatchProduction(ctx) {
        let param = null;
        if (ctx.identifier() != null) {
            param = this.visit(ctx.identifier());
        }
        return {
            type: "CatchClause",
            param: param,
            body: this.visit(ctx.statement())
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#finallyProduction.
    visitFinallyProduction(ctx) {
        return {
            type: "Finalizer",
            body: this.visit(ctx.statement())
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#returnStatement.
    visitReturnStatement(ctx) {
        let arg = null; 
        if (ctx.expression() != null) {
            arg = this.visit(ctx.expression());
        }
        return {
            type: "ReturnStatement",
            argument: arg
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#deleteStatement.
    visitDeleteStatement(ctx) {
        return {
            type: "DeleteStatement",
            operator: "delete",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#assignmentStatement.
    visitAssignmentStatement(ctx) {
        return this.visit(ctx.assignmentExpression());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#assignmentExpression.
    visitAssignmentExpression(ctx) {
        return {
            type: "AssignmentExpression",
            operator: this.visit(ctx.assignmentOperator()),
            left: this.visit(ctx.lValueExpression()),
            right: this.visit(ctx.expression())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#variableDeclarationList.
    visitVariableDeclarationList(ctx) {
        const declaration = this.visit(ctx.variableDeclaration());
        return {
            type: "VariableDeclaration",
            declarations: declaration,
            kind: this.visit(ctx.varModifier())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#varModifier.
    visitVarModifier(ctx) {
        if (ctx.Var() != null) {
            return "var";
        } else if (ctx.Static() != null) {
            return "static";
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#variableDeclaration.
    visitVariableDeclaration(ctx) {
        let initExpr = null;
        if (ctx.expression()) {
            initExpr = this.visit(ctx.expression())
        }
        return {
            type: "VariableDeclarator",
            id: this.visit(ctx.identifier()),
            init: initExpr
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#globalVarStatement.
    visitGlobalVarStatement(ctx) {
        return {
            type: "GlobalVarStatement",
            declarations: this.visit(ctx.identifier())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#MemberDotLValue.
    visitMemberDotLValue(ctx) {
        return {
            type: "MemberDotExpression",
            object: this.visit(ctx.lValueExpression()),
            property: this.visit(ctx.identifier())
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#ParenthesizedLValue.
    visitParenthesizedLValue(ctx) {
        return this.visit(ctx.lValueExpression());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#IdentifierLValue.
    visitIdentifierLValue(ctx) {
        return this.visit(ctx.identifier());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#MemberIndexLValue.
    visitMemberIndexLValue(ctx) {
        let qualifier = null;
        if (ctx.accessorQualifier() != null) {
            qualifier = this.visit(ctx.accessorQualifier());
        }
        return {
            type: "MemberIndexExpression",
            object: this.visit(ctx.lValueExpression()),
            property: this.visit(ctx.expressionSequence()),
            qualifier: qualifier
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#expressionSequence.
    visitExpressionSequence(ctx) {
        let expressions = this.visit(ctx.expression());
        if (expressions.length == 1) {
            return this.visitChildren(ctx)[0];
        } else {
            return this.visitChildren(ctx);
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#TernaryExpression.
    visitTernaryExpression(ctx) {
        return {
            type: "ConditionalExpression",
            test: this.visit(ctx.expression()[0]),
            consequent: this.visit(ctx.expression()[1]),
            alternate: this.visit(ctx.expression()[2]),
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#LogicalAndExpression.
    visitLogicalAndExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "&&",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PreIncrementExpression.
    visitPreIncrementExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "++",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#LogicalOrExpression.
    visitLogicalOrExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "||",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#NotExpression.
    visitNotExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "!",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PreDecreaseExpression.
    visitPreDecreaseExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "--",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#UnaryMinusExpression.
    visitUnaryMinusExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "-",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PostDecreaseExpression.
    visitPostDecreaseExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "--",
            prefix: false,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#EqualityExpression.
    visitEqualityExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "==",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#BitXOrExpression.
    visitBitXOrExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "^",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#MultiplicativeExpression.
    visitMultiplicativeExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "*",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#CallExpression.
    visitCallExpression(ctx) {
        return {
            type: "CallExpression",
            callee: this.visit(ctx.expression()),
            arguments: this.visit(ctx.arguments())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#BitShiftExpression.
    visitBitShiftExpression(ctx) {
        let operator = null; 
        if (ctx.RightShiftArithmetic() != null) {
            operator = ctx.RightShiftArithmetic().getText();
        }
        if (ctx.LeftShiftArithmetic() != null) {
            operator = ctx.LeftShiftArithmetic().getText();
        }
        return {
            type: "BinaryExpression",
            operator: operator,
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#ParenthesizedExpression.
    visitParenthesizedExpression(ctx) {
        return this.visit(ctx.expression());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#AdditiveExpression.
    visitAdditiveExpression(ctx) {
        let operator = null; 
        if (ctx.Plus() != null) {
            operator = ctx.Plus().getText();
        }
        if (ctx.Minus() != null) {
            operator = ctx.Minus().getText();
        }
        return {
            type: "BinaryExpression",
            operator: operator,
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#RelationalExpression.
    visitRelationalExpression(ctx) {
        let operator = null; 
        if (ctx.LessThan() != null) {
            operator = ctx.LessThan().getText();
        }
        if (ctx.MoreThan() != null) {
            operator = ctx.MoreThan().getText();
        }
        if (ctx.LessThanEquals() != null) {
            operator = ctx.LessThanEquals().getText();
        }
        if (ctx.GreaterThanEquals() != null) {
            operator = ctx.GreaterThanEquals().getText();
        }
        return {
            type: "BinaryExpression",
            operator: operator,
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PostIncrementExpression.
    visitPostIncrementExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "++",
            prefix: false,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#BitNotExpression.
    visitBitNotExpression(ctx) {
        return {
            type: "UnaryExpression",
            operator: "~",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#NewExpression.
    visitNewExpression(ctx) {
        return {
            type: "NewExpression",
            expression: this.visit(ctx.identifier()),
            arguments: this.visit(ctx.arguments())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#LiteralExpression.
    visitLiteralExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by GameMakerLanguageParser#MemberDotExpression.
    visitMemberDotExpression(ctx) {
        return {
            type: "MemberDotExpression",
            object: this.visit(ctx.expression()[0]),
            property: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#MemberIndexExpression.
    visitMemberIndexExpression(ctx) {
        const qualifier = null;
        if (ctx.accessorQualifier() != null) {
            qualifier = this.visit(ctx.accessorQualifier());
        }
        return {
            type: "MemberIndexExpression",
            object: this.visit(ctx.expression()),
            property: this.visit(ctx.expressionSequence()),
            qualifier: qualifier
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#IdentifierExpression.
    visitIdentifierExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by GameMakerLanguageParser#BitAndExpression.
    visitBitAndExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "&",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#LogicalXorExpression.
    visitLogicalXorExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "^^",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#BitOrExpression.
    visitBitOrExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "|",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#CoalesceExpression.
    visitCoalesceExpression(ctx) {
        return {
            type: "BinaryExpression",
            operator: "??",
            left: this.visit(ctx.expression()[0]),
            right: this.visit(ctx.expression()[1])
        };
    }

    // Visit a parse tree produced by GameMakerLanguageParser#callStatement.
    visitCallStatement(ctx) {
        return this.visitCallExpression(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PostIncrementStatement.
    visitPostIncrementStatement(ctx) {
        return {
            type: "IncDecStatement",
            operator: "++",
            prefix: false,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PostDecreaseStatement.
    visitPostDecreaseStatement(ctx) {
        return {
            type: "IncDecStatement",
            operator: "--",
            prefix: false,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PreIncrementStatement.
    visitPreIncrementStatement(ctx) {
        return {
            type: "IncDecStatement",
            operator: "++",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#PreDecreaseStatement.
    visitPreDecreaseStatement(ctx) {
        return {
            type: "IncDecStatement",
            operator: "--",
            prefix: true,
            argument: this.visit(ctx.expression()),
        };
    }


    // Visit a parse tree produced by GameMakerLanguageParser#accessorQualifier.
    visitAccessorQualifier(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#arguments.
    visitArguments(ctx) {
        let args = ctx.argument();
        let argList = []
        for (let i = 0; i < args.length; i++) {
            argList.push(this.visit(args[i]));
        }
        return argList;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#argument.
    visitArgument(ctx) {
        return this.visit(ctx.expression());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#assignmentOperator.
    visitAssignmentOperator(ctx) {
        let text = ctx.getText();
        if (text == ':=') { text = '='; }
        return text;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#literal.
    visitLiteral(ctx) {
        if (ctx.arrayLiteral() != null) {
            return this.visit(ctx.arrayLiteral());
        }
        if (ctx.structLiteral() != null) {
            return this.visit(ctx.structLiteral());
        }
        let value = ctx.getText();
        
        const text = ctx.getText();
        const asInt = parseInt(text);
        const asFloat = parseFloat(text);
        if (!isNaN(asInt)) {
            value = asInt;
        }
        if (!isNaN(asFloat)) {
            value = asFloat;
        }
        if (text == "true" || text == "false") {
            value = (text == "true");
        }
        
        return {
            type: "Literal",
            value: value
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#arrayLiteral.
    visitArrayLiteral(ctx) {
        return {
            type: "ArrayExpression",
            elements: this.visit(ctx.elementList())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#elementList.
    visitElementList(ctx) {
        if (ctx.expression() == null) {
            return [];
        }
        return this.visit(ctx.expression());
    }


    // Visit a parse tree produced by GameMakerLanguageParser#structLiteral.
    visitStructLiteral(ctx) {
        let properties = [];
        if (ctx.propertyAssignment() == null) {
            properties = this.visit(ctx.propertyAssignment());
        }
        return {
            type: "StructExpression",
            properties: properties
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#functionDeclaration.
    visitFunctionDeclaration(ctx) {
        return {
            type: "FunctionDeclaration",
            id: this.visit(ctx.identifier()),
            params: this.visit(ctx.parameterList()),
            body: this.visit(ctx.statement())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#FunctionExpression.
    visitFunctionExpression(ctx) {
        return {
            type: "FunctionExpression",
            params: this.visit(ctx.parameterList()),
            body: this.visit(ctx.statement())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#constructorDeclaration.
    visitConstructorDeclaration(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#parameterList.
    visitParameterList(ctx) {
        let params = ctx.parameterArgument();
        let paramList = []
        for (let i = 0; i < params.length; i++) {
            paramList.push(this.visit(params[i]));
        }
        return paramList;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#parameterArgument.
    visitParameterArgument(ctx) {
        if (ctx.expression() != null) {
            return {
                type: "DefaultParameter",
                left: this.visit(ctx.identifier()),
                right: this.visit(ctx.expression())
            }
        } else {
            return this.visit(ctx.identifier());
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#propertyAssignment.
    visitPropertyAssignment(ctx) {
        return {
            type: "Property",
            name: this.visit(ctx.expression()),
            value: this.visit(ctx.propertyIdentifier())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#propertyIdentifier.
    visitPropertyIdentifier(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#identifier.
    visitIdentifier(ctx) {
        let name = ""
        if (ctx.Identifier() != null) {
            name = ctx.Identifier().getText();
        } else {
            name = this.visit(ctx.softKeyword());
        }
        return { type: "Identifier", name: name }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#enumeratorDeclaration.
    visitEnumeratorDeclaration(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#enumeratorList.
    visitEnumeratorList(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#enumerator.
    visitEnumerator(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#macroStatement.
    visitMacroStatement(ctx) {
        return {
            type: "MacroDeclaration",
            name: ctx.PpIdentifier().getText(),
            body: this.visit(ctx.macroBody())
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#macroBody.
    visitMacroBody(ctx) {
        const lines = ctx.PpBodyCharacters();
        let text = "";
        for (let i = 0; i < lines.length; i++) {
            text += lines[i].getText();
        }
        return text.trim();
    }


    // Visit a parse tree produced by GameMakerLanguageParser#defineStatement.
    visitDefineStatement(ctx) {
        return {
            type: "DefineStatement",
            name: ctx.PpIdentifier().getText().trim()
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#regionStatement.
    visitRegionStatement(ctx) {
        if (ctx.Region() != null) {
            return {
                type: "RegionStatement",
                name: ctx.PpBodyCharacters().getText().trim()
            }
        } else {
            return {
                type: "EndRegionStatement",
            }
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#keyword.
    visitKeyword(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#softKeyword.
    visitSoftKeyword(ctx) {
        if (ctx.Constructor() != null) {
            return ctx.Constructor().getText();
        }
        return null;
    }


    // Visit a parse tree produced by GameMakerLanguageParser#propertySoftKeyword.
    visitPropertySoftKeyword(ctx) {
        if (ctx.NoOneLiteral() != null) {
            return ctx.NoOneLiteral().getText();
        }
    }


    // Visit a parse tree produced by GameMakerLanguageParser#openBlock.
    visitOpenBlock(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#closeBlock.
    visitCloseBlock(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by GameMakerLanguageParser#eos.
    visitEos(ctx) {
        return this.visitChildren(ctx);
    }
}
