// Creando funcion Cifrado Cesar
function cipher(msg, x) {
  // Creando variables
  var origCode = 0;
  var newCode = 0;
  var newLetter = '';
  var cipherMsg = '';

  // Recorriendo el string de izquierda a derecha
  for (var i = 0; i < msg.length; i++) {
    // Encontramos el código de cada caracter con el método charCodeAt
    origCode = msg.charCodeAt(i);
    // Si el caracter es una letra mayúscula o minúscula (entre los códigos 65 y 90 o 97 y 122),
    // realiza el cifrado, de lo contrario agrega el caracter original al nuevo string
    if (origCode >= 'A'.charCodeAt(0) && origCode <= 'Z'.charCodeAt(0)) {
      newCode = (origCode - 'A'.charCodeAt(0) + x) % 26 + 'A'.charCodeAt(0);
      newLetter = String.fromCharCode(newCode);
      cipherMsg += newLetter;
    } else if (origCode >= 'a'.charCodeAt(0) && origCode <= 'z'.charCodeAt(0)) {
      newCode = (origCode - 'a'.charCodeAt(0) + x) % 26 + 'a'.charCodeAt(0);
      newLetter = String.fromCharCode(newCode);
      cipherMsg += newLetter;
    } else {
      cipherMsg += String.fromCharCode(origCode);
    }
  }
  // Retornando mensaje cifrado
  return alert('Mensaje cifrado:\n' + cipherMsg);
}

// Creando función para descrifrar
function decipher(msg, x) {
  // Creando variables
  var newCode = 0;
  var origCode = 0;
  var origLetter = '';
  var decipherMsg = '';

  // Recorriendo el string de izquierda a derecha
  for (var i = 0; i < msg.length; i++) {
    // Encontramos el código de cada caracter mediante el método charCodeAt
    newCode = msg.charCodeAt(i);
    // Si el caracter es una letra mayúscula o minúscula (entre los códigos 65 y 90 o 97 y 122),
    // realiza el cifrado, de lo contrario agrega el caracter original al nuevo string
    if (newCode >= 'A'.charCodeAt(0) && newCode <= 'Z'.charCodeAt(0)) {
      if ((newCode - x % 26) < 'A'.charCodeAt(0)) {
        origCode = 'Z'.charCodeAt(0) - (x % 26) + (newCode - 'A'.charCodeAt(0)) + 1;
      } else {
        origCode = (newCode - x % 26);
      }
      origLetter = String.fromCharCode(origCode);
      decipherMsg += origLetter;
    } else if (newCode >= 'a'.charCodeAt(0) && newCode <= 'z'.charCodeAt(0)) {
      if ((newCode - x % 26) < 'a'.charCodeAt(0)) {
        origCode = 'z'.charCodeAt(0) - (x % 26) + (newCode - 'a'.charCodeAt(0)) + 1;
      } else { 
        origCode = (newCode - x % 26);
      }
      origLetter = String.fromCharCode(origCode);
      decipherMsg += origLetter;
    } else {
      decipherMsg += String.fromCharCode(newCode);
    }
  }
  // Retornando mensaje descifrado
  return alert('Mensaje descifrado:\n' + decipherMsg);
}

// Menú de opciones para cifrar o descifrar mensajes
do {
  var menu = '1.Cifrar mensaje\n2.Descifrar mensaje\n3.Salir';
  var option = prompt('Ingrese una opción:\n' + menu);
  // Si la opción es 1
  if (option === '1') {
    var msg = prompt('Ingrese mensaje a cifrar:');
    // Llamar función cipher
    if (msg !== '') {
      cipher(msg, 33);
    }
    // Si la opción es 2  
  } else if (option === '2') {
    var msg = prompt('Ingrese mensaje a descifrar:');
    // Llamar función decipher
    if (msg !== '') {
      decipher(msg, 33);
    }
  }
} while (option !== '3');