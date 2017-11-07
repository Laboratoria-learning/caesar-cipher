var input = prompt('Escriba su frase');
// Creando la funcion
function cipher(text, number) {
// creando la variable result
  var result = '';
  // recorriendo el parametro text
  for (var i = 0;i < text.length;i++) {
  // variable que contendra los numeros ASCII
    var letter = text.charCodeAt(i);
    // dando la condicion si la variable letter esta en el rango de mayusculas
    if (65 <= letter && letter <= 90) {
      result += String.fromCharCode(((letter - 65 + number) % 26) + 65);
    } else if (97 <= letter && letter <= 122) {
    // aplicando la formula que devuelva la letra encriptada en minusculas
      result += String.fromCharCode(((letter - 97 + number) % 26) + 97);
    } else {
      result = alert('Ingresar solo letras');
    }
  }
  // retornando la frase cifrada
  return result;
}
// usando la funcion
var output = (cipher(input, 33));
alert('Su cifrado es: ' + output);

var inputd = prompt('Escriba su frase a descifrar');
// Creando la funcion descifrado
function decipher(text, number) {
// creando la variable result que contendra la frase original
  var result = '';
  // recorriendo las posiciones de text
  for (var i = 0;i < text.length;i++) {
  // recorriendo las posiciones de text
    var letter = text.charCodeAt(i);
    // creando la condicion de mayusculas
    if (65 <= letter && letter <= 90) {
    // aplicando la formula para devolver letra original en mayusculas
      result += String.fromCharCode((letter - number) + 26);
    } else if (97 <= letter && letter <= 122) {
    // aplicando la formula para devolver la letra original en minusculas
      result += String.fromCharCode((letter - number) + 26);
    } else {
      result = alert('Ingresar solo letras');
    }
  }
  // retornando el texto original
  return result;
}
var outputd = (decipher(inputd, 33));
alert('Su frase es: ' + outputd);
