/* Create a web that asks, by means of a prompt (), a phrase to the user and return the same encrypted message according to the encryption algorithm
  César with the scroll parameter of 33 spaces to the right */

// we condition so that you can not enter numbers or empty fields.
var information = prompt('ingrese una frase');
if ((parseInt(information) >= 0) || (parseInt(information) < 0)) {
  alert(' NO ingresar numeros');
  information = prompt('ingrese una frase');// asking again
} else {
  var stringCipher = cipher(information, 33);
}
if (information === '') {
  alert('DEBE ingresar al menos un dato');
  information = prompt('ingrese una frase');// volviendo a preguntar
} else {
  var stringCipher = cipher(information, 33);
}
// create the function to encrypt sentences.
function cipher(string, n) {
  // We ensure that the string is capital
  var newString = string.toUpperCase();
  /* We create an empty outPut variable to enter the encrypted values of each letter of the string */
  var outPut = '';
  /* Recorremos el string para obtener los valores cifrados de cada letra del string segun CipherFormule*/
  for (i = 0; i < newString.length; i++) {
    var cipherFormule = ((newString.charCodeAt(i) - 65 + n) % 26) + 65;
    outPut += String.fromCharCode(cipherFormule);
  }
  return outPut;// Retornamos el string cifrado o encriptado
}
console.log(stringCipher);
// Colocamos la frase encriptada en nuestro html
document.write('Frase encriptada' + stringCipher);
// creating the decipher fuction to decrypt
function decipher(stringdeCipher, n) {
  if (stringCipher === undefined) {
    alert('ADVERTENCIA!! Para descifrar una frase encriptada no ingrese numeros ni campos vacios');
  } else {
    var decipherOutPut = '';
    /* Let's go through the encrypted string to get the decrypted values of each letter of the stringencripted according to decipherFormule */
    for (i = 0; i < stringCipher.length; i++) {
    // Aseguramos que cumpla para todas las letras a desencriptar,
      if ((stringCipher.charCodeAt(i) - 65 - n) >= -26) {
        var decipherFormule = ((stringCipher.charCodeAt(i) - 65 - n) + 26) + 65;
        decipherOutPut += String.fromCharCode(decipherFormule);
      } else if ((stringCipher.charCodeAt(i) - 65 - n) < -26) {
        var decipherFormule2 = ((stringCipher.charCodeAt(i) - 65 - n) + 26 + 26) + 65;
        decipherOutPut += String.fromCharCode(decipherFormule2);
      }
    }
    return decipherOutPut; // We return the decrypted string
  }
}
// Llamamos a la funcion
console.log(decipher(stringCipher, 33));
