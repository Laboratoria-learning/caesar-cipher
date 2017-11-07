function cipher(message) {
// Desplazamiento  33;
  var result = '';
  // Recorremos el string
  for (var i = 0; i < message.length; i++) {
    // Declaramos una variable donde guardaremos el código ASCII
    var charCode = message.charCodeAt(i);
    // Declaramos una variable donde guardaremos el código ASCII aplicando la fórmula
    var newCode = (charCode - 65 + 33) % 26 + 65;
    // Ahora ya tenemos el nuevo código ASCII --> 72
    var letter = String.fromCharCode(newCode);
    result += letter;
  }
  return result;
}
var message = prompt('Ingrese una frase');
alert(cipher(message));
function decipher(message) {
  var result = '';
  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    var newCode = (charCode - 65 - 33) % 26 + 65;
    var letter = String.fromCharCode(newCode);
    result += letter;
  }
  return result;
}
var message = prompt('Ingrese una frase');
alert(decipher(message));