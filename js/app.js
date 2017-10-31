//Pedimos al usuario una frase para encriptarla
var sentence=prompt("Escriba una frase: ");
//Verifica si escribio algo
if(sentence == " "){
  alert("Escribe una frase");
}
//Creamos una funcion, para Cifrar una frase
function cipher(sentence,n){
  //Verifica si escribio solo letras
  if(sentence == parseInt(sentence)){
    alert("Escribe solo letras");
  }
  else{
  //Almacenamos los newCodeAsciiOfLetterUp y newCodeAsciiOfLetterDown
  var arrayOfCodeAsciiLetter = [];
  //Hacemos un bucle para extraer los caracteres de la sentence
  for(i = 0; i < sentence.length; i++){
    //Extraemos una letter de la sentence de acuerdo a su posición
    var letter = sentence.charAt(i);
    //Verificamos si la letra es mayuscula o miniscula
    if(letter == letter.toUpperCase()){
      //Devuelve el Codigo ASCII de la letra mayuscula
      var codeAsciiOfLetterUp = letter.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterUp = (codeAsciiOfLetterUp - 65 + n) % 26 + 65;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterUp en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterUp);
    }
    else {
      //Devuelve el Codigo ASCII de la letra minuscula
      var codeAsciiOfLetterDown = letter.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterDown = (codeAsciiOfLetterDown - 97 + n) % 26 + 97;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterDown en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetter.push(newCodeAsciiOfLetterDown);
    }
  }
  //Declaramos newSentence vacio, para que tome los valores de la concatenación
  var newSentence = [];
  //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
  for(b = 0; b < arrayOfCodeAsciiLetter.length; b++){
    //Devuelve la letra que se encuentra en el nuevo codigo ASCII
    var newLetter = String.fromCharCode(arrayOfCodeAsciiLetter[b]);
    //Concatena las letras
    newSentence.push(newLetter);
  }
  if(typeof(sentence) ==="string" && sentence != " "){
    //Mostramos al usuario la frase incriptada mediante una alert
    return alert("La frase incriptada sería: " + newSentence.join(""));
  }
}
}
//llamamos a la fución
cipher(sentence, 33);
//Pedimos al usuario una frase para encriptarla
var sentenceDecipher=prompt("Escriba la frase que desea decifrar: ");
//Verifica si escribio algo
if(sentenceDecipher == " "){
  alert("Escribe una frase");
}
//Creamos una funcion, para Cifrar una frase
function decipher(sentenceDecipher,n){
  //Verifica si escribio solo letras
  if(sentenceDecipher == parseInt(sentenceDecipher)){
    alert("Escribe solo letras");
  }
  else{
  //Almacenamos los newCodeAsciiOfLetterUp y newCodeAsciiOfLetterDown
  var arrayOfCodeAsciiLetterDecipher = [];
  //Hacemos un bucle para extraer los caracteres de la sentence
  for(i = 0; i < sentenceDecipher.length; i++){
    //Extraemos una letter de la sentence de acuerdo a su posición
    var letterDecipher = sentenceDecipher.charAt(i);
    //Verificamos si la letra es mayuscula o miniscula
    if(letterDecipher == letterDecipher.toUpperCase()){
      //Devuelve el Codigo ASCII de la letra mayuscula
      var codeAsciiOfLetterUpDecipher = letterDecipher.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterUpDecipher = (codeAsciiOfLetterUpDecipher + 65 - n) % 26 + 65;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterUp en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetterDecipher.push(newCodeAsciiOfLetterUpDecipher);
    }
    else {
      //Devuelve el Codigo ASCII de la letra minuscula
      var codeAsciiOfLetterDownDecipher = letterDecipher.charCodeAt(0);
      //Aplicando la formula nos devuelve el nuevo código ASCII
      newCodeAsciiOfLetterDownDecipher = (codeAsciiOfLetterDownDecipher + 97 - n) % 26 + 97;
      /*Aplicando el metodo push introducimos los valores de
      newCodeAsciiOfLetterDown en arrayOfCodeAsciiLetter*/
      arrayOfCodeAsciiLetterDecipher.push(newCodeAsciiOfLetterDownDecipher);
    }
  }
  //Declaramos newSentence vacio, para que tome los valores de la concatenación
  var newSentenceDecipher = [];
  //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
  for(b = 0; b < arrayOfCodeAsciiLetterDecipher.length; b++){
    //Devuelve la letra que se encuentra en el nuevo codigo ASCII
    var newLetterDecipher = String.fromCharCode(arrayOfCodeAsciiLetterDecipher[b]);
    //Concatena las letras
    newSentenceDecipher.push(newLetterDecipher);
  }
  if(typeof(sentenceDecipher) ==="string" && sentenceDecipher != " "){
   //Mostramos al usuario la frase incriptada mediante una alert
   return alert("La frase decifrada sería: " + newSentenceDecipher.join(""));
 }
}
}
//llamamos a la fución
decipher(sentenceDecipher, 33);
