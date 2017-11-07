function cipher(secret) {
  var secret = document.getElementById('palabra').value;

  var newPhrase = '';
  /*recorremos todo  el string*/

  for (var j = 0; j < secret.length; j++) {

    var toAscii = secret.charCodeAt(j);
    //convierte el string ingresado a su equivalente en Ascii en la posicion i

    if (toAscii > 64 && toAscii < 91) // formula para mayusculas
      newPhrase += String.fromCharCode((toAscii - 65 + 33) % 26 + 65);
    else if (toAscii > 96 && toAscii < 123)  // para minusculas
      newPhrase += String.fromCharCode((toAscii - 97 + 33) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscii);

  }

  return newPhrase;
}


function decipher(secret) {
  var secret = document.getElementById('palabra').value;
  var newPhrase = '';

  for (var i = 0; i < secret.length; i++) {

    var toAscii = secret.charCodeAt(i); //convierte el string ingresado a su equivalente en Ascii en la posicion i

    if (toAscii > 64 && toAscii < 91) //para mayusculas
      newPhrase += String.fromCharCode((toAscii - 65 - 33 + 26 * 2) % 26 + 65);//26*2 porque recorre el abecedario dos veces para decifrar
    else if (toAscii > 96 && toAscii < 123)  //paraminusculas
      newPhrase += String.fromCharCode((toAscii - 97 - 33 + 26 * 2) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscii);
  }

  return newPhrase;

}




//funcion de validacion de datos

//Evalua solo el primer valor del string ingresado

function validate(date) {

  for (var i = 0; i < date.length; i++) {
    if ((date.charCodeAt(i) > 64 && date.charCodeAt(i) < 91) || (date.charCodeAt(i) > 96 && date.charCodeAt(i) < 123)) //condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii, una vez convertido condicionamosa que este entre el rango
      return date;
    else if (date === null)
      return document.write('<p> [ERROR]'); // no ingrese nada
    else
      return document.write('<p> [ERROR]'); // ingrese numeros o simbolos en el primer valor

  }






/*var menu = prompt ('MENU PRINCIPAL CIFRADO CESAR \n\n' + '1- Para cifrar frases  \n\n ' + '2.- Para decifrar frases  \n\n' + '3.- Salir');
var phrase;
switch (menu) {
    case "1":
      phrase = prompt ('Ingrese un texto a cifrar');
      document.write('<p>El texto cifrado es: \n\n </p> ' + cipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion cipher
      break;
    case "2":
      phrase = prompt ('Ingrese un texto a descifrar');
      document.write('<p>El texto descifrado es: \n\n </p> ' + decipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion decipher
      break;
    case "3":
      document.write('Gracias');
      break;
    default:
      alert('Vuelva a realizar el proceso, recuerde ingresar un numero valido de la lista');

}*/