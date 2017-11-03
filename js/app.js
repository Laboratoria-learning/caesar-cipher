// Pedimos una frase al usuario que quiera cifrar
// Creamos una funcion cipher la cual cifrara el texto
function cipher (text, n) { 
    // Creamos una variable result, donde se almacenara nuestro resultado en modo de string
    var result = " ";
    // Hacemos un bucle que pase elemento por elemento
    for (i = 0; i < text.length; i++) {
      // Creamos una variable letters para almacenar el codigo ASCII de cada caracter
      var letters = text.charCodeAt(i);
      // Creamos un algoritmo en el caso sean mayusculas
      if (65 <= letters && letters <=  90) {
        result += String.fromCharCode((letters - 65 + n) % 26 + 65);}  
      // Creamos un algoritmo en el caso sean minusculas
      else if (97 <= letters && letters <= 122){
        result += String.fromCharCode((letters - 97 + n) % 26 + 97);}  
      // Si el usuario no coloca letras mandar un alert
      else {
        alert ("Texto no valido");}
    }
    return result;
  }
  //Hacemos un prompt que sera el argumento para nuestra funcion para poder llamarla
  console.log (cipher (prompt ("Escriba una frase para cifrar"), 33));
  // Creamos una funcion decipher la cual descifrara el texto 
  function decipher (text, n) { 
    // Creamos una variable result, donde se almacenara nuestro resultado en modo de string
    var result = " ";
    // Hacemos un bucle que pase elemento por elemento
    for (var i = 0; i < text.length; i++) {
      // Creamos una variable letters para almacenar el codigo ASCII de cada caracter  
      var letters = text.charCodeAt(i);
      // Creamos un algoritmo en el caso sean mayusculas
      if (65 <= letters && letters <=  90) {
        result += String.fromCharCode((letters + 65 + n) % 26 + 65);}  
      // Creamos un algoritmo en el caso sean minusculas
      else if (97 <= letters && letters <= 122){
        result += String.fromCharCode((letters + 97 + n) % 26 + 97);}  
      // Si el usuario no coloca letras mandar un alert
      else {
        alert ("Texto no valido");}
      
    }
    return result;
  }
  //Hacemos un prompt que sera el argumento para nuestra funcion para poder llamarla
  console.log(decipher (prompt ("Escriba un texto para descifrar"))