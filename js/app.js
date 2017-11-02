function executeCaesar(){ //Creamos función que determina si ejecuta función cipher o función descipher
  var userAnswer; //Declaramos variable userAnswer para almacenar respuesta del usuario

  do { //Utilizamos bucle do while para que el prompt se ejecute primero al menos una vez
    userAnswer = prompt("Ingrese 1 si desea cifrar o 2 si desea descifrar"); //La respuesta al prompt se asignará como valor de userAnswer
    if (userAnswer !== ""){ //Si se cumple condición (userAnswer no es cadena vacía) entonces...
      if (userAnswer == "1"){ //Si userAnswer es 1
        cipher(); //Se ejecuta función cipher
      } else if (userAnswer == "2"){ //Si user no es 1, pero es 2
        descipher (); //Se ejecuta función descipher
      } else { //Si userAnswer no es ninguna de las anteriores
        alert ("Opción no válida. Inténtalo de nuevo."); //Devolverá este alert
      }
    }
  } while (userAnswer === "" || (userAnswer != "1" && userAnswer != "2"));
    //Siempre que userAnswer sea una cadena vacía o un número diferente a 1 o 2 devolverá de nuevo el prompt inicial
}

var cipher = function(userPhrase){ //Definimos función cipher para cifrar una frase (opción 1)
  do {
    userPhrase = prompt ("Por favor ingrese una frase:"); //Asignamos la respuesta de prompt como valor de userPhrase
    var newCipherPhrase = ""; //Creamos variable cuyo valor es una cadena vacía que posteriormente almanecenará la frase cifrada

    for (var i = 0; i < userPhrase.length; i++){ //Recorremos toda la frase ingresada
      var toCipher = userPhrase[i]; //Creamos variable que identifique el caracter a cifrar
      var toAscci = userPhrase.charCodeAt[i]; //Buscamos el código ASCII de ese caracter

      if ((toAscci >= 65) && (toAscci <= 90)){ // Si son mayúsculas
        toCipher = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);
      } else if ((toAscci >= 97) && (toAscci <= 122)){ //Si son minúsculas
        toCipher = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
      } else {
      alert("Por favor ingresa un texto válido.");
      }
      newCipherPhrase += toCipher; //Creamos la nueva cadena
      return alert(newCipherPhrase); //Función devuelve un alert con el mensaje cifrado
    }
  } while ((userPhrase.charAt(i) >= "a") && userPhrase.charAt(i) <= "z");
}

var descipher = function(userPhrase{
  
})

// FALTA COMPLETAR :(
