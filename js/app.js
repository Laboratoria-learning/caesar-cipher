var input = prompt('Escriba su frase');
// Creando la funcion
function cipher(text, number) {
// creando la variable result
  var result = '';
  // recorriendo el parametro text
  for (var i = 0;i < text.length;i++) {
  // variable que contendra los numeros ASCII
    var k = text.charCodeAt(i);
    // dando la condicion si la variable k esta en el rango de mayusculas
    if (65 <= k && k <= 90) {
      result += String.fromCharCode(((k - 65 + number) % 26) + 65);
    }
    // Dando la condicion la variable k pertenece a minusculas
    else if (97 <= k && k <= 122) {
    // aplicando la formula que devuelva la letra encriptada en minusculas
      result += String.fromCharCode(((k - 97 + number) % 26) + 97);
    }
    // si no es una letra devuelve una alerta
    else {
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
    var k = text.charCodeAt(i);
    // creando la condicion de mayusculas
    if (65 <= k && k <= 90) {
    // aplicando la formula para devolver letra original en mayusculas
      result += String.fromCharCode((k - number) + 26);
    }
    // (72-33)%26-no da el valor esperado/(73-33)+26/(74-33)+26 probando + en vez de %- si da la letra original :)

    // creando la condicion para minusculas
    else if (97 <= k && k <= 122) {
    // aplicando la formula para devolver la letra original en minusculas
      result += String.fromCharCode((k - number) + 26);
    }
    // de lo contrario enviar una alerta
    else {
      result = alert('Ingresar solo letras');
    }
  }
  // retornando el texto original
  return result;
}
var outputd = (decipher(inputd, 33));
alert('Su frase es: ' + outputd);
