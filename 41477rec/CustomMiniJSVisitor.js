import MiniJSVisitor from "./generated/MiniJSVisitor.js";

export class CustomMiniJSVisitor extends MiniJSVisitor {
    visitProg(ctx) {
        console.log("Visitando el nodo prog");
        return this.visitChildren(ctx);
    }

    visitStat(ctx) {
        console.log("Visitando el nodo stat");
        return this.visitChildren(ctx);
    }

    // Agrega aquí más métodos según los nodos de tu gramática
}
