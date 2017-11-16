var phrase = prompt('Ingrese el mensaje a cifrar:');

if (phrase === '') {
  alert('Por favor, ingrese un mensaje.');
}
// Función para cifrar una frase
var cipher = function(phrase) {
  var numberFixed = 33; // valor fijo
  if (phrase == parseInt(phrase)) {
    alert('Ingrese solo letras.');
  } else {
    var arrCodeAscii = [];
    var newPhrase = [];
    for (var i = 0; i < phrase.length; i++) {
      var letter = phrase.charAt(i);
      if (letter == letter.toUpperCase()) {
        var asciiUppercase = letter.charCodeAt(0);
        newAsciiUppercase = (asciiUppercase - 65 + numberFixed) % 26 + 65;
        arrCodeAscii.push(newAsciiUppercase);
      } else {
        var asciiLowercase = letter.charCodeAt(0);
        newAsciiLowercase = (asciiLowercase - 97 + numberFixed) % 26 + 97;
        arrCodeAscii.push(newAsciiLowercase);
      }
    }
    for (var j = 0; j < arrCodeAscii.length; j++) {
      var newLetter = String.fromCharCode(arrCodeAscii[j]);
      newPhrase.push(newLetter);
    }
  }
  if (typeof(phrase) === 'string') {
    alert('Mensaje cifrado: ' + newPhrase.join(''));
  }
};
cipher(phrase);

/*
// Se ejecuta cuando se selecciona una opción
var menu = function(option) {
  (option == 1) ? prompt('Ingrese el mensaje a cifrar:') : (option == 2) ? prompt('Ingrese el mensaje a descifrar:') : (option == 3) ? alert('Gracias por su visita.') : alert('No tenemos esa opción.');
};

// Para mostrar una ventana emergente con distintas opciones
do {
  var strMenu = '1. Cifrar un mensaje \n 2. Descrifrar un mensaje \n 3. Salir';
  var option = prompt('Seleccione una opción:\n' + strMenu);
  menu(option);
} while (option != 3);
*/
