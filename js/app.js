//funcion para cifrar una cadena de texto
function cipher(myString){
  var myStringCipher = ''; // almacenar el valor del string Cifrado

  for (var i = 0 ; i < myString.length ; i++){  // recorrer el string del usuario
   var numberOfTheLetter = myString.charCodeAt(i); //numero de la letra en el codigo ASCII
   var cipherFormula; //almacena fórmula de cifrado que se utiliza
   var theNewLetter; // alamacena valor de la nueva letra cifrada
   if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { // valor UNICODE de letras mayúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 65 + 33) % 26 + 65; // formula de Cifrado Cesar: obtener nuevo numero de letra  en el codigo ASCII
     theNewLetter =  String.fromCharCode(cipherFormula); // obtener el valor de la letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
   } else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
     cipherFormula = ( numberOfTheLetter - 97 + 33) % 26 + 97; // fórmula de cifrado Cesar
     theNewLetter = String.fromCharCode(cipherFormula); // valor de letra cifrada
     myStringCipher +=theNewLetter; // formar el string cifrado
   }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
     myStringCipher += ' ';  // añadir espacio en string cifrado
   }
   else {
     break; // Si no es una letra detente
    }
  }
  return myStringCipher;   // Retorna el valor de la cadena cifrada
