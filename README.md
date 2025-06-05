# 41477rec
## README

Este proyecto utiliza ANTLR4 para generar analizadores léxicos y sintácticos. Se ejecuta desde Visual Studio Code utilizando npm.

## Instalación

.Paso 1: Clonar el repositorio

Abrí una terminal y ejecutá:

```sh
git clone https://github.com/FrancoEma936/41477rec.git
```

Luego:

```sh
cd 41477rec
```


.Paso 2: Abrir el proyecto en Visual Studio Code

Desde la misma terminal:

```sh
code .
```


## Instrucciones de uso

Paso 1: Ejecutar el programa

Desde la terminal integrada de Visual Studio Code (con el proyecto ya abierto), ejecutá el siguiente comando:

```sh
npm start
```


El script hará automáticamente:

.Validar la entrada según la gramática ANTLR4.

.Mostrar en consola el árbol de derivación.

.Interpretar y ejecutar la acción principal, que puede incluir mover archivos, escaneo profundo y notificaciones.

.Indicar al final que la acción ha concluido.


Paso 2:Ejemplo de entrada y salida

.Entrada de ejemplo (archivo input.txt):

 ```sh
accion primeraAccion {
  moverArchivo a /home/usuario/documentos/informe.txt
  usarEscaneoProfundo
  notificar "Análisis completo"
}
```

.Salida de ejemplo

 ```sh

Entrada válida.
Árbol de derivación: (prog (stat accion primeraAccion { (stat (expr moverArchivo a /home/usuario/documentos/informe.txt)) (stat (expr usarEscaneoProfundo)) (stat (expr notificar "Análisis completo")) }))
Ejecutando acción: primeraAccion...
Moviendo archivo a /home/usuario/documentos/informe.txt
Ejecutando comando: console.log("Moviendo archivo a /home/usuario/documentos/informe.txt");
USANDO ESCANEO PROFUNDO
Ejecutando comando: console.log("USANDO ESCANEO PROFUNDO");
Notificación: Análisis completo
Ejecutando comando: console.log("NOTIFICACION: Análisis completo");
Acción primeraAccion completada.
```


Paso 3: Ver el árbol de derivación y los tokens en VS Code

1) Asegurate de tener instalada la extensión ANTLR4 grammar syntax support.

2) Abrí el archivo de gramática (Parcial2.g4) en VS Code.

3) Presioná F5 o ubicate en Run → Start Debugging.

4) En el Debug Console verás la lista de tokens generada por el lexer. 

5) En la vista de ANTLR Parse Tree se mostrará gráficamente el árbol de derivación.

6) Podés hacer clic derecho en nodos o tokens para ver reglas, tipos y texto asociado.

7) Para refrescar, cambia tu entrada de ejemplo o la gramática y volvé a presionar F5.
