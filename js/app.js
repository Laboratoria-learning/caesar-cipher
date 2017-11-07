// FUNCIÓN DE CIFRADO
function cipher(message) {
  var newString = message.toUpperCase();// A
  var newPositionEncript;
  var positionAlphabetAscii;
  var encripWord = '';
  for (var j = 0; j < newString.length; j++) {
    if (newString[j].charCodeAt() >= 65 && newString[j].charCodeAt() <= 90) {
      positionAlphabetAscii = newString[j].charCodeAt(); // 65
      // Posición de la letra en ASCII
      newPositionEncript = ((positionAlphabetAscii - 65) + 33) % 26 + 65; // 72
      // Con fórmula para encontrar la nueva posición encriptada
      encripWord = encripWord + String.fromCharCode(newPositionEncript); // H
      // variable que concatena la nueva encriptación
    } else {
      encripWord = alert('Solo se aceptan letras. Inténtalo nuevamente!');
      break;
    }
  }
  return encripWord;
}
// FUNCIÓN DE DESCIFRADO
function decipher(message) {
  var newString = message.toUpperCase(); // H
  var newPositionNoEncript;
  var positionAlphabetAscii;
  var noEncripWord = '';

  for (var j = 0; j < newString.length; j++) {
    if (newString[j].charCodeAt() >= 65 && newString[j].charCodeAt() <= 90) {
      positionAlphabetAscii = newString[j].charCodeAt(); // 72
      // Posición de la letra en ASCII
      newPositionNoEncript = ((positionAlphabetAscii - 33 + 65) % 26) + 65; // 65
      // Con fórmula para encontrar la nueva posición no encriptada
      noEncripWord += String.fromCharCode(newPositionNoEncript);// A
      // variable que concatena la nueva encriptación
    } else {
      noEncripWord = alert('Solo se aceptan letras.Inténtalo nuevamente!');
      break;
    }
  }
  return noEncripWord;
}
do {
  var message = '';
  var message = prompt('Ingresa una palabra:');

  if (message === null) {
    alert('Regrese pronto :) ');
    break;
  } else if (message.length === 0) {
    alert('Tu mensaje está vacío, inténtalo nuevamente');
  } else {
    var menuOpc = '1.- Cifrar\n ' + ' 2.- Descifrar';
    var opc = prompt(menuOpc, 'Elige una opción:');
    if (opc === '1') {
      cipher(message);
    } else if (opc === '2') {
      decipher(message);
    } else {
      alert('Inténtalo nuevamente');
      message = '';
    }
  }
} while (message.length === 0);
