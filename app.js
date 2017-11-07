// funcion para cifrar nuestra cadena de texto
function cipher(myString) {
  var StringUpperCase = myString.toUpperCase();
  var StringCipher = '';
  var numberOfLetter = StringUpperCase.charCodeAt(i);// numero de la letra en el código ASCII
  var cipherformula = numberOfLetter - 65 + 33 % 26 + 65;// formula de cifrado cesar:obtener nuevo numero de letra en el código ASCII
  var numberOfTheLetter = String.fromCharCode(cipherformula);// obtener el valor de la letra cifrada
  myStringCipher += theNewLetter;// formar el string cifrado

  return myStringCipher;
}
