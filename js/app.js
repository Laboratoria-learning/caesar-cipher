// Creando funcion Cifrado Cesar
function cipher(msg, x) {
  // Creando variable para el código original
  var origCode = 0;
  // Creando variable para el código nuevo
  var newCode = 0;
  // Creando variable para letra nueva
  var newLetter = '';

  // Recorriendo el string de izquierda a derecha
  for (var i = 0; i < msg.length; i++) {
    // Encontramos el código de cada caracter con el método charCodeAt
    origCode = msg.charCodeAt(i);
    // Si el caracter es mayuscula se encuentra entre los codigos 65 y 90
    if (origCode >= 65 && origCode <= 90) {
      newCode = (origCode - 65 + x) % 26 + 65;
      newLetter = String.fromCharCode(newCode);
      msg = msg.slice(0, i) + newLetter + msg.slice(i + 1, msg.length);
      // Si el caracter es minuscula se encuentra entre los codigos 97 y 122
    } else if (origCode >= 97 && origCode <= 122) {
      newCode = (origCode - 97 + x) % 26 + 97;
      newLetter = String.fromCharCode(newCode);
      msg = msg.slice(0, i) + newLetter + msg.slice(i + 1, msg.length);
    }
  }
  // Retornando mensaje cifrado
  return alert(msg);
}

// Creando función para descrifrar
function decipher(msg, x) {
  // Creando variable para el código cifrado
  var newCode = 0;
  // Creando variable para el código original
  var origCode = 0;
  // Creando variable para la letra descifrada
  var origLetter = '';

  // Recorriendo el string de izquierda a derecha
  for (var i = 0; i < msg.length; i++) {
    // Encontramos el código de cada caracter mediante el método charCodeAt
    newCode = msg.charCodeAt(i);
    // Si el caracter es mayuscula se encuentra entre los codigos 65 y 90
    if (newCode >= 65 && newCode <= 90) {
      if ((newCode - x % 26) < 65)
        origCode = 90 - (x % 26) + (newCode - 65) + 1;
      else 
        origCode = (newCode - x % 26);
      // Teniendo el código original se puede encontrar la letra descifrada mediante el método fromCharCode
      origLetter = String.fromCharCode(origCode);
      msg = msg.slice(0, i) + origLetter + msg.slice(i + 1, msg.length);
    } else if (newCode >= 97 && newCode <= 122) { // Si el caracter es minuscula se encuentra entre los codigos 97 y 122
      if ((newCode - x % 26) < 97)
        origCode = 122 - (x % 26) + (newCode - 97) + 1;
      else 
        origCode = (newCode - x % 26);
      // Teniendo el código original se puede encontrar la letra descifrada mediante el método fromCharCode
      origLetter = String.fromCharCode(origCode);
      msg = msg.slice(0, i) + origLetter + msg.slice(i + 1, msg.length);
    }
    // Cambiando el caracter cifrado por el descifrado
  }
  // Retornando mensaje descifrado
  return alert(msg);
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
      break; // break para salir del bucle
    }
    
    // Si la opción es 2  
  } else if (option === '2') {
    var msg = prompt('Ingrese mensaje a descifrar:');
    // Llamar función decipher
    if (msg !== '') {
      decipher(msg, 33);
      break; // break para salir del bucle
    }
  }
} while (option !== '3');