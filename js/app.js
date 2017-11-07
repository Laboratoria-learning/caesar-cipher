function cipher(secret) {
  var newPhrase = '';

  // recorremos todo  el string

  for (var j = 0; j < secret.length; j++) {
    var toAscci = secret.charCodeAt(j); // convierte el string ingresado a su equivalente en Ascii en la posicion i

    if (toAscci > 64 && toAscci < 91) // formula para mayusculas
      newPhrase += String.fromCharCode((toAscci - 65 + 33) % 26 + 65);
    else if (toAscci > 96 && toAscci < 123) // para minusculas
      newPhrase += String.fromCharCode((toAscci - 97 + 33) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscci);
  }

  return newPhrase;
}


function decipher(secret) {
  var newPhrase = '';

  for (var i = 0; i < secret.length; i++) {
    var toAscci = secret.charCodeAt(i); // convierte el string ingresado a su equivalente en Ascii en la posicion i

    if (toAscci > 64 && toAscci < 91) // para mayusculas
      newPhrase += String.fromCharCode((toAscci - 65 - 33 + 26 * 2) % 26 + 65);// 26*2 porque recorre el abecedario dos veces para decifrar
    else if (toAscci > 96 && toAscci < 123) // paraminusculas
      newPhrase += String.fromCharCode((toAscci - 97 - 33 + 26 * 2) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscci);
  }

  return newPhrase;
}

// funcion de validacion de datos
function validate(date) {
  for (var i = 0; i < date.length; i++) {
    if ((date.charCodeAt(i) > 64 && date.charCodeAt(i) < 91) || (date.charCodeAt(i) > 96 && date.charCodeAt(i) < 123)) // condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii, una vez convertido condicionamosa que este entre el rango
      return date;
    else if (date === null)
      return document.write('[ERROR]');
    else
      return document.write('[ERROR]');
  }
}


/*


var phrase = prompt ('Ingrese un texto a cifrar');
document.write(cipher(validate(phrase)) + '\n\n');


var phrase = prompt ('Ingrese un texto a descifrar');
document.write(decipher(validate(phrase)));

*/

// menu principal
var menu = prompt('MENU PRINCIPAL CIFRADO CESAR \n\n' + '1- Para cifrar frases  \n\n ' + '2.- Para decifrar frases  \n\n' + '3.- Salir');
var phrase;
switch (menu) {
case '1':
  phrase = prompt('Ingrese un texto a cifrar');
  document.write('<p>El texto cifrado es: \n\n </p> ' + cipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion cipher
  break;
case '2':
  phrase = prompt('Ingrese un texto a descifrar');
  document.write('<p>El texto descifrado es: \n\n </p> ' + decipher(validate(phrase))); // la frase ingresada primero es validada y luego pasa a la funcion decipher
  break;
case '3':
  document.write('Gracias');
  break;
default:
  alert('Vuelva a realizar el proceso, recuerde ingresar un numero valido de la lista');
}
