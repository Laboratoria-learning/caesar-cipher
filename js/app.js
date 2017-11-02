// creando una funcion para encriptar la frase ingresada
function encrypt() {
  // Ingresando frase a encriptar
  var phrase = document.getElementById('frase').value;
  // Declarando variables
  var encrypting = '';
  // recorriendo la frase con la sentencia For
  for (var i = 0;i < phrase.length;i++) {
    // declaro variable storeNumber para almacenar el numero de la letra ascii
    var storeNumber = phrase.charCodeAt(i);
    // declaro la variable value y calculamos el valor de la operacion hallada por la formula del cifrado cesar
    var value = (storeNumber - 65 + 33) % 26 + 65;
    // acumulo en la variable encrypting la letra cifrada
    encrypting += String.fromCharCode(value);
  }
  // retorno la frase desencriptada
  document.write('frase encriptada:' + encrypting);
}

function decrypting() {
  var phrase = document.getElementById('frase').value;
  // declaro la variable que almacenará la frase desencriptado
  var decrypt = '';
  // recorro cada caracter la frase
  for (var i = 0;i < phrase.length;i++) {
    // declaro variable storeNumber para almacenar el numero de la letra ascii
    var storeNumber = phrase.charCodeAt(i);
    // declaro variable value para obtener la formula del cifrado cesar
    var value = (storeNumber + 65 - 33) % 26 + 65;
    // acumulo en la variable decrypt la letra desencriptada
    decrypt += String.fromCharCode(value);
  }
  // retorno la frase desencriptado
  document.write('frase desencriptada:' + decrypt);
}
