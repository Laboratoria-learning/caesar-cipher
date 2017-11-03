var strMenu = '1. Encriptar\n2. Desencriptar\n';
var menu =  prompt ('¿Qué desea hacer?: \n'+ strMenu);
var phrase = prompt('Inserta una frase a encriptar')

function cipher(phrase,base){
  var codeAscii= [];

  for (i = 0; i < phrase.length; i++){

    var letter = phrase.charAt(i);

    if (letter === letter.toUpperCase()) {

      var letterUp = letter.charCodeAt(0);

      letterUp = (letterUp-65+base)%26+65;

      codeAscii.push(letterUp);

    }
    else{
      var letterDown = (letterDown - 97 + base)%26+97;

     codeAscii.push(letterDown);

    }
  }

  var newArray = codeAscii.reverse();

  var newPhrase = ' ';

  for (e = 0; e< newArray.length;e++);
  var newLetter = String.fromCharCode(newArray[e]);
  var newPhrase = newLetter.concat(newPhrase);

  return newPhrase;
}
 console.log(cipher(phrase,33));
