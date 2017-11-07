
/* Creando la variable c inicializada en cero, que nos indica la cantidad de veces que ingresas la frase.*/
var quantity = 0;
/* Creando un bucle do-while para validar la frase ingresada.*/
do {
  /* Mientras c sea mayor que 0 entonces*/
  if (quantity > 0)
  /* Mostrar el mensaje 'Intenta otra vez'*/
    alert('Intenta otra vez');
  // incrementar en uno la variable c
  c++;
  // Creando una variable llamada text que almacena el valor que se ingresa en la prompt
  var text = prompt('Ingresa tu frase');
  // Mientras la variable text sea diferente de isNaN
}
while (!(isNaN(text)));

// Creando la función cipher con dos parametros
function cipher(text, number) {
  // Creando una variable encryptedText vacía, que va acumular cada letra cifrada.
  var encryptedText = '';
  // Creando un ciclo for para recorrer cada letra del texto
  for (var i = 0 ;i < text.length ;i++) {
    // Si la letra en la posicion i convertida en codigo ASCCI esta entre el intervalo de 65 y 90
    // indica que es mayuscula
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      // Acumula en la variable encryptedText  cada letra cifrada en mayúscula
      encryptedText += String.fromCharCode((text.charCodeAt(i) - 65 + number) % 26 + 65);
    /* Si la letra no esta en intervalo de 65 y 90 caso contrario está en el intervalo de 97 y 122
    nos indica que es una letra minúscula*/
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      // Se va acumulando en la variable encryptedText cada letra cifrada en minúscula
      encryptedText += String.fromCharCode((text.charCodeAt(i) - 97 + number) % 26 + 97);
      // Si la letra de la posicion i en código ASCII es exactamente igual a 32
    } else if (text.charCodeAt(i) === 32) {
      // En la variable encryptedText que es un acumulador guarda un espacio vacío.
      encryptedText += '';
    }
  }
  // Retornar la variable encryptedText
  return encryptedText;
}

/* Creando una funcion decipher con 2 parametros*/
function decipher(encryptedText, number) {
  // Creando una variable decryptText vacía, que va acumular cada letra decifrada.
  var decryptText = '';
  // Creando un ciclo for para recorrer cada letra del texto cifrado
  for (var j = 0;j < encryptedText.length ;j++) {
    // Si la letra cifrado en la posicion i convertida en codigo ASCCI esta entre el intervalo de 65 y 90
    // indica que es mayuscula
    if (encryptedText.charCodeAt(j) >= 65 && encryptedText.charCodeAt(j) <= 90) {
      // Acumula en la variable decryptText cada letra cifrada en mayúscula
      decryptText += String.fromCharCode((encryptedText.charCodeAt(j) + 65 - number) % 26 + 65);
      /* Si la letra no esta en intervalo de 65 y 90 caso contrario está en el intervalo de 97 y 122
        nos indica que es una letra minúscula*/
    } else if (encryptedText.charCodeAt(j) >= 97 && encryptedText.charCodeAt(j) <= 122) {
      // Se va acumulando en la variable decryptText cada letra decifrada en minúscula
      decryptText += String.fromCharCode((encryptedText.charCodeAt(j) + 97 + number) % 26 + 97);
      // Si la letra de la posicion i en código ASCII es exactamente igual a 32
    } else if (encryptedText.charCodeAt(j) === 32) {
      // En la variable decryptText que es un acumulador guarda un espacio vacío.
      decryptText += '';
    }
  }
  return decryptText;
}

document.write('La frase es :' + text + '<br>' + 'Tu frase cifrada es :  ' + cipher(text, 33) + '<br>' + 'Tu frase descifrada es : ' + decipher(cipher(text, 33), 33));
