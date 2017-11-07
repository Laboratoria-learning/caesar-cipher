function ejCifradoCesar() {
  do {
    var respuestaUsuario = prompt('Ingresa: \n 1 Si quieres cifrar \n 2 Si quieres descifrar');
    if (respuestaUsuario !== '') {
      if (respuestaUsuario === '1') {
        cifrar();
      } else if (respuestaUsuario === '2') {
        descifrar();
      } else {
        alert('La opción ingresada no es Válida. Intentalo nuevamente.');
      }
    }
  } while (respuestaUsuario === '' || (respuestaUsuario !== '1' && respuestaUsuario !== '2'));
}

var cifrar = function(ingresaPalabra) {
  do {
    ingresaPalabra = prompt('Ingresa la palabra que quieres cifrar:');

    var cifrado = '';

    if (/^[a-zA-Z]*$/.test(ingresaPalabra)) {
      for (var i = 0; i < ingresaPalabra.length; i ++) {
        var aCifrar = ingresaPalabra[i];
        if (aCifrar.match(/[a-z]/i)) {
          var toAscci = ingresaPalabra.charCodeAt(i);
          if ((toAscci >= 65) && (toAscci <= 90))
            aCifrar = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);
          else if ((toAscci >= 97) && (toAscci <= 122))
            aCifrar = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
        }
        cifrado += aCifrar;
      }
      return alert(cifrado);
    } else {
      alert('Ingresa un Texto Válido');
    }
  }
  while (ingresaPalabra === '' || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);
};

var descifrar = function(ingresaPalabra) {
  do {
    ingresaPalabra = prompt('Ingresa la palabra que quieres descifrar:');

    var descifrado = '';

    if (/^[a-zA-Z]*$/.test(ingresaPalabra)) {
      for (var i = 0; i < ingresaPalabra.length; i ++) {
        var aDescifrar = ingresaPalabra[i];
        if (aDescifrar.match(/[a-z]/i)) {
          var toAscci = ingresaPalabra.charCodeAt(i);
          if ((toAscci >= 65) && (toAscci <= 90))
            aDescifrar = String.fromCharCode(((toAscci - 65 - 7 + 52) % 26) + 65);
          else if ((toAscci >= 97) && (toAscci <= 122))
            aDescifrar = String.fromCharCode(((toAscci - 97 - 7 + 52) % 26) + 97);
        }
        descifrado += aDescifrar;
      }
      return alert(descifrado);
    } else {
      alert('Ingresa un Texto Válido');
    }
} while (ingresaPalabra === '' || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);
}
ejCifradoCesar();
