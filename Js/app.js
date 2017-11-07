var election = prompt('Elija una de las opciones de cifrado: ' + '1 cifrar ' + '2 decifrar');
if (election === '1') {
  cipher(prompt('Ingresa un texto a cifrar'));    
} else if (election === '2') {
  decipher(prompt('Ingresa un texto a decifrar'));
} else if (election === '') {
  alert('No es valido un campo vacio');
}

function cipher(string) {
  if (string === '') {
    alert('No se permiten campos vacios.');
  }
  var StringCode = '';
    
  for (i = 0; i < string.length; i++) {
    var newASCII = string.charCodeAt(i);//  devolvera el numero de i en codigos Unicode ASCII
    // MAYUSCULAS....
    if (newASCII >= 65 && newASCII <= 90) {// Rango para solo las mayusculas
      var anAletter = (newASCII - 65 + 33) % 26 + 65;// devuelve el valor/numero del codigo ASCII pero al ser rango de 65 a 90 esta pertenece a MAYUSCULAS.
      var newletterAlpha = String.fromCharCode(anAletter);// obtiene el valor numero de anAletter y con el fromCharCode imprime la letra.
      StringCode += newletterAlpha;// une letra por letra dentro del StringCode.
      // MINUSCULAS.....
    } else if (newASCII >= 97 && newASCII <= 122) { // en caso contrario si es minuscula entrara en el rango de 97 - 122
    // dentro del rango ASCII     
    // en este caso la formula cambia ya que estamos agarrando el rango desde 97.
      var minusLetter = (newASCII - 97 + 33) % 26 + 97;
      var newMinusLetter = String.fromCharCode(minusLetter);
      StringCode += newMinusLetter;
    }
  }
  // retorna StringCode para solo imprimir el resultado de este punto, para el cifrado.
  return alert(StringCode);
}

function decipher(string) {
  if (string === '') {
    alert('No se permiten campos vacios.');
  }
  var StringCode = '';
    
  for (i = 0 ; i < string.length; i++) {
    var newASCII = string.charCodeAt(i); 

    if (newASCII >= 65 && newASCII <= 90) { 
      var anAletter = (newASCII + 65 - 33) % 26 - 65; 
      var newletterAlpha = String.fromCharCode(anAletter); 
      StringCode += newletterAlpha; 
    } else if (newASCII >= 97 && newASCII <= 122) { 
      var minusLetter =  (newASCII + 97 - 33) % 26 - 97;
      var newMinusLetter = String.fromCharCode(minusLetter);
      StringCode += newMinusLetter; 
    }
  }
  return alert(StringCode); 
}
