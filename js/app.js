var start = prompt('Enter your Message!!!');
// Creando funcion para el cifrado del mensaje por medio del codigo cesar!
function cipher(message) {
  var cipherMessage = '';
  var n = 33;
  for (var i = 0; i < message.length; i++) {
    var x = message[i].charCodeAt(0);
    var asciiCode = (x - 65 + n) % 26 + 65;
    cipherMessage += String.fromCharCode(asciiCode);
  }
  return cipherMessage;
}
// Creando segunnda funcion para el decifrado del mensaje por medio del codigo cesar!
function decipher(cipherMessage) {
  var message = '';
  var n = 33;
  for (var i = 0; i < cipherMessage.length; i++) {
    var x = cipherMessage[i].charCodeAt(0);
    var asciiCode = (x - 65 + 26 + 26 - n) % 26 + 65;
    message += String.fromCharCode(asciiCode);
  }
  return message;
}
console.log('This is your result!!' + ' ' + cipher(start));