do {
  var phrase = prompt('¡Bienvenido!,ingrese su frase aquí:'); // le indicamos al usuario que ingrese una frase para trabajar en el programa

  if (phrase === null) { // si le damos click en "cancelar"
    alert('¡Hasta luego!,regrese pronto');
    break;
  } else {//  si ingresamos algo en el campo del prompt sucedera esto :
    var options = prompt('1.CIFRAR \n' + '2.DESCIFRAR'); // el usuario podra elegir una opcion ,depende de lo que quiera hacer.

    if (options === '1') {
      var wordCipher = cipher(phrase);
      alert('Tu frase encriptada luce así : ' + wordCipher);// si escribe 1 en el campo ,la frase se encriptará.
    } else if (options === '2') { //  si escribe 2, la frase se desencripta
      var wordDecipher = decipher(phrase);
      alert('Tu frase desencriptada es así: ' + wordDecipher);
    } else { // si el usuario ingresa algo distinto de 1 y 2 ,saldrá el siguiente mensaje :
      alert('Opción inválida.');
    }
  }
} while (!phrase); //  mientras el campo del prompt este vacío se repetira el código de arriba .

// creando la función "cipher".
function cipher(phrase) {
  var positionAscii;
  var positionNew;
  var newLetters = '';
  var result;

  for (var i = 0; i < phrase.length; i++) {
    if ((phrase[i].charCodeAt() > 64 && phrase[i].charCodeAt() < 91)) {
      //  Encontrar posición de la letra en el alfabeto ASCII
      positionAscii = phrase.charCodeAt(i);
      //  Encontrar nueva posición
      positionNew = ((positionAscii - 65) + 33) % 26 + 65;
      //  Convirtiendo codigo ASCII a una nueva letra
      newLetters = newLetters + String.fromCharCode(positionNew);
      result = newLetters;
    } else if ((phrase[i].charCodeAt() > 96 && phrase[i].charCodeAt() < 123)) {
      positionAscii = phrase.charCodeAt(i);
      positionNew = ((positionAscii - 65) + 33) % 26 + 65;
      newLetters = newLetters + String.fromCharCode(positionNew);
      result = newLetters;
    } else {
      result = ('No encriptamos/desencriptamos números.');
    }
  }
  return result;
}

// creando la función "decipher".
function decipher(phrase) {
//  Encontrar posición de la letra en el alfabeto ASCII
  var positionAscii;
  var positionNew;
  var newLetters = '' ;
  var result;

  for (var i = 0; i < phrase.length; i++) {
    if ((phrase[i].charCodeAt() > 64 && phrase[i].charCodeAt() < 91)) {
      //  Encontrar posición de la letra en el alfabeto ASCII
      positionAscii = phrase.charCodeAt(i);
      //  Encontrar nueva posición
      positionNew = ((positionAscii - 33) % 26) + 52;
      //  Convirtiendo codigo ASCII a una nueva letra
      newLetters = newLetters + String.fromCharCode(positionNew);
      result = newLetters;
    } else if ((phrase[i].charCodeAt() > 96 && phrase[i].charCodeAt() < 123)) {
      positionAscii = phrase.charCodeAt(i);
      positionNew = ((positionAscii - 33) % 26) + 52;
      newLetters = newLetters + String.fromCharCode(positionNew);
      result = newLetters;
    } else {
      result = ('No encriptamos/desencriptamos números.');
    }
  }
  return result;
}
