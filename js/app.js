// declaro variable mediante un prompt mostrará al usuario un pequeño menu
do {
  var strMen = parseInt(prompt('Menú' + '\n1.- Cifrar' + '\n2.- Descifrar' + '\n3.- Salir'));
  // de acuerdo a la opcion elegida
  switch (strMenu) {
  // en caso sea opcion 1 del menú--Encriptará el texto
  case 1:
  {
  // declaramos una variable y solicitamos al usuario ingresar un texto mediante un prompt
    var text = prompt('Ingrese texto a Cifrar: ');
    // escribimos el texto original
    document.write('Texto original:' + text);
    // salto de linea
    document.write('<br></br>');
    // escribimos el texto codificado
    document.write('Texto codificado:' + cipher(text));
    // cipher(text);}
    break;
  }
  // en caso sea opcion 2 del menú--Desencriptará  el texto
  case 2:
  {
    // declaramos una variable y solicitamos al usuario ingresar un texto mediante un prompt
    var text = prompt('Ingrese texto a Descifrar:');
    // escribimos el texto original
    document.write('Texto original:' + text);
    // salto de linea
    document.write('<br></br>');
    // escribimos el texto codificado
    document.write('Texto codificado:' + decipher(text));
    decipher(text);
    break;
  }
  }
} while (srtMenu !== 3);
function cipher(text) {
  // declaro la variable que almacenará el texto encriptado
  var encrypt = '';
  // recorro cada caracter del texto
  for (var i = 0;i < text.length;i++) {
    // declaro variable x para almacenar el numero de la letra ascii
    var x = text.charCodeAt(i);
    // declaro variable para obtener la formula del cifrado cesar
    var code = (x - 65 + 33) % 26 + 65;
    // acumulo en la variable la letra cifrada
    encrypt += String.fromCharCode(code);
  }
  // retorno el texto cifrado
  return encrypt;
}
function decipher(text) {
  // declaro la variable que almacenará el texto desencriptado
  var decoded = '';
  // recorro cada caracter del texto
  for (var i = 0;i < text.length;i++) {
    // declaro variable x para almacenar el numero de la letra ascii
    var x = text.charCodeAt(i);
    // declaro variable para obtener la formula del cifrado cesar
    var code = (x + 65 - 33) % 26 + 65;
    // acumulo en la variable la letra descifrada
    decoded += String.fromCharCode(code);
  }
  // retorno el texto descifrado
  return decoded;
}
