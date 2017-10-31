// Creando función cipher

function cipher (str) {

    var index1 = []; // [65, 66, 67] || [97, 98, 99]


    var indexAscii = []; //[72, 73, 74] || [104, 105, 106]


    var letters1 = []; // ['H', 'I', 'J'] || ['h', 'i', 'j']



    if(str === str.toUpperCase()) {


     for(var i = 0; i < str.length; i++) {

      index1.push(str.charCodeAt(i));

     }


     for(var j = 0; j < index1.length; j++) {

      var ciphering = (index1[j] - 65 + 33) % 26 + 65;

       indexAscii.push(ciphering);


      }


     for(var k = 0; k < indexAscii.length; k++) {

      var alphabetLetters1 = String.fromCharCode(indexAscii[k]);

      letters1.push(alphabetLetters1);

      }

    }

    if(str === str.toLowerCase()) {

      for(var l = 0; l < str.length; l++) {

       index1.push(str.charCodeAt(l));

      }


      for(var m = 0; m < index1.length; m++) {

       var ciphering2 = (index1[m] - 97 + 33) % 26 + 97;

       indexAscii.push(ciphering2);

      }


      for(var n = 0; n < indexAscii.length; n++) {

      var alphabetLetters2 = String.fromCharCode(indexAscii[n]);

      letters1.push(alphabetLetters2);


      }

    }


    var arrayToString1 = letters1.join('');


    return arrayToString1;

  }

// Creando función decipher

function decipher (str) {


  var index2 = []; // [72, 73, 74] || [104, 105, 106]


  var normalIndex = []; // [ 65, 66, 67 ] || [97, 98, 99]


  var letters2 = []; // ['A', 'B', 'C'] || ['a', 'b' ,'c']


  if(str === str.toUpperCase()) {


    for(var o = 0; o < str.length; o++) {

      index2.push(str.charCodeAt(o));

    }


    for(var p = 0; p < index2.length; p++) {

      var deciphering = (index2[p] + 65 - 33) % 26 + 65;

      normalIndex.push(deciphering);

    }


    for(var q = 0; q < normalIndex.length; q++) {

     var alphabetLetters3 = String.fromCharCode(normalIndex[q]);

     letters2.push(alphabetLetters3);

    }

  }


  if(str === str.toLowerCase()) {


    for(var r = 0; r < str.length; r++) {

      index2.push(str.charCodeAt(r));

    }


    for(var s = 0; s < index2.length; s++) {

      var deciphering2 = (index2[s] - 97 + 33) % 26 + 83;

      normalIndex.push(deciphering2);


    }


    for(var t = 0; t < normalIndex.length; t++) {

     var alphabetLetters4 = String.fromCharCode(normalIndex[t]);

     letters2.push(alphabetLetters4);

    }

  }

  var arrayToString2 = letters2.join('');

  return arrayToString2;

}


//Preguntando al usuario

 var phrase = prompt('Ingrese una frase');

 if(typeof(phrase) == 'string' && phrase !== '') {

   var options = '1. Quieres cifrar esta frase según el código ASCII \n 2.Quieres descifrar esta frase en código ASCII.\n';

   var op = parseInt(prompt(options));


   if(op === 1) {

     console.log(cipher(phrase));

    }

   else {

     console.log(decipher(phrase));

    }

  }
