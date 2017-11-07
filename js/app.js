// Primero creamos un string asignandole el nombre de abecedario->'alphabet'
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// transformaremos el string en un array.
var letter = alphabet.split('');
var newLetter = '';

// se creara  una nueva variable "word" donde se ingresara la frase o palabra.
do {
  var word = prompt('Ingrese texto');
} while (word.length === 0 || !isNaN(word))
for (var i = 0;i < word.length;i++) {

//word[i]- es el elemento de la posicion i
//charAt(i).- es para sacar un carecter de la palabra ingresada.

  num=(word.charAt(i)).charCodeAt();

  position = letter.indexOf(word.charAt(i));
  newposition=(position+num)%26;
  newLetter+=letter[newposition-1];
  }

  //document.write(word[i]);
  document.write(newLetter);
  //document.write(letter) ;
  function cipher(letter){
  }
  function decipher(num){

  }
