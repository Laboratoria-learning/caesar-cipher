// Creamos las funciones de CIPHER y DECIPHER:
function cipher(phrase) {
  var output = '';
  var texto = phrase.toUpperCase();

  // Bucle que recorra la variable texto:
  for (var i = 0; i < texto.length; i++) {
    // Aplicamos el Cifrado César y conversion ASCII:
    output += String.fromCharCode((((texto.charCodeAt(i) - 65) + 33) % 26) + 65);
  }

  // Cuando se llame la función, retornará la variable output:
  return output;
}

function decipher(phrase) {
  var output = '';
  var texto = phrase.toUpperCase();

  // Bucle que recorra la variable texto:
  for (var i = 0; i < texto.length; i++) {
    // Aplicamos el Cifrado César y conversion ASCII al contrario de la funcion Cipher:
    output += String.fromCharCode((((texto.charCodeAt(i) + 65) - 33) % 26) + 65);
  }

  // Cuando se llame la función, retornará la variable output:
  return output;
}

// Por medio de 'prompt' le pedimos al usuario que ingrese un frase:
var order = (prompt('Ingrese una frase: ')).toUpperCase();

// Condicional para que no puedan dejar el prompt vacio:
if (order !== '') {
  // Bucle que recorra la variable order:
  for (var j = 0; j < order.length; j++) {
    // Condicional para que no ingresen campos vacios:
    if (order[j] === ' ') {
      spaces = true;
      break; // Para que cuando spaces sea true, salga del bucle.
    } else {
      spaces = false;
    }
  }

  // Mensaje si ha ingresado espacios:
  if (spaces === true) {
    alert('No ingrese campos en blanco');
  } else {
    // Bucle que recorra la variable order:
    for (var re = 0; re < order.length; re++) {
      // Condicional para que no se pueda ingresar numeros:
      if (order.charCodeAt(re) >= 65 && order.charCodeAt(re) <= 90) {
        var value = true;
      } else {
        var value = false;
        break; // Para que cuando value sea true, salga del bucle.
      }
    }

    // Condicional si ha ingresado solo letras sin numeros:
    if (value === true) {
      // Llamamos a las funciones:
      document.write('CIFRADO   ->    ' + cipher(order));
      document.write('<p> DESCIFRADO   ->    ' + decipher(cipher(order)));
    }

    // Mensaje si ha ingresado numeros:
    if (value === false) {
      alert('Ingrese solo letras');
    }
  }

  // Mensaje si no ingreso nada en el prompt: 
} else {
  alert('Ingrese una frase');
}