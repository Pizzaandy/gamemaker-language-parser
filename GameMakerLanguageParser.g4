parser grammar GameMakerLanguageParser;

options {tokenVocab=GameMakerLanguageLexer;}

program
    : statementList? EOF
    ;
    
statementList
    : statement+
    ;
    
statement
    : block
    | emptyStatement
    | macroStatement
    | iterationStatement
    | variableDeclarationList
    | assignmentStatement
    | singleExpressionStatement
    | ifStatement
    | returnStatement
    | withStatement
    | continueStatement
    | switchStatement
    | breakStatement
    | exitStatement
    | constructorDeclaration
    | functionDeclaration
    | enumeratorDeclaration
    | defineStatement
    | regionStatement
    ;
    
block
    : OpenBrace statementList? CloseBrace
    ;
    
ifStatement
    : If expression Then? statement (Else statement)?
    ;
    
iterationStatement
    : Do statement Until expression eos? # DoStatement
    | While expression statement # WhileStatement
    | For '(' assignment? ';' expression? ';' statement? ')' statement   # ForStatement
    | Repeat expression statement # RepeatStatement
    ;
    
withStatement
    : With '(' expression ')' statement
    ;
    
switchStatement
    : Switch '(' expression ')' caseBlock
    ;
    
continueStatement
    : Continue eos?
    ;

breakStatement
    : Break eos?
    ;
    
exitStatement
    : Exit eos?
    ;
    
emptyStatement
    : SemiColon
    ;
    
caseBlock
    : OpenBrace caseClauses? (defaultClause caseClauses?)? CloseBrace
    ;

caseClauses
    : caseClause+
    ;
    
caseClause
    : Case expressionSequence ':' statementList?
    ;
    
defaultClause
    : Default ':' statementList?
    ;
    
returnStatement
    : Return expression? eos?
    ;

deleteStatement
    : Delete expression eos?
    ;

assignmentStatement
    : assignment eos?
    ;

assignment
    : singleAssignment
    | variableDeclarationList
    ;

singleAssignment
    : lValueExpression assignmentOperator expression
    ;

variableDeclarationList
    : varModifier variableDeclaration (',' variableDeclaration)*
    ;
    
varModifier
    : Var+
    | Static
    ;
    
variableDeclaration
    : identifier (Assign expression)?
    ;

lValueExpression
    : lValueExpression '[' accessorQualifier? expressionSequence ']' # MemberIndexLValue
    | lValueExpression '.' identifier # MemberDotLValue
    | identifier # IdentifierLValue
    | '(' lValueExpression ')' # ParenthesizedLValue
    ;

expressionSequence
    : expression (',' expression)*
    ;

expression
    : anonymousFunction # FunctionExpression
    | expression '[' accessorQualifier? expressionSequence ']' # MemberIndexExpression
    | expression '.' identifier # MemberDotExpression
    | New identifier arguments # NewExpression

    | expressionStatement # ExpressionStatementExpression

    | '-' expression # UnaryMinusExpression
    | '~' expression # BitNotExpression
    | Not expression # NotExpression

    | expression ('*' | '/' | Modulo | IntegerDivide) expression # MultiplicativeExpression
    | expression ('+' | '-') expression # AdditiveExpression
    | expression '??' expression # CoalesceExpression
    | expression ('<<' | '>>') expression # BitShiftExpression
    
    | expression Or expression # LogicalOrExpression
    | expression And expression # LogicalAndExpression
    | expression Xor expression # LogicalXorExpression

    | expression ('==' | Assign | NotEquals) expression # EqualityExpression
    | expression ('<' | '>' | '<=' | '>=') expression # RelationalExpression

    | expression '&' expression # BitAndExpression
    | expression '|' expression # BitOrExpression
    | expression '^' expression # BitXOrExpression

    | expression '?' expression ':' expression # TernaryExpression
    | identifier # IdentifierExpression
    | literal # LiteralExpression
    | '(' expression ')' # ParenthesizedExpression
    ;

expressionStatement
    : lValueExpression arguments # CallExpression
    | lValueExpression '++' # PostIncrementExpression
    | lValueExpression '--' # PostDecreaseExpression
    | '++' lValueExpression # PreIncrementExpression
    | '--' lValueExpression # PreDecreaseExpression
    ;

singleExpressionStatement
    : expressionStatement eos?
    ;

anonymousFunction
    : Function_ arguments statement
    ;
    
accessorQualifier
    : '#' | '@' | '$' | '?' | '|'
    ;
    
arguments
    : '(' ( argument (',' argument)* ','? )? ')'
    ;
    
argument
    : expression
    ;
    
assignmentOperator
    : '*='
    | '/='
    | '%='
    | '+='
    | '-='
    | '<<='
    | '>>='
    | '&='
    | '^='
    | '|='
    | '??='
    | Assign
    ;
    
literal
    : UndefinedLiteral
    | NoOneLiteral
    | BooleanLiteral
    | StringLiteral
    | VerbatimStringLiteral
    | HexIntegerLiteral
    | BinaryLiteral
    | DecimalLiteral
    | IntegerLiteral
    | arrayLiteral
    | structLiteral
    ;
    
arrayLiteral
    : '[' elementList ']'
    ;

elementList
    : ','* expression? (','+ expression)* ','* // Yes, everything is optional
    ;
    
structLiteral
    : OpenBrace (propertyAssignment (',' propertyAssignment)* ','?)? CloseBrace
    ;
    
functionDeclaration
    : Function_ identifier parameterList statement
    ;

constructorDeclaration
    : Function_ identifier? parameterList (':' identifier parameterList)? Constructor statement
    ;
    
parameterList
    : '(' (parameterArgument (',' parameterArgument)* ','?)? ')'
    ;
    
parameterArgument
    : identifier (Assign expression)?
    ;
    
propertyAssignment
    : propertyIdentifier ':' expression
    ;

propertyIdentifier
    : Identifier | softKeyword | propertySoftKeyword
    ;
    
identifier
    : Identifier | softKeyword
    ;
    
enumeratorDeclaration
    : Enum identifier OpenBrace enumeratorList? CloseBrace
    ;
    
enumeratorList
    : enumerator (',' enumerator)*
    ;

enumerator
    : identifier (Assign IntegerLiteral)?
    ;

macroStatement
    : Macro PpIdentifier macroBody PpEnd?
    ;
    
// handles multi-line macros just in case
macroBody
    : (PpBodyCharacters | PpNewLineEscaped)+
    ;
    
defineStatement
    : Define PpIdentifier PpEnd?
    ;

regionStatement
    : (Region | EndRegion) PpBodyCharacters* PpEnd?
    ;

keyword
    : Break
    | Do
    | Case
    | Else
    | New
    | Var
    | Catch
    | Finally
    | Return
    | Continue
    | For
    | Switch
    | While
    | Function_
    | With
    | Default
    | If
    | Throw
    | Delete
    | Try
    ;
    
softKeyword
    : Constructor
    ;

propertySoftKeyword
    : NoOneLiteral
    ;

eos
    : SemiColon
    ;
    
