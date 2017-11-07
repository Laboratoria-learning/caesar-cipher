// Creamos una función para cifrar cualquier palabra o frase
function cipher() {
// Creamos una variable input que almacene los datos que ingresan por medio de prompt
  var input = prompt('Ingrese una frase:');
  // Creamos una variable que tenga números ya que en el enunciado nos piden que no ingresen numeros y esto  nos va a servir como referencia
  var num = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  // Creamos una condicional para el caso de dejar espacio te reite que debes ingresar contenido
  while (input === '') {
    input = prompt('Ingrese una frase:');
    // Despues creamos un ciclo para que pase por cada dato de la variable
    for (var j = 0; j < input.length; j++) {
    // La condicional que creamos es para verificar que el dato que se ingresa no es ningun número
      while (input[j] === num) {
      // Una vez verificado que cumple con todas las condiciones se almacena el dato correcto en la variable input
        input = prompt('Ingrese una frase pero sin numeros:');
      }
    }
  }
  // Creamos la variable de salida que por el momento esta vacia
  var output = '';
  // Creamos una nueva variable que almacene los datos que ingresamos pero modificado a mayusculas
  var input1 = input.toUpperCase();
  // Por medio de un ciclo recorremos cada dato de la nueva variable
  for (var i = 0; i < input1.length; i++) {
    // Por medio de la condicion de if verificamos que si el contenido ingresado contiene espacios
    if (input1[i] === ' ') {
      // se respete y se ingrese este tambien
      output += ' ';
      // de lo contrario se lee normal y se le agrega a la variable output el valor cifrado utilizando los dos metodos de ASCII input1.charCodeAt(k) te brinda la posicion de la letra en el codigo ASCII Y String.fromCharCode() te brinda la letra en la posicion dada en codigo ASCII
    } else {
      output += String.fromCharCode((input1.charCodeAt(k) - 65 + 33) % 26 + 65);
    }
  }
  // Muestro en pantalla la frase cifrada
  alert(output);
}
// Creamos la funcion de decifrado
function decipher() {
  // La variable input2 es para almacenar el dato de la palabra o frase que queremos decifrar
  var input2 = prompt('Ingrese la frase que desea decifrar:');
  // Creamos otra variable de salida donde este vacia por momento porque queremos ingresar los datos que obtendremos mas adelante
  var output1 = '';
  // Creamos un ciclo para que recorra cada dato de la variable input2
  for (var i = 0; i < input2.length; i++) {
    // Por medio de una condicional que en este caso es if preguntamos si if es igual a un espacio vacio
    if (input2[i] === ' ') {
      // Entonces agregamos un espacio vacio a la variable input2
      output1 += ' ';
      // De no tener espacios la palabra pasa tal y como esta, despues por medio de estas dos metodos del codigo ASCII se reemplaza la letra cifrada por las decifradas
    } else {
      output1 += String.fromCharCode((input2.charCodeAt(i) + 65 - 33) % 26 + 65);
    }
  }
  // Mostramos en pantalla la frase descifrada
  alert(output1);
}
// Llamamos a las funciones
decipher(cipher());
