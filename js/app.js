// Pedimos al usuario la acción que desea realizar.
function welcome(option) {
  do {
    var valid = /^[A-z\s]*$/; // Validamos si el texto corresponde solo a letras.
    var answer = prompt('Ingrese el texto que desea cifrar o descifrar');
    if (valid.test(answer) === false) { // Si el cliente no usa letras sólo de la A-z un alert le avisará.
      alert('Ingrese solo letras de la A a la Z');
    }
  } while (answer === '' || valid.test(answer) === false || answer === null); // Si está vacío, o no es de A-z le avisa y le vuelve a preguntar.
	
	
  do {
    var answer1 = prompt('Ingresa el número de lo que quieres hacer: 1) Cifrarlo o 2) Decifrarlo');
    if (answer1 !== '') {
      if (answer1 === '1') {
        cipher(); // Llama a la funcion cifrar.
      } else if (answer1 === '2') {
        decipher(); // Llama a la funcion decifrar.
      } else {
        alert('Ingrese una opción válida: 1 o 2');
      }
    }
  } while (answer1 === '' || (answer1 !== '1' && answer1 !== '2')); // Si está vacío, o no es '1' o '2' vuelve a preguntar.
	
	
  function cipher() { // Función que cifra o codifica un texto.
    var arr = []; // Guardamos  las letras codificadas.
    for (var i = 0; i < answer.length; i++) {
      var convertLetter = answer.charCodeAt(i); // Obtenemos el número equivalente en ASCII.
	
      if (convertLetter >= 65 && convertLetter <= 90) { // Si es mayúsculas continuará asi
        var newNumber = (convertLetter - 65 + 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        var newLetter = String.fromCharCode(newNumber); // El número equivalente lo traduce a letra.
        arr.push(newLetter); // Esto pushea la letra mayúscula codificada al array 'arr'.
      }
      if (convertLetter >= 97 && convertLetter <= 122) { // Si es minúscula continuará asi.
        var newNumber2 = (convertLetter - 97 + 33) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        var newLetter2 = String.fromCharCode(newNumber2); // El número equivalente lo traduce a letra.
        arr.push(newLetter2); // Esto pushea la letra minúscula codificada al array 'arr'.
      }
      if (convertLetter === 32) { // Si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        arr.push(' '); // Esto pushea el espacio codificado al array 'arr'.
      }
    }
    return alert('Tu texto cifrado es: ' + arr.join('')); // Devuelve una alerta con el array transformado a string. Es la palabra cifrada.
  }
	
	
  function decipher() { // Función que decodifica o decifra un texto.
    var arr = []; // Guardamos  las letras decodificadas.
    for (var j = 0; j < answer.length; j++) {
      var convertLetter = answer.charCodeAt(j); // Obtenemos el número equivalente en ASCII
      if (convertLetter >= 65 && convertLetter <= 90) { // Si es mayúscula continuará asi.
        var newNumber3 = (convertLetter - 65 - 33 + 2 * 26) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        var newLetter3 = String.fromCharCode(newNumber3); // El número equivalente lo traduce a letra.
        arr.push(newLetter3); // Esto pushea la letra mayúscula codificada al array 'arr'
      }
      if (convertLetter >= 97 && convertLetter <= 122) { // Si es minúscula hace lo siguiente.
        var newNumber4 = (convertLetter - 97 - 33 + 2 * 26) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        var newLetter4 = String.fromCharCode(newNumber4); // El número equivalente lo traduce a letra.
        arr.push(newLetter4); // Esto pushea la letra minúscula codificada al array 'arr'
      }
      if (convertLetter === 32) { // si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        arr.push(' '); // Esto pushea el espacio codificado al array 'arr'
      }
    }
    return alert('Tu texto cifrado es: ' + arr.join('')); // Devuelve una alerta con el array transformado a string. Es la palabra decifrada.
  }
}
	
welcome(); // Llamamos a la funcion