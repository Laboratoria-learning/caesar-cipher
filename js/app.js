function cipher(frase) {
  var code = '';
  frase = prompt('Ingresa Frase:');
  for (var i = 0; i < frase.length; i++) {
    var  newLet = frase.charCodeAt(i);

    if (newLet >= 65 && newLet <= 90) {
      var Letter = (newLet - 65 + 33) % 26 + 65;
      var alpha = String.fromCharCode(Letter);
      code = code + alpha;
    }

    else if (newLet >= 97 && newLet <= 122) {
      letterMin = (newLet - 97 + 33) % 26 + 97;
      var nLetterMin = String.fromCharCode(letterMin);
      code = code + nLetterMin;
    }
  }

  return code;
}

function desCipher (frase) {
  var code = '';
  frase = prompt('Ingresa Frase a descifrar:');
  for (var i = 0; i < frase.length; i++) {
    var  newLet= frase.charCodeAt(i);

    if (newLet >= 65 && newLet <= 90) {
      var Letter = (newLet - 65 - 33) % 26 + 65;
      var alpha = String.fromCharCode(Letter);
      code = code + alpha;
    }

    else if (newLet >= 97 && newLet <= 122) {
      letterMin = (newLet - 97 - 33) % 26 + 97;
      var nLetterMin = String.fromCharCode(letterMin);
      code = code + nLetterMin;
    }
  }  
  return code;
}

alert('Aplicando el cifrado:' + cipher(''));
alert('Aplicando el descifrado: ' + desCipher(''));
