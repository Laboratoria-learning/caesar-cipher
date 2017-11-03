function cipher(message, position) {
  // Declaración de variables
  var newMessage = '';
  var str = '';
  var count;
  var codeStr;
  // Obtener código ascii para primera letra de message
  var code = message.charCodeAt(0);
  // Evaluar si es Mayúscula o minuscula
  (code <= 90) ? str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : str = 'abcdefghijklmnopqrstuvwxyz';
  // Obtengo el tamaño de abecedario
  count = str.length;
  for (var i = 0; i < message.length; i++) {
    // Obtener código ascii para cada letra de message
    code = message.charCodeAt(i);
    // Obtengo código de primer letra del abecedario
    codeStr = str.charCodeAt(0);
    // Aplicar fórmula
    var newCode = (code - codeStr + position) % count + codeStr;
    // Generar mensaje codificado
    newMessage += String.fromCharCode(newCode);
  }
  alert('El mensaje cifrado es: ' + newMessage);
}

function decipher(message, position) {
  // Declaración de variables
  var newMessage = '';
  var str = '';
  var count;
  var codeStr;
  // Obtener código ascii para primera letra de message
  var code = message.charCodeAt(0);
  // Evaluar si es Mayúscula o minuscula
  (code <= 90) ? str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : str = 'abcdefghijklmnopqrstuvwxyz';
  // Obtengo el tamaño de abecedario
  count = str.length;
  for (var i = 0; i < message.length; i++) {
    // Obtener código ascii para cada letra de message
    code = message.charCodeAt(i);
    // Obtengo código de primer letra del abecedario
    codeStr = str.charCodeAt(0);
    // Aplicar fórmula
    var newCode = (code + codeStr + 33) % count + codeStr;
    // Generar mensaje codificado
    newMessage += String.fromCharCode(newCode);
  }
  alert('El mensaje descifrado es: ' + newMessage);
}
function validateNoNumber(word) {
  var temp = true;
  var char;
  for (var i = 0; i < word.length; i++) {
    char = word.charCodeAt(i);
    // Si esta dentro de parametros no es letra
    if ((char < 65 || char > 90 && char < 97 || char > 122))
      temp = false;
  }
  return temp;
}
/** Ejecutar programa **/
do {
  // Declaro variable de opción elije usuario
  var optionString = prompt('Elija opción: \n1.Cifrado \n2.Descifrado');
  var optionNumber = parseInt(optionString);
}
while (optionString === '' || (optionNumber !== 1 && optionNumber !== 2));
do {
  var message = prompt('Ingresar mensaje');
  // Comprobar si no es letra
  var temp = validateNoNumber(message);
  (optionNumber === 1) ? cipher(message, 33) : decipher(message, 33);
}
while (message === '' || !temp);
