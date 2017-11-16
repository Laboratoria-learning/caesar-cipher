function cipher(text) {  
  /* Pide la frase al usuario */
  text = prompt('Ingrese una frase');      
  
  if (text !== '' || text === 'isNumeric') {
    alert('Debe ingresar una frase');    
  } else { 
  /* Almacena el nuevo texto */
    var text1 = '';
    /* Recorre hasta la longitud del texto */
    for (i = 0; i < text.length; i++) {
      /* Para la variable letterCod se almacenará el número de esa posición */
      var letterCod = text.charCodeAt(i);

      /* condicionamos que letterCod esté entre los rangos de las mayúsculas y minúsculas de código ASCII */
      if ((letterCod >= 65 && letterCod <= 90) || (letterCod >= 97 && letterCod <= 122)) {
        /* Se aplica la fórmula para sacar el número que luego se pasará a cifrar */
        var num = (letterCod - 65 + 33) % 26 + 65;                   
        var converted = String.fromCharCode(num);    

        /* text1.push(converted); */
        text1 += converted;                
      } 
    } 
    return text1;
  }
}
cipher('');


function decipher(text) {
/* Pide la frase al usuario */
  text = prompt('Ingrese una frase');
  
  /* var text1 = []; */
  var text1 = '';

  if (text === '' || text === 'isNumeric') {
    alert('Debe ingresar una frase');      
  } else {
    /* Recorre hasta la longitud del texto */
    for (i = 0; i < text.length; i++) {
      /* Para la variable letterCod se almacenará el número de esa posición */
      var letterCod = text.charCodeAt(i);

      /* condicionamos que letterCod esté entre los rangos de las mayúsculas y minúsculas de código ASCII */
      if ((letterCod >= 65 && letterCod <= 90) || (letterCod >= 97 && letterCod <= 122)) {
        
        /* Se aplica la fórmula para sacar el número que luego se pasará a cifrar */
        var num = (letterCod - 65 + 33) % 26 + 65;                   
        var converted = String.fromCharCode(num);    
        /* text1.push(converted); */
        text1 += converted;                
      } 
    } 
    return text1;
  }
}

decipher('');
