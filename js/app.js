
//------------------------ ELEGIR FUNCION--------------------------------------------

 var elegida = prompt("Escribe: \n 1: Cifrar\n 2: Descifrar")
   
 switch (elegida){
 
 case "1" : cipher(); break;
 case "2" : decipher(); break;
 default : alert ("Ingrese una de las opciones"); 
 }
//--------------------------------------------------------------------------------------
// Definir la función del cifrado
function cipher () { 
 
var n = 33
var phrases = prompt("Escriba un texto para cifrar")
 // Definir que no acepte campos vacíos por el usuario.
 if(phrases===""){
   alert("Campo vacio")}
 else{
 var result = [] // Nombrar como un string, la variable result.
  // Hacer un ciclo repetitivo para recorrer la frase
    for (var i = 0; i < phrases.length; i++) {
   // Crear una variable letters para colocar el código ASCII de cada letra  
   var letters = phrases.charCodeAt(i);
   //console.log("31 . buscar error :" + letters);
     // Determinar un parámetro para letras mayúsculas, según el código ASCII
   if (32 == letters){
     result += String.fromCharCode(32);
   } 
   else if (65 <= letters && letters <=  90) {
     result += String.fromCharCode((letters - 65 + n) % 26 + 65);
   } 
     // Determinar un parámetro para letras minúsculas, según el código ASCII
   else if (97 <= letters && letters <= 122) {
     result += String.fromCharCode((letters - 97 + n) % 26 + 97);}  
     // Definir un mensaje error, si el usuario no escribe letras.
   else {
     alert("mensaje de error");
   break;
   }
 }
 }
 return result;
}

//alert(cipher ())
//------------------------------------------------------------------------------------

// Definir la función del descifrado
function decipher () {      // Nombrar una variable result, como un string
 
 var n = 33
 var phrases = prompt("Escriba un texto para descifrar")
 var result = [];
   // Definir que no acepte campos vacíos por el usuario.
 if(phrases===""){
   alert("Campo vacio")
 } 
 else{
   // Hacer un ciclo repetitivo para recorrer la frase
  for (var i = 0; i < phrases.length; i++) {
   // Crear una variable letters para colocar el código ASCII de cada letra  
   var letters = phrases.charCodeAt(i);
   // Determinar un parámetro para letras mayúsculas, según el código ASCII
     if (32 == letters){
     result += String.fromCharCode(32);} 
     else if (65 <= letters && letters <= 90) {
       result += String.fromCharCode((letters + 65 - n) % 26 + 65);}  
             // Determinar un parámetro para letras minúsculas, según el código ASCII
     else if (97 <= letters && letters <= 122){
       result += String.fromCharCode((letters + 97 + n) % 26 + 97);}  
     // Definir un mensaje error, si el usuario no escribe letras.
 else {
       alert ("mensaje de error");
       break;
     }
 }
 return result;
}
}
//console.log(decipher(prompt ("Escriba una frase para descifrar"), 33)) 
