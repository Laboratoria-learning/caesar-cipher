// Inicializacion de nuestra opcion a escoger, para que el usuario entienda que debe ingresarse numero (1, 2).
option = 0;
// Inicializacion de la frase que ingresera el usuario y lo tome como string.
var phrase = '';
// Creamos un bucle para que el usuario escoja las opciones inicializando en (0)
while (option === 0) {
  // Escogemos una opcion
  option = prompt('Que deseas realizar? \n 1.Cifrar \n 2.Desifrar', 0);
  console.log(option);
  // Si escogemos la opcion (1)
  if (option === '1') {
    // Ingresamos la frase a Cifrar mientras que no sea vacio (!phrase)=tiene que si o si estar lleno
    while (!phrase) {
      phrase = prompt('Ingresa una frase a Cifrar');
      // Si no ingreso frase (vacio), mostrar alert("mensaje")
      if (!phrase) {
        alert('No ingreso nada, vuelva a ingresarlo');
      }
    }
    // Si ingrese frase me dirige a la funcion Cipher --> /"926046456 katty"/
    alert(cipher(phrase, 33));
    option = 0;
    phrase = '';
  } else if (option === '2') { // Si escogo la opcion (2),
    // Ingresamos la frase a deCipher mientras que no sea vacio (!phrase)=tiene que si o si estar lleno
    while (!phrase) {
      phrase = prompt('Ingresa una frase a Decifrar');
      // Si no ingreso frase osea esta (vacio), mostrar alert("mensaje")
      if (!phrase) {
        alert('No ingreso nada, vuelva a ingresarlo');
      }
    }
    // Si ingrese frase me dirige a la funcion deCipher
    alert(decipher(phrase, 33));
    option = 0;
    phrase = '';
  } else { // en la siguiente vuelta inicia con opcion para que recorra todo de nuevo
    option === 0;
  }
}

// variable donde estara almacenado temporalmente el nuevo numero ascii encriptado
var codAsciiEncrypted = 0;
// crear una función de cifrado(Cipher)
function cipher(phrCase, space) {
  // variable donde se almacenara la frase encriptada
  var phraseCipher = '';
  // Recorreremos cada letra de la frase
  for (var i = 0; i < phrase.length; i++) {
    // Convertiremos y alamacenamos cada letra de la frase ingresada a código Ascci
    var convertLettertoAscii = phrase.charCodeAt(i);
    // Condicionamos para que la frase almacenada este en el rango de numeros ASCII y no de otros
    if (convertLettertoAscii > 64 || convertLettertoAscii < 33) {
      // Validaremos si cada letra de la frase es mayúscula o minúscula
      if (phrase.charAt(i) === phrase.charAt(i).toUpperCase()) {
        // Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
        // codAsciiEncrypted: Guardamos el código ascii encriptado
        codAsciiEncrypted = (convertLettertoAscii - 65 + space) % 26 + 65;
      } else {
        // Si la letra es minúscula Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
        // codAsciiEncrypted: Guardamos el código ascii encriptado
        codAsciiEncrypted = (convertLettertoAscii - 97 + space) % 26 + 97;
      }
      // valido si es hay un espacio y lo igualo con su respectivo ASCII
      if (convertLettertoAscii === 32) {
        codAsciiEncrypted = 32;
      }
      // Convertiremos "codAsciiEncrypted" a letra
      var asciitoLetter = String.fromCharCode(codAsciiEncrypted);
      // Una vez obtenido las nuevas letras encriptadas guardaremos en una nueva variable "phraseCipher" (concatenamos con += ya que son cadenas)
      phraseCipher += asciitoLetter;
    } else {
      // Si la frase ingresada contiene numeros enviar un alert
      return 'La frase ingresada contiene números';
    }
  }
  // Por ultimo retornamos la nueva frase encriptada
  return 'La frase cifrada es: \n' + phraseCipher;
}
// cipher(phrase, 33);
// console.log(cipher(phrase,33));

// CREAMOS LA FUNCION DECIPHER como parametro llamaremos a phrasecipher para poder manipular
function decipher(phraseCipher, space) {
// Variable que almacenara la nueva frase decencriptada
  var phraseDecipher = '';
  // convertimos la letra a codigo ascii segun el indice especificado
  for (var i = 0; i < phraseCipher.length; i++) {
    // En la variable convertLettertoAscii se almacenara los codigos Ascii segun va iterando
    var convertLettertoAscii = phraseCipher.charCodeAt(i);
    // Validaremos si cada letra de la frase es mayúscula o minúscula
    if (convertLettertoAscii > 64 || convertLettertoAscii < 33) {
      if (phraseCipher.charAt(i) === phraseCipher.charAt(i).toUpperCase()) {
        // //Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
        // newCod = Almacenara el codigo ascii encriptado
        codAsciiEncrypted = (convertLettertoAscii + 65 - space) % 26 + 65;
      } else {
        // Si la letra es minúscula Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
        // codAsciiEncrypted: Guardamos el código ascii encriptado
        codAsciiEncrypted = (convertLettertoAscii + 85 - space) % 26 + 97;
      }
      // valido si es un espacio y lo convierto a espacio ASCII
      if (convertLettertoAscii === 32) {
        codAsciiEncrypted = 32;
      }
      // Convertiremos "codAsciiEncrypted=contiene el codigo Ascii encriptado" a letra
      var asciitoLetter = String.fromCharCode(codAsciiEncrypted);
      phraseDecipher += asciitoLetter;
    } else {
      // Si la frase ingresada contiene numeros enviar un alert
      return 'La frase ingresada contiene números';
    }
  }
  // Por ultimo retornamos la nueva frase encriptada
  return 'La frase decifrada es: \n' + phraseDecipher;
}
// decipher(phrase, 33);
