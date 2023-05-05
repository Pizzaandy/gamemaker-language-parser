lexer grammar GameMakerLanguageLexer;

channels { ERROR }

MultiLineComment:               '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment:              '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{' | 'begin';
CloseBrace:                     '}' | 'end';
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=' | ':=';
Colon:                          ':';
Dot:                            '.';
PlusPlus:                       '++';
MinusMinus:                     '--';
Plus:                           '+';
Minus:                          '-';
BitNot:                         '~';
Not:                            '!' | 'not';
Multiply:                       '*';
Divide:                         '/';
IntegerDivide:                  'div';
Modulo:                         '%' | 'mod';
Power:                          '**';
QuestionMark:                   '?';
NullCoalesce:                   '??';
NullCoalescingAssign:           '??=';
RightShiftArithmetic:           '>>';
LeftShiftArithmetic:            '<<';
LessThan:                       '<';
MoreThan:                       '>';
LessThanEquals:                 '<=';
GreaterThanEquals:              '>=';
Equals_:                        '==';
NotEquals:                      '!=' | '<>';
BitAnd:                         '&';
BitXOr:                         '^';
BitOr:                          '|';
And:                            '&&' | 'and';
Or:                             '||' | 'or';
Xor:                            '^^' | 'xor';
MultiplyAssign:                 '*=';
DivideAssign:                   '/=';
PlusAssign:                     '+=';
MinusAssign:                    '-=';
ModulusAssign:                  '%=';
LeftShiftArithmeticAssign:      '<<=';
RightShiftArithmeticAssign:     '>>=';
BitAndAssign:                   '&=';
BitXorAssign:                   '^=';
BitOrAssign:                    '|=';
NumberSign:                     '#';
DollarSign:                     '$';
AtSign:                         '@';

/// Null Literals

UndefinedLiteral:               'undefined';
NoOneLiteral:                   'noone';

/// Boolean Literals

BooleanLiteral:                 'true' | 'false';

/// Numeric Literals

IntegerLiteral:                 DecimalIntegerLiteral;
DecimalLiteral:                 DecimalIntegerLiteral? '.' [0-9] [0-9_]* ;
BinaryLiteral:                  '0b' ('_'* [01])+;
HexIntegerLiteral:              HexLiteralPrefix [0-9a-fA-F] HexDigit*;

/// Keywords

Break:                          'break';
Exit:                           'exit';
Do:                             'do';
Case:                           'case';
Else:                           'else';
New:                            'new';
Var:                            'var';
GlobalVar:                      'globalvar';
Catch:                          'catch';
Finally:                        'finally';
Return:                         'return';
Continue:                       'continue';
For:                            'for';
Switch:                         'switch';
While:                          'while';
Until:                          'until';
Repeat:                         'repeat';
Function_:                      'function';
With:                           'with';
Default:                        'default';
If:                             'if';
Then:                           'then';
Throw:                          'throw';
Delete:                         'delete';
Try:                            'try';
Enum:                           'enum';
Constructor:                    'constructor';
Static:                         'static';
Macro:                          '#macro' -> mode(PREPROCESSOR_IDENTIFIER);
Define:                         '#define' -> mode(PREPROCESSOR_IDENTIFIER);
Region:                         '#region' -> mode(PREPROCESSOR_BODY);
EndRegion:                      '#endregion' -> mode(PREPROCESSOR_BODY);

/// Identifier Names and Identifiers

Identifier
    : IdentifierStart IdentifierPart*
    ;
    
fragment IdentifierStart
    : [\p{L}] | '_';
    
fragment IdentifierPart
    : IdentifierStart
    | [\p{Mn}]
    | [\p{Nd}]
    | [\p{Pc}]
    ;

/// String Literals

StringLiteral: '"' StringCharacter* '"';

VerbatimStringLiteral
    : '@"' (~'"' | '""')* '"'
    | '@\'' (~'\'' | '\'\'')* '\''
    ;
	
/// Misc

WhiteSpaces
    : [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN)
    ;

LineTerminator
    : [\r\n\u2028\u2029] -> channel(HIDDEN)
    ;

UnexpectedCharacter
    : . -> channel(ERROR)
    ;

/// Fragment rules

fragment StringCharacter
    : ~["\\\r\n]
    | '\\' SingleEscapeCharacter
    ;

fragment HexLiteralPrefix
    : '0x' | '$' | '#'
    ;
    
fragment HexDigit
    : [_0-9a-fA-F]
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;


mode PREPROCESSOR_IDENTIFIER;

PpIdentifier
    : IdentifierStart IdentifierPart* -> mode(PREPROCESSOR_BODY)
    ;
    
PpWhiteSpaces
    : [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN)
    ;


mode PREPROCESSOR_BODY;

// exclude: whitespace, newlines, \, #
PpBodyCharacters
    : ~[\r\n\u2028\u2029\\]+
    ;

PpNewLineEscaped
    : '\\' (PpBodyCharacters+)? PpNewLine+
    ;
    
PpEnd
    : (PpNewLine) -> mode(DEFAULT_MODE)
    ;
    
fragment PpNewLine
    : [\r\n\u2028\u2029]
    ;

