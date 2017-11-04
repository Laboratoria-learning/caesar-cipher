var data = prompt('Ingrese una frase');

// Creamos la variable cipher
function cipher(frase) {
  var ascii = 0;
  var str = '';
  // creamos un for que recorra los valores de la frase ingresada
  for (var i = 0; i < frase.length; i++) {
    ascii = frase.charCodeAt(i);
    // A la variable ascii le aplicamos charCodeAt para
    // que pueda transformar el string a Ascii
    var form = (ascii - 65 + 33) % 26 + 65;
    var formMin = (ascii - 97 + 33) % 26 + 97;
    if (frase !== undefined && isNaN(frase) !== false) {
    // If me permite indicar que si los valores NO son vacios
    // o undefined retornara la condición
      if (ascii >= 65 & ascii <= 90) {
        str = str + String.fromCharCode(form);

      // Este if me permite recorrer a las mayusculas
      } else if (ascii >= 97 & ascii <= 122) {
        str = str + String.fromCharCode(formMin);
      } // Este if me permite recorrer a las minuscula
    } else {
      return undefined;
    }
  } return str;
  // Se retorna el valor seleccionado de acuerdo a minuscula
// o minuscula en el código Ascii
}
