function cipher(message){

 var newString = message.toUpperCase();//A
 var newPositionEncript;
 var positionAlphabetAscii;
 var encripWord = "";

    for (var j=0; j < newString.length; j++) {

       if (newString[j].charCodeAt() >= 65 && newString[j].charCodeAt() <= 90) {

                  positionAlphabetAscii = newString[j].charCodeAt();  //65
                  //Posici�n de la letra en ASCII
                  newPositionEncript = ((positionAlphabetAscii - 65) + 33) % 26 + 65;  //72
                  //Con f�rmula para encontrar la nueva posici�n encriptada
                  encripWord = encripWord + String.fromCharCode(newPositionEncript);  //H
                  //variable que concatena la nueva encriptaci�n

       }  else {

              encripWord=alert("Solo se aceptan letras. Int�ntalo nuevamente!");
              break;
       }
    }
                  return encripWord;
}


//FUNCI�N DE DESCIFRADO
function decipher (message) {

 var newString = message.toUpperCase(); //H
 var newPositionNoEncript;
 var positionAlphabetAscii;
 var noEncripWord="";

        for (var j = 0; j < newString.length; j++) {

            if (newString[j].charCodeAt() >= 65 && newString[j].charCodeAt() <= 90) {

                  positionAlphabetAscii = newString[j].charCodeAt();  //72
                  //Posici�n de la letra en ASCII
                  newPositionNoEncript = ((positionAlphabetAscii - 33 + 65) % 26) + 65;  //65
                  //Con f�rmula para encontrar la nueva posici�n no encriptada
                  noEncripWord += String.fromCharCode(newPositionNoEncript);//A
                  //variable que concatena la nueva encriptaci�n
       } else {

            noEncripWord = alert("Solo se aceptan letras.Int�ntalo nuevamente!");
            break;
       }

    }
                    return noEncripWord;
}
do {
        var message='';
        var message=prompt("Ingresa una palabra:")

   if (message === null) {
          alert ("Regrese pronto :) ")
            break;
    } else if (message.length === 0) {
          alert("Tu mensaje est� vac�o, int�ntalo nuevamente")

    } else {
          var menuOpc = "1.- Cifrar\n " + " 2.- Descifrar";
          var opc = prompt(menuOpc, "Elige una opci�n:");

              if (opc === "1") {
                 cipher(message);

                    } else if (opc == "2") {
                 decipher (message)

                    } else {
                   alert("Int�ntalo nuevamente")
                   message='';
                 }
       }

} while(message.length == 0);
