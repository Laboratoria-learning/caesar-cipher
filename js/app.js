// funcion para cifrar una cadena de texto
function cipher(myString) {
  var myStringCipher = ''; // almacenar el valor del string Cifrado

  for (var i = 0 ; i < myString.length ; i++) { // recorrer el string del usuario
    var numberOfTheLetter = myString.charCodeAt(i); // numero de la letra en el codigo ASCII
    var cipherFormula; // almacena fórmula de cifrado que se utiliza
    var theNewLetter; // alamacena valor de la nueva letra cifrada
    if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // valor UNICODE de letras mayúsculas en ASCII
      cipherFormula = (numberOfTheLetter - 65 + 33) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
      theNewLetter = String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
      myStringCipher += theNewLetter; // formar el string cifrado
    } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) { // valor UNICODE de letras minúsculas en ASCII
      cipherFormula = (numberOfTheLetter - 97 + 33) % 26 + 97; // fórmula de cifrado Cesar
      theNewLetter = String.fromCharCode(cipherFormula); // valor de letra cifrada
      myStringCipher += theNewLetter; // formar el string cifrado
    } else if (numberOfTheLetter === 32) { // verificar si es un espacio vacio
      myStringCipher += ' '; // añadir espacio en string cifrado
    } else {
      break; // Si no es una letra detente
    }
  }
  return myStringCipher; // Retorna el valor de la cadena cifrada
}

// funcion para descifrar una cadena de texto
function decipher(myString) {
  var myStringDechiper = ''; // alamacenar el valor del string decifrado
  for (var i = 0; i < myString.length ; i++) { // recorrer el string del usuario
    var numberOfTheLetter = myString.charCodeAt(i); // valor UNICODE de la letra en el código ASCII
    var decipherFormula; // almacena fórmula de decifrado
    var theNewLetter; // almacena el nuevo valor de la letra decifrada
    if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // saber si la letra está en mayúscula
      decipherFormula = (numberOfTheLetter - 13 - 33) % 26 + 65; // formula para descifrar
      theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
      myStringDechiper += theNewLetter; // formar la cadena descifrada
    } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) { // saber si la letra está en minúscula
      decipherFormula = (numberOfTheLetter - 45 - 33) % 26 + 97; // formula para descifrar
      theNewLetter = String.fromCharCode(decipherFormula); // obtener el valor de la letra descifrada
      myStringDechiper += theNewLetter; // formar la cadena descifrada
    } else if (numberOfTheLetter === 32) { // verificar si es un espacio vacio
      myStringDechiper += ' '; // añadir un espacio en string decifrado
    } else {
      break;
    }
  }
  return myStringDechiper; // retornar el valor de la cadena decifrada
}

// fuction para saber que desea realizar el usuario
function dataUser(option) {
  var userText; // almacenar el texto que el usuario ingreso.
  var verification; // verificar que  inicie con letras

  switch (true) {
  case (option === '1'):
    userText = prompt('¿Qué texto desea cifrar? (Por favor ingresar un texto)');
    verification = parseInt(userText); // parsear para verificar que una cadena de texto
    // Si la cadena inicia con números volver a pedir un texto para cifrar
    while (verification >= 0 || verification <= 0 || userText === '') {
      userText = prompt('¿Qué texto desea cifrar? (Por favor ingresar un texto)');
      verification = parseInt(userText); // seguir parseando el string hasta que no inicie con números
    }
    alert(cipher(userText)); // mostrar un alert que invoque a la función cipher y retorne el texto cifrado
    break;

  case (option === '2'):
    userText = prompt('¿Qué texto desea descifrar? (Por favor ingresar un texto)');
    verification = parseInt(userText); // parsear para verificar que una cadena de texto
    // Si la cadena inicia con números volver a pedir un texto para decifrar
    while (verification >= 0 || verification <= 0 || userText === '') {
      userText = prompt('¿Qué texto desea decifrar? (Por favor ingresar un texto)');
      verification = parseInt(userText); // seguir parseando el string hasta que no inicie con números
    }
    alert(decipher(userText)); //  mostrar un alert que invoque a la función decipher y retorne el texto decifrado
    break;
  }
}

// bucle para ver que desea realizar el usuario
do {
  var menu = 'Por favor escribir 1 si desea cifrar un texto \n Por favor escribir 2 si desea descifrar un texto \n Por favor escribir 3 si desea salir del sistema';
  var option = prompt(menu); // mostrar el menu al usuario y alamcenar la opción que elije
  dataUser(option);
} while (option !== '3'); // seguir preguntadole hasta que desee salir del programa
