function cipher(question) { // creando la funcion para encriptar las letras
  question = prompt('Ingrese un texto').toUpperCase();// convirtiendo a mayusculas todas letras
  var newPhrase = [];// creando un array vacio donde iran las letras encriptadas
  var verification = parseInt(question); // verificando que solo se puedan ingresar letras
  while (verification >= 0 || verification <= 0 || question === ' ') {
    question = prompt('Ingrese un texto').toUpperCase();// si no son letras le enviamos un mensaje que pida letras
    verification = parseInt(question);
  }


  question = question.split('');// dividimos cada letra independientemente
  for (var i = 0; i < question.length;i++) { // creamos el ciclo para recorrer toda la cadena
    var position = question[i].charCodeAt();// pedimos su posicion en ascii
    var letter = ((position - 65 + 33) % 26 + 65);// aplicando la formula del cifrado cesar
    // pedimos la letra que este en la posicion que nos brindo el codigo anterior
    var encryptedLetter = String.fromCharCode(letter);
    newPhrase.push(encryptedLetter); // agregamos al nuevo array
  }

  return newPhrase.join('');
}
console.log(cipher());


function decipher(phrase) { // creamos la funcion para desencriptar las letras
  phrase = prompt('Ingrese un texto').toUpperCase(); // las pasamos todas a mayusculas
  var newA = [];// creamos un array vacio donde ingresan las nuevas letras
  var verification = parseInt(phrase); // verificamos que solo ingrese letras
  while (verification >= 0 || verification <= 0 || verification === ' ') {
    phrase = prompt('Ingrese texto valido').toUpperCase();
    verification = parseInt(phrase);
  }
  phrase = phrase.split('');// separamos los caracteres
  for (var i = 0; i < phrase.length;i++) {// inicializamos el ciclo para recorrer todo el texto
    var place = phrase[i].charCodeAt();// pedimos su posicion en el codigo ascii
    var words = ((place - 13 - 33) % 26 + 65);// aplicamos la formula para desencriptar
    var encrypt = String.fromCharCode(words);// pedimos la letra depende ala pocision que nos dieron
    newA.push(encrypt);// agregamos al nuevo array
  }
  return newA.join('');
}
console.log(decipher());
