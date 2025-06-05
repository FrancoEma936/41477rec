grammar MiniJS;

program: simpleStatement+;

simpleStatement
    : switchStatement
    | assignmentStatement
    | outputStatement
    ;

switchStatement
    : 'switch' '(' IDENTIFIER ')' '{' caseSection* defaultSection? '}'
    ;

caseSection
    : 'case' constant ':' simpleStatement*
    ;

defaultSection
    : 'default' ':' simpleStatement*
    ;

assignmentStatement
    : IDENTIFIER '=' constant ';'
    ;

outputStatement
    : 'output' '(' TEXTLITERAL ')' ';'
    ;

constant
    : NUMBER
    | TEXTLITERAL
    ;

TEXTLITERAL
    : '"' (~["\r\n])* '"'
    ;

IDENTIFIER
    : LETTER (LETTER | DIGIT | '_')*
    ;

NUMBER
    : DIGIT+
    ;

fragment LETTER
    : [a-zA-Z]
    ;

fragment DIGIT
    : [0-9]
    ;

WS: [ \t\r\n]+ -> skip;
