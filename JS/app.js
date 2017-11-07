function cipher(key) {
  do {
    // creo una nueva variable word, que resulta un prompt en donde ingreso la palabra.
    var word = prompt('Ingrese texto');
    // mientras sea un número o no escriba nada el prompt seguirá apareciendo
  }
  while (word.length === 0 || !isNaN(word));
  // creo una variable vacía para ir almacenando caracteres
  var text = '';
  // creo otra variable con los caracteres a los cuales el código no reconoce
  var exception = /[ñ #áéíóúääëïöüàèìòù_@$]/;

  // recorro cada letra ingresada
  for (var i = 0; i < word.length; i++) {
    // si es que cumple, la letra se almacena en la variable exception
    if (exception.test(word.charAt(i))) {
      text += word.charAt(i);
      // si no se encuentra un caracter especial, este módulo intercambia las letra por las del código ascci
    } else {
      text += String.fromCharCode(97 + (word.charCodeAt(i) + 7 + key) % 26);
    }
  }
  // retorna el texto
  return text;
}
// este es el número de espacios que quiero que mi código emplee esta vez
document.write(cipher(33));
