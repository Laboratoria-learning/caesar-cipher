/* Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo
 de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG*/

function cipher(mensaje, arr, valorFijo) {
  for (var i = 0; i < arr.length; i++) { // el ciclo for recorrera el arreglo de letras
    var valorASCII = mensaje.charCodeAt(i); // convertimos la letra en la posicion i a su valor ASCII
    /* Usamos la formula que se nos facilito del cifrado cesar para obtener la letra  encriptada pero en codigo ASCII*/
    var codigoASCIILetra = (valorASCII - 65 + valorFijo) % 26 + 65;
    // convertimos la letra en ASCII a su valor en el alfabeto
    var letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
    // en nuestro arreglo retiramos la letra normal y ponemos la letra encriptada
    arr.splice(i, 1, letraAlfabetoEncriptada);
  }
  // retornamos el arreglo pero convertido en un string
  return arr.join('');
}
function decipher(mensajeEncriptado, array, valorFijo) {
  for (var i = 0; i < array.length; i++) {
    var valorASCII = encriptado.charCodeAt(i);
    var formulaValida = (valorASCII - 65 - valorFijo) * -1;
    if ((formulaValida > 26) || (formulaValida === 0)) {
      var codigoASCIILetra = formulaValida % 26 + 65;
    } else {
      codigoASCIILetra = 26 % formulaValida + 65;
    }
    var letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
    array.splice(i, 1, letraAlfabetoEncriptada);
  }
  return document.write(array.join(''));
}
var mensaje = prompt('Ingrese frase').toLocaleUpperCase(); // Ingresar la frase a encriptar
var fraseArray = mensaje.split(''); // la cadena pasa a un array  con un indice letra por letra
cipher(mensaje, fraseArray, 33);
var encriptado = cipher(mensaje, fraseArray, 33);
document.write('Mensaje ' + mensaje + 'encriptado es:');
document.write(encriptado);
var fraseEnccriptadaArray = encriptado.split('');
document.write('  Mensaje' + encriptado + ' decifrado es: ');
decipher(encriptado, fraseEnccriptadaArray, 33);
