function cipher() {
  /*  preguntamos al usuario por la frase a ser usada */
  var inquiry = prompt('Introduzca las palabras a ser cifradas');
  while (inquiry === '') {
    /*  mientras el usuario deje su respuesta en vacio se le seguirá preguntando por la frase a ser usada */
    inquiry = prompt(
      'Dejó el campo vacío, introduzca las palabras a ser cifrada por favor');
  }

  /*  empieza un ciclo para recorrer indice por indice la frase introducida */
  for (var i = 0; i < inquiry.length; i++) {
    /*  condicionamos el recorrido del ciclo a que si encuentra número este se detenga y vuelva a preguntar por la frase a ser usada  */
    if (parseInt(inquiry[i]) % 1 === 0) {
      inquiry = prompt('Introduza las palabras con solo letras por favor');
      while (inquiry === '') {
        /*  condicionamos este ciclo a que si el usuario deja su respuesta vacia se le seguirá preguntando por la frase */
        inquiry = prompt('Dejó el campo vacío, por favor introduzca las palabras a ser cifradas');
      }
    }
  }
  /*  pasamos a mayúsculas la frase que nos brindó el usuario  */
  var phrase = inquiry.toUpperCase();

  var str = '';

  for (var j = 0; j < phrase.length; j++) {
    /*  hacemos una condición para los espacios entre las palabras de la frase  */
    if (phrase[j] === ' ') {
      str += ' ';
    } else
      /*  aplicamos la formula del codigo cesar y sumamos lo elementos ya convertidos a las letras cifradas al string vacio y con espacios  */
      str += String.fromCharCode((phrase.charCodeAt(j) - 65 + 33) % 26 + 65);
  }
  /*  retornamos el string que contiene las letras cifradas */
  return str;
}


/*  creamos ahora una funcion para descifrar lo ya cifrado. Vamos a enlazarlas a pedido del cliente */
function decipher(str) {
  /* declaramos un string vacio */
  var str2 = '';
  /* recorremos el string del cifrado de la funcion cipher para descifrarlo  */
  for (var k = 0; k < str.length;k++) {
    /* si nos encontramos con un espacio en blanco en la frase  */
    if (str[k] === ' ') {
      /* igual quedara en blanco en el string donde colocaremos el descrifrado */
      str2 += ' ';
    }
     
    else
    /* colocamos el descifrado del string ya cifrado de la funcion cipher. Aplicamos la formula */
      str2 += String.fromCharCode((str.charCodeAt(k) + 65 - 33) % 26 + 65);
  } 
  /* devolvemos el resultado del cifrado mediante un alert y el descifrado escrito en la pagina web  */
  alert('cifrado ' + str);
  document.write('descifrado ' + str2);
}
/*  invocamos a decipher con cipher */
decipher(cipher());

