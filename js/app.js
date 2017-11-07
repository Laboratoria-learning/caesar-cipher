/* Cifrado cesar
Funcion que cifra mensaje según el algoritmo del cifrado cesar */
function cipher() {
  // Valida que el usuario no ingrese un campo vacío o que contenga números 
  do {
  // muestra mensaje con un input para que el usuario ingrese la frase
    var phrase = prompt('Ingrese la frase a encriptar(Solo letras)').toUpperCase();
  }// hace esto mientras el valor de la frase no sea vacio y no contenga numeros
  while (phrase === '' || validatePhrase(phrase));// convertir la frase en un array
  var array = phrase.split('');
  var newArray = [];
  // Inicia ciclo para pasar letra por letra a encriptar
  for (var i = 0; i < array.length; i++) {
  // capturar las variables que nos permiten encriptar un mensaje.
    var positionAscii = array[i].charCodeAt();
    var positionEncryptedLetter = ((positionAscii - 65 + 33) % 26 + 65);
    var encryptedLetter = String.fromCharCode(positionEncryptedLetter);
    // llena el arrayvacio con cada letra encriptada.
    newArray.push(encryptedLetter);
  }
  // retorna el mensaje encriptado
  var encryText = alert('La frase se encripto a ' + newArray.join(''))

}
// Desencripta mensaje según algoritmo del cifrado cesar
function descipher() {
  do {
    var phrase = prompt('Ingrese la frase a desencriptar(Solo letras)').toUpperCase();
  } while (phrase === '' || validatePhrase(phrase));//convertir la frase en un array
  var array = phrase.split('');
  var newArray = [];
  // inicia un ciclo para desencriptar cada letra del array
  for (var i = 0; i < array.length; i++) {
  // aplica los metodos para hallar la posicion y letra encriptada
    var positionAscii = array[i].charCodeAt();
    var positionEncryptedLetter = ((positionAscii - 13 - 33) % 26 + 65);
    var decrypt = String.fromCharCode(positionEncryptedLetter);
    // lenamos el nuevo array con cada letra desencriptada
    newArray.push(decrypt);
  }
  // retorna alerta con el texto desencriptado
  var decrypt = alert('La frase desencriptada es ' + newArray.join(''))

}
// valida que la frase no tenga numeros
function validatePhrase(phrase) {
  var numbers = '0123456789';
  // inicia ciclo para recorrer letra por letra y comprobar que esta no sea numero
  for (i = 0; i < phrase.length; i++) {
    // condiciona: devuelve true si en las posiciones de la lista de numeros no existe una sola letra de la frase
    if (numbers.indexOf(phrase[i]) != -1) {
      return true;
    }
  }
  return false;
}
// crea una funcion que contiene la funcion a ejecutar si el usuario desea cifrar o descifrar una frase
function menu(option) {
  // condicionamos cada opción
  (option === 1) ? cipher() : (option === 2) ? descipher() : (option === 3) ? alert('HASTA PRONTO') : alert('No existe esa opcion');
}
// Muestra  mensaje al usuario
do {
  var strMenu = 'BIENVENIDO AL CIFRADO CESAR \n **Escriba 1 para cifrar una frase \n **Escriba 2 para descifrar una frase \n **Escriba 3 para salir';
  // convierte a entero la opcion ingresada
  var option = parseInt(prompt(strMenu));
  // llama a la funcion menu
  menu(option);
}// hace esto mientras el usuario ingrese opciones del 1 al 3 y sea de tipo numerico
while (option != 3 && option != NaN);