// Creando función cipher

function cipher(str) {
  var index1 = []; // [65, 66, 67] || [97, 98, 99]
  var indexAscii = []; // [72, 73, 74] || [104, 105, 106]
  var letters1 = []; // ['H', 'I', 'J'] || ['h', 'i', 'j']
  if (str === str.toUpperCase()) {
    for (var i = 0; i < str.length; i++) {
      index1.push(str.charCodeAt(i));
    }
    for (var j = 0; j < index1.length; j++) {
      var ciphering = (index1[j] - 65 + 33) % 26 + 65;
      indexAscii.push(ciphering);
    }
    for (var num = 0; num < indexAscii.length; num++) {
      var alphabetLetters1 = String.fromCharCode(indexAscii[num]);
      letters1.push(alphabetLetters1);
    }
  }

  if (str === str.toLowerCase()) {
    for (var num1 = 0; num1 < str.length; num1++) {
      index1.push(str.charCodeAt(num1));
    }


    for (var num2 = 0; num2 < index1.length; num2++) {
      var ciphering2 = (index1[num2] - 97 + 33) % 26 + 97;
      indexAscii.push(ciphering2);
    }


    for (var num3 = 0; num3 < indexAscii.length; num3++) {
      var alphabetLetters2 = String.fromCharCode(indexAscii[num3]);
      letters1.push(alphabetLetters2);
    }
  }

  var arrayToString1 = letters1.join('');
  return arrayToString1;
}

// Creando función decipher

function decipher(str) {
  var index2 = []; // [72, 73, 74] || [104, 105, 106]
  var normalIndex = []; // [ 65, 66, 67 ] || [97, 98, 99]
  var letters2 = []; // ['A', 'B', 'C'] || ['a', 'b' ,'c']

  if (str === str.toUpperCase()) {
    for (var num4 = 0; num4 < str.length; num4++) {
      index2.push(str.charCodeAt(num4));
    }

    for (var num5 = 0; num5 < index2.length; num5++) {
      var deciphering = (index2[num5] + 65 - 33) % 26 + 65;
      normalIndex.push(deciphering);
    }

    for (var num6 = 0; num6 < normalIndex.length; num6++) {
      var alphabetLetters3 = String.fromCharCode(normalIndex[num6]);
      letters2.push(alphabetLetters3);
    }
  }


  if (str === str.toLowerCase()) {
    for (var num7 = 0; num7 < str.length; num7++) {
      index2.push(str.charCodeAt(num7));
    }


    for (var num8 = 0; num8 < index2.length; num8++) {
      var deciphering2 = (index2[num8] - 97 + 33) % 26 + 83;
      normalIndex.push(deciphering2);
    }


    for (var num9 = 0; num9 < normalIndex.length; num9++) {
      var alphabetLetters4 = String.fromCharCode(normalIndex[num9]);
      letters2.push(alphabetLetters4);
    }
  }
  var arrayToString2 = letters2.join('');
  return arrayToString2;
}

// Preguntando al usuario

var phrase = prompt('Ingrese una frase');

if (typeof(phrase) === 'string' && phrase !== '') {
  var options = '1. Quieres cifrar esta frase según el código ASCII \n 2.Quieres descifrar esta frase en código ASCII.\n';
  var op = parseInt(prompt(options));

  if (op === 1) {
    console.log(cipher(phrase));
  } else {
    console.log(decipher(phrase));
  }
}
