import antlr4 from "antlr4";
import fs from "fs";
import readline from "readline";

import MiniJSLexer from "./generated/MiniJSLexer.js";
import MiniJSParser from "./generated/MiniJSParser.js";
import { CustomMiniJSVisitor } from "./CustomMiniJSVisitor.js";

async function main() {
    let input;

    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (err) {
        input = await leerEntrada();
    }

    // Crear flujo de entrada
    const chars = new antlr4.InputStream(input);

    // Lexer para obtener los tokens
    const lexer = new MiniJSLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Cargar todos los tokens
    tokens.fill();

    // Mostrar tabla de tokens
    const allTokens = tokens.getTokens();//.filter(t => t.channel === antlr4.Token.DEFAULT_CHANNEL);
    console.log("Tokens capturados:", allTokens.length);
    if (allTokens.length === 0) {
    console.warn("No se encontraron tokens válidos en el canal principal.");
    } else {
    console.log("Tabla de Tokens:");
    allTokens.forEach(token => {
        const tokenName = lexer.symbolicNames[token.type] || "UNKNOWN";
        console.log(`Tipo: ${tokenName}, Texto: '${token.text}', Línea: ${token.line}, Columna: ${token.column || token.charPositionInLine}`);
    });
    }

    // Crear parser normalmente
    const parser = new MiniJSParser(tokens);
    const tree = parser.program();

    if (parser._syntaxErrors > 0) {
        console.error("Se encontraron errores de sintaxis.");
        return;
    }

    console.log("\nÁrbol de Derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    // Ejecutar el visitor personalizado
    const visitor = new CustomMiniJSVisitor();
    visitor.visit(tree);
}

function leerEntrada() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();


