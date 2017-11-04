

//creando la función "cipher".
function cipher (phrase) {
  //Encontrar posición de la letra en el alfabeto ASCII
var positionAscii;
var positionabc;
var newLetters="";

  for (var i = 0; i < phrase.length; i++) {
    if((phrase[i].charCodeAt()>64 && phrase[i].charCodeAt()<91)){
      positionAscii=phrase.charCodeAt(i);
      positionabc=((positionAscii-65)+33)%26+65;
      newLetters=newLetters+String.fromCharCode(positionabc);
      console.log(newLetters);
    }
    else if ((phrase[i].charCodeAt()>96 && phrase[i].charCodeAt()<123)){
      positionAscii=phrase.charCodeAt(i);
      positionabc=((positionAscii-65)+33)%26+65;
      newLetters=newLetters+String.fromCharCode(positionabc);
      console.log(newLetters);
    }
    else {
      alert("No encriptamos/desencriptamos números.");
    }
}
}



do{
  var phrase = prompt("¡Bienvenido!,ingrese su frase aquí:"); // le indicamos al usuario que ingrese una frase para trabajar en el programa

    if(phrase===null){  //si le damos click en "cancelar"
    alert("¡Hasta luego!,regrese pronto");
      break;
    }
    else { //si ingresamos algo en el campo del prompt sucedera esto :
      var options = prompt("1.CIFRAR \n"  + "2.DESCIFRAR"); // el usuario podra elegir una opcion ,depende de lo que quiera hacer.

        if(options==="1"){
          cipher(phrase);
          alert("Tu frase encriptada luce así : " +newLetters);// si escribe 1 en el campo ,la frase se encriptará.

      }
        else if (options==="2"){ //si escribe 2, la frase se desencripta
        alert("Tu frase desencriptada es así: "+ newLetters);
        dicepher(phrase);
      }
        else { // si el usuario ingresa algo distinto de 1 y 2 ,saldrá el siguiente mensaje :
        alert("Opción inválida.")

      }
    }
  }while(!phrase);  // mientras el campo del prompt este vacío se repetira el código de arriba .
