// Funcion para cifrar la palabra
function cipher(word) {
  // variable para la salida de la palabra encriptada
  var output = '';
  // recorrido dentro de la palabra ingresada
  for (i = 0; i < word.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    var code = word.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    var code2 = word[i];
    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65);
      // analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
    } else if ((code >= 97) && (code <= 122)) {
      code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
  }
  return output;
}
// entrada de la frase a encriptar
do {
  var word = prompt('Escribir el texto a encriptar');
  cipher(word);
} while (word.length <= 1);// no recibe numero, ni campo vacio ya que su longitud es menor a 1
// mensaje del resultado
alert((cipher(word)));


// Funcion para decifrar la palabra
function decipher(word) {
  // variable para la salida de la palabra encriptada
  var output = '';
  // recorrido dentro de la palabra ingresada
  for (i = 0; i < word.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
    var code = word.charCodeAt(i);
    // variable que guarda la conversion de codigo ascii a letra
    var code2 = word[i];
    // analizando las letras mayusculas A= 65 Y Z= 90
    if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
      code2 = String.fromCharCode(((code - 65 - 33) % 26) + 65);
    } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
      code2 = String.fromCharCode(((code - 97 - 33) % 26) + 97);
    }
    // salida de la palabra encriptada
    output += code2;
  }
  return output;
}
// entrada de la frase a encriptar
do {
  var word = prompt('Escribir el texto a descifrar');
  cipher(word);
} while (word.length <= 1);// no recibe numero, ni campo vacio ya que su longitud es menor a 1
// mensaje del resultado
alert((decipher(word)));
