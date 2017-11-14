// cifra cadenas de texto
// string:cadena de texto a cifrar
function cipher(string) {
  // comprobando que el dato ingresado sea una cadena de texto
  if (typeof string !== 'string') {
    return alert('Debe ingresar una cadena de texto');
  } else {
    // convirtiendo la cadena de texto a mayúsculas
    string = string.toUpperCase();
    // newPosition:almacenará las posiciones en el código ASCII de la cadena de texto
    var newPosition = [];
    // ciclo que itera en las posiciones de la cadena de texto
    for (var i = 0; i < string.length; i++) {
      // agregando la posicion en el codigo ASCII a newPosition
      newPosition.push((string.charCodeAt(i) - 65 + 33) % 26 + 65);
    }
    // newString:almacenará el nuevo string encriptado
    var newString = '';
    // iterando en las posiciones de newLetters:
    for (var j = 0; j < newPosition.length; j++) {
      // concatenando a newString las letras encriptadas
      newString += String.fromCharCode(newPosition[j]);
    }
    // retornando cadena de texto encriptada
    return alert('Sufrase crifrada es ' + newString);
  }
}

// descifra cadenas de texto
// string:cadena de texto a descifrar
function decipher(string) {
  // verificando que el dato ingresado sea un string
  if (typeof string !== 'string') {
    return alert('Debe ingresar una cadena de texto');
  } else {
    // convirtiendo la cadena de texto a mayúsculas
    string = string.toUpperCase();
    // newPosition:almacenará las posiciones en el código ASCII de la cadena de texto
    var newPosition = [];
    // ciclo que itera en las posiciones de la cadena de texto
    for (var i = 0; i < string.length; i++) {
      // agregando las posiciones de las letras del string en codigo ASCII a newPosition
      newPosition.push((string.charCodeAt(i) - 13 - 33) % 26 + 65);
    }
    // almacenará las letras encriptadas
    var newString = '';
    // iterando en las posiciones de newPosition
    for (var j = 0; j < newPosition.length; j++) {
      // concantenando las letras encriptadas a newString
      newString += String.fromCharCode(newPosition[j]);
    }
    return alert('Su frase descifrada es ' + newString);
  }
}

// mostrando opciones al usuario:
do {
  var menu = 'CIFRADO CESAR \n1.Cifrar \n2.Descifrar\n';
  var option = parseInt(prompt(menu, 0));
  // si opcion 1 :cifrar
  // si opcion 2:Descifrar
  // si no : Escoga una opcion del menu
  if (option === 1) {
    // pidiendo frase a cifrar y validando que sea string
    do {
      var string = prompt('Escriba la frase que desea cifrar');
    } while (!string || !isNaN(string));
    cipher(string);
  } else if (option === 2) {
    // pidiendo frase a descifrar y validando que sea un string
    do {
      var secondString = prompt('Escriba la frase que desea descifrar');
    } while (!secondString || !isNaN(secondString));
    decipher(secondString);
  } else {
    alert('Escoja una opción del menu');
  }
} while (!option);
