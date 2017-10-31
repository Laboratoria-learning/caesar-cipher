# Cifrado César

> Recuerda seguir siempre esta [guía de estilos](https://github.com/Laboratoria/js-style-guide/)

Crea una web que pida, por medio de un `prompt()`, una frase al usuario y
devuelva el mismo mensaje encriptado según el
[algoritmo de Cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
con el parámetro de desplazamiento de **33 espacios hacia la derecha**

Por ejemplo:

- Texto original:   `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- Texto codificado: `HIJKLMNOPQRSTUVWXYZABCDEFG`
  
## Entregables

Para cada producto debes entregar **un repositorio de GitHub** que
contenga:
1. Archivo `README.md` que explique el **pseudocódigo** de tu solución y su
**diagrama de flujo**
2. Archivo `app.js` con el **código** de tu solución
3. Archivo `index.html` vinculado con tu `app.js`

## Tips

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este reto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado 
en el video anterior:

- [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
- [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
- [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)

## Consideraciones específicas

1. Tu programa debe ser capaz de cifrar y descifrar tanto letras 
   mayúsculas como minúsculas. La fórmula para descifrar es: `(x - n) % 26`
2. Tu código debe estar compuesto por 2 funciones con los siguientes 
   nombres: `cipher` y `decipher`
3. El usuario no debe poder ingresar un campo vacío o que contenga números

## Criterios de evaluación

Se tomarán en cuenta las siguientes consideraciones a la hora de evaluar tu solución:

1. Nombramiento de variables
2. Indentación
3. Validación de input: el usuario no debe poder ingresar un campo vacío o de tipo que no corresponda
4. Estructura de tus archivos
5. Archivo `README.md` correctamente redactado
6. Uso de comentarios para hacer tu código más legible
7. Que el programa cumpla con el propósito requerido
