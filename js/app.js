function cipher(word) {
  var word = prompt('Ingrese la frase');
  // ingreso de la palabra

  // Validadno que la cadena no este vacia
  if (word === '');
  {
    alert('Tienes que ingresar una frase');
  }
  // Validando que solo permita el ingreso de  letras minusculas y mayusculas

  if ((word.charCodeAt() >= 97 && word.charCodeAt() <= 122) || (word.charCodeAt() >= 65 && word.charCodeAt() <= 90)) {
    alert('muy bien');
  }

  else {
    alert('No es valido ingresar numeros');
  }

  var wordTemp = 0;
  var wordCipher = ''; // Se define para  almacenara la palabra cifrada
  var codeAscii = 0;// variable donde se guarda el codigo correspondiente a cada letra en ascii
  for (var i = 0; i < word.length; i++) {
    codeAscii = word.charCodeAt(i); // para obtener el codigo ascii de una palabra ingresada
    // Para letras mayusculas
    if (codeAscii >= 65 && codeAscii <= 90) {
      wordTemp = (word.charCodeAt(i) - 65 + 33) % 26 + 65;
    }
    
    // Para letras minusculas
    else {
      (codeAscii >= 97 && codeAscii <= 122)
      wordTemp = (word.charCodeAt(i) - 65 + 33) % 26 + 97;
    }


    wordCipher += (String.fromCharCode(wordTemp));

    // se va  almacenando uno por uno de acuerdo a la cantidad de letras de la palabra que se ingreso
  }

  return wordCipher;// retorna la salida de la palabra cifrada
}

console.log(cipher('a'));


function decipher(word) {
  var word = prompt('Ingrese la frase');// ingreso de la palabra
  // Validadno que la cadena no este vacia
  if (word === '') {
    alert('Tienes que ingresar una frase');
  }
  // Validando que solo permita el ingreso de  letras minusculas y mayusculas

  if ((word.charCodeAt() >= 97 && word.charCodeAt() <= 122) || (word.charCodeAt() >= 65 && word.charCodeAt() <= 90)) {
    alert('muy bien');
  }

  else {
    alert('No es valido ingresar numeros');
  }
  var word = prompt('Ingrese la frase');
  var wordTemp = 0;
  var wordCipher = ''; // Se define para  almacenara la palabra decifrada
  var codeAscii = 0;// variable donde se guarda el codigo correspondiente a cada letra en ascii
  for (var i = 0; i < word.length; i++) {
    codeAscii = word.charCodeAt(i); // para obtener el codigo ascii de una palabra ingresada
    // Para letras mayusculas
    if (codeAscii >= 65 && codeAscii <= 90) {
      wordTemp = ((word.charCodeAt(i) - 33) % 26) ;
      // Para letras minusculas
    }
    else {
      (codeAscii >= 97 && codeAscii <= 122)
      wordTemp = ((word.charCodeAt(i) - 33) % 26) ;
    }


    wordCipher += (String.fromCharCode(wordTemp)); // se va  almacenando uno por uno de acuerdo a la cantidad de letras de la palabra que se ingreso
  }

  return wordCipher; // retorna la salida de la palabra decifrada
}
// console.log(decipher ('Alas'));
