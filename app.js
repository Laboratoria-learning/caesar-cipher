var text = prompt('ingrese su texto'); //creo una variable que permita ingresar el texto

function cipher(word) {

   var str = '';  //creo una variable str que me permita almacenar el string ingresado
   var ascii = 0;// creo la variable ascii, la cual va a ser un  number y me va a permitir obtener el codigo ascci

   for (var i = 0; i < word.length; i++) { //mediante un for recorro el largo del string para poder inspeccionar cada elemento//
   ascii = word.charCodeAt(i); //a mi variable ascii le aplico .charCodeAt para que me permita trasladar mi string a ascii
    if (word !== "" ||  isNaN(parseInt(word))) { // uso un if para indidicar que tanto los valores numericos como espacios vacios retornen undefined//

      if (ascii > 96 && ascii <= 122){ //mediante este if solo hago seguimiento de las minusculas
        var minLetter=(ascii-97+33)%26+97;  //aplico la formula para minusculas
         str += String.fromCharCode(minLetter);//con String.fromCharCode() paso mi codigo ascii a la nueva letras en minusculas
      }
      if (ascii > 64 && ascii <= 90) { //mediante este if solo hago seguimiento de las mayusculas
         var maxLetter=(ascii-65+33)%26+65;  //aplico la formula para mayusculas
         str += String.fromCharCode(maxLetter);////mediante este if solo hago seguimiento de las mayusculas
      }
    }else{
        return undefined;
    }
  }
  return str;
}

cipher(text);
