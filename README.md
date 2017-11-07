# **CIFRADO CÉSAR**
En este proyecto nos piden realizar lo siguiente.

+ Que al ingresar una frase este pueda decifralo con el _Cifrado cesar_, esto quiere decir que busque la posicion de la frase en el lenguaje `ASCII`.
+ que devuelva minúscula o mayúscula.

> ## Pseudocodigo del Cifrado César

### Primero
------
Se crea una funcion _cifrar_.
`function cipher ()`{  
 Dentro de la función se crea una variable  que contendra un mensaje, y como nos piden ingresar mayúscula y munúscula, le colocaremos dos metodos.                
 `var alfabeto` = **prompt("Ingresa el alfabeto").toUpperCase().toLowerCase();**
## Segundo
----
  Una variable en donde se depositará los elementos convertidos a un _string_ llamado:  
 **var newArray = alphabet.split("");**   
## Tercero
----
 Y por último el array con los nuevos valores; `var newAlphabet = [];`
 Realizaremos un bucle con for.
 Para ello realizaremos un ciclo `(i=0; i<newArray.length; i++)`
 si cumple, se buscara su locacion en el nuevo array
 `newArray[i].charCodeAt();`. Para ello utilizaremos la formula del _**Cifrado César**_ .   
 La formula seria la siguiente: `var locationTwo =((location - 65 +33)%26 + 65);`   
 En la variable codigo se guardara la letra encriptada: var code = String.fromCharCode(locationTwo);   
 Y en la variable newAlphabet.push(code); se almacenara la nueva ubicacion pero como estring. Para que me debuevla sin string utilizaremos el metodo join return newAlphabet.join("").

  > # Código de Cifrado César

```js
//crearemos la primera funcion para cifrar
function cipher (){
// dentro de ella crearemos las variables.
var alphabet = prompt("Ingresa el alfabeto").toUpperCase().toLowerCase();
var newArray = alphabet.split("");
//  en la nueva varible newAlphabet se colocara los elementos nuevos
var newAlphabet = [];
// realizaremos un bucle con for.
 for (i=0; i<newArray.length; i++){
// dentro del for realizarmos la condicion pedida, para ello crearemos un var
//de la locacion del alfabeto.
var location = newArray[i].charCodeAt();
var locationTwo =((location - 65 +33)%26 + 65);
var code = String.fromCharCode(locationTwo);
newAlphabet.push(code);
 }
// con un return para retornar el cifrado
return newAlphabet.join("")
}
cipher() ```

```js
function decipher() {
// Descifrando la palabra cifrada
  for (j=0; j<newAlphabet.length; j++){
// dentro del for realizarmos la condicion pedida, para ello crearemos un var
//de la locacion del alfabeto.
var cifri = [];
var position1 = newAlphabet[j].charCodeAt();
var position2 =((position1 +33)%26 +65 );
var codeTwo = String.fromCharCode(position2);
cifri.push(codeTwo);
    }
    return(cifri.join(""));
}
decipher();

```


  Link del Diagrama de Flujo.

  ![Diagrama de flujo](https://code2flow.com/XgSGAP.png).
