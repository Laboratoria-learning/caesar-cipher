var space = 33;
var numberLetters = 26;
var reg = /^5[8-9]|6[0-4]|9[1-7]|12[3-9]|1[3-9][0-9]|2[0-5][0-5]$/; // rango de valores en la tabla ascii que no son letras

function cipher(str) {
  var strCipher = '';
  for (var i = 0; i < str.length; i++) {
    var codeChar = str.charCodeAt(i);
    var newCodeChar = (codeChar - codeChar + space) % numberLetters + codeChar; // Obtiene el nuevo codigo ascii de la letra ingresada
	   // Verifica que la variable newCodeChar no esté en el rango de la variable reg, Sí está en el rango le resta el número de letras para volver al principio (A-a).
    reg.test(newCodeChar) ? (newCodeChar -= numberLetters, strCipher += String.fromCharCode(newCodeChar)) : strCipher += String.fromCharCode(newCodeChar);
  }
  return strCipher;
}

function deCipher(str) {
  var strDecipher = '';
  for (var i = 0; i < str.length; i++) {
    var codeChar = str.charCodeAt(i);
    var newCodeChar = codeChar - (space % numberLetters); // Le quita los 7 espacios para decifrar, pero si está en el rango de "reg", le suma 26 para volver a iniciar (A-a)
    reg.test(newCodeChar) ? (newCodeChar += numberLetters, strDecipher += String.fromCharCode(newCodeChar)) : (strDecipher += String.fromCharCode(newCodeChar));
  }
  return strDecipher;
}

function isValidate(str) { // Verifica que la entrada no sea un número o esté vacío
  var regexp = /^[A-Z]|[a-z]$/;
  var state;
  for (var i = 0; i < input.length; i++) {
    if (regexp.test(input[i]) === false || str.length === 0) {
      state = false;
    } else {
      state = true;
    }
  }
  return state;
}

do {
  var op = 0;
  var state;
  var input = prompt('Ingrese un texto: ');
  if (isValidate(input)) {
    document.write('El texto ingresado es: ' + input + '\n');
    var strMenu = '1. Cifrar\n2. Decifrar\n';
    op = parseInt(prompt(strMenu));
    if (op === 1) {
      document.write('</br>' + 'El texto cifrado es ' + cipher(input));
    } else if (op === 2) {
      document.write('</br>' + 'El texto decifrado es ' + deCipher(input));
    } else {
      document.write('Ha ingresado una opción inválida');
    }
  } else {
    alert('Ingrese un texto valido');
  }
} while (!isValidate(input));
