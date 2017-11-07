// Crear una funcion llamada cipher que cifre el texto ingresado//
function cipher() {
  var texto = prompt('Ingrese un texto');
  var cifrado = '';
  // el for recorrera las letras del texto a cifrar//
  for (var i = 0; i < texto.length; i++) {
    if (parseInt(texto[i]) % 1 === 0) // condicionar para no ingresar numeros//
      texto = prompt('Por favor ingrese un texto sin numeros ni espacios');

    var ubicacionCesar = (texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;
    var palabraCifrada = String.fromCharCode(ubicacionCesar);
    cifrado += palabraCifrada; // acumular las letras cifradas//
  }
  return cifrado;
}
// Crear una funcion llamada decipher que descifre el texto ingresado //
function decipher(cifrado) {
  alert('Palabra Cifrada: ' + cifrado);
  var descifrado = '';

  // el for recorrera las letras del texto a descifrar//

  for (var j = 0; j < cifrado.length; j++) {
    var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
    var palabraDescifrada = String.fromCharCode(ubicacionDescifrado);
    // acumular las letras descifradas//
    descifrado += palabraDescifrada;
  }
  return descifrado;
}
decipher(cipher());
