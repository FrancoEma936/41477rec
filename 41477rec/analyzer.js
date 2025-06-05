const antlr4 = require('antlr4');

const MiniJSLexer = require('./parser/MiniJSLexer').MiniJSLexer;
const MiniJSParser = require('./parser/MiniJSParser').MiniJSParser;
const MiniJSListener = require('./parser/MiniJSListener').MiniJSListener;
const InputStream = antlr4.InputStream;
const CommonTokenStream = antlr4.CommonTokenStream;

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

const chars = new antlr4.InputStream(input);
const lexer = new MiniJSLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiniJSParser(tokens);

parser.buildParseTrees = true;

const tree = parser.program();

console.log("\n✅ Tokens reconocidos:");
tokens.fill();
tokens.tokens.forEach(token => {
  if (token.type > 0) {
    console.log(`  [${lexer.symbolicNames[token.type]}] "${token.text}"`);
  }
});

// Árbol sintáctico (texto)
console.log("\n🌳 Árbol sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));
