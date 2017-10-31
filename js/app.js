//Validaciones

var text = prompt('Ingrese la frase a encriptar');
if(text !== '' && text.replace(/[^0-9]/g, ' ') !== text){ // si el texto es diferente de 0, o si ingresa algun valor númerico lo reemplaza por vacio y vuelve a llamar al prompt
  cipher(text); //llamamos a la funcion a ejecutar
}
else{
  alert('Error vuelva a ingresar la frase'); //si lo anterior no se cumple, se llamara nuevamente al prompt
  var text = prompt('Ingrese la frase a encriptar');
}  

//funcion Cipher
function cipher(text){
  //para guardar las letras del nuevo texto
  var textCipher = "";
  //recorriendo el texto ingresado
  for(var i = 0; i<text.length; i++){
   //averiguando el codigo ASCII de las letras y aplicando la formula
   var textChar = (text.charCodeAt(i) - 65 + 33)%26 + 65;
   //convirtiendo el texto cifrado al cod. ASCII
   textCipher += String.fromCharCode(textChar);
 }
 //retornando el valor
 return textCipher;
}
  
//funcion Decipher

  //tratando de invertir la function cipher
function decipher(text){
  //para guardar las letras de la letra a descifrar
  var textDecipher = "";
  //
    for(var i = 0; i<text.length; i++){
      var textChar = (String.fromCharCode(text(i)) + 33)%26;
      textDecipher = textDecipher + textChar;
      var newText = newText.charCodeAt(textDecipher);
    }
    return newText;
}