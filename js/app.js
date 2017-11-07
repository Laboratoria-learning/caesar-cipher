var word = prompt('Write a word to encrypt');
function cipher(string) {
// Creamos una variable vacia para almacenar el string encriptado//
  var newString = '';
  // Iteramos cada caracter del string
  for (var i = 0; i < word.length; i++) {
    // Almacenamos el codigo ASCII de cada caracter
    var encrypter = word.charCodeAt(i);
    // Verificamos si las letras son mayusculas.
    if (encrypter >= 65 && encrypter <= 90) {
      // Aplicamos la formula para obtener el codigo ASCII 
      var letters = (encrypter - 65 + 33) % 26 + 65;
      // Convertimos el codigo ASCII en letra encriptada y lo unimos al string vacío
      newString += String.fromCharCode(letters);
    } else if (encrypter >= 97 && encrypter <= 122) { // Repetimos el procedimiento si son minusculas.
      var lettersTwo = (encrypter - 97 + 33) % 26 + 97;
      newString += String.fromCharCode(lettersTwo);
    } else if (typeof string !== String) { // Verificamos que el usuario no ingrese un numero o campo vacio
      alert('You have not entered a word');
    }
  }
  return newString;
}
// Llamamos a la funcion
document.write(cipher('word'));

var word = prompt('Write a word to decode');
function decipher(string) {
  // Creamos una variable vacia para almacenar el string encriptado
  var newString = ' ';
  // Iteramos cada caracter del string
  for (var i = 0; i < word.length; i++) {
    // Almacenamos el codigo ASCII de cada caracter
    var encrypter = word.charCodeAt(i);
    // Verificamos si las letras son mayusculas.
    if (encrypter >= 65 && encrypter <= 90) {
      // Aplicamos la formula para obtener el codigo ASCII 
      var letters = (encrypter - 65 - 33) % 26 + 65;
      // Convertimos el codigo ASCII en letra encriptada y lo unimos al string vacío
      newString += String.fromCharCode(letters);
    } else if (encrypter >= 97 && encrypter <= 122) {// Repetimos el procedimiento si son minusculas.
      var lettersTwo = (encrypter - 97 - 33) % 26 + 97;
      newString += String.fromCharCode(lettersTwo);
    } else if (typeof string !== String) {// Verificamos que el usuario no ingrese un numero o campo vacio
      alert('You have not entered a word');
    }
  }
  return newString;
}
// Llamamos a la funcion
document.write(decipher('word'));


