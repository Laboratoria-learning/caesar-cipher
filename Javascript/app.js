// La funcion cipher() Cifra el array recibido
var cipher= function(array) {
//Almacenaremos el codigo Ascii de cada letra en numAscii con la funcion push() y charCodeAt()
  var numAscii=[];
  for (var e=0;e<array[0].length;e++){
    numAscii.push(array[0].charCodeAt(e));
  }
//aplicaremos la formula del cifrado de Cesar
  var change=[];
  for (var i=0; i<numAscii.length;i++) {
    if (numAscii[i]<=90) {
      change.push((numAscii[i]-65+33)%26+65); // MAYUSCULAS
    } else {
       change.push((numAscii[i]-97+33)%26+97);//minúsculas
    }
  }
//Convertiremos los nuevos numeros Ascii en letras con String.fromCharCode()
//Luego las juntamos con join("")
  var cipherDone=[];
    for (var a=0;a<change.length;a++) {
      cipherDone.push(String.fromCharCode(change[a]));
      var newCipher=[cipherDone.join("")];
    }
    return newCipher;
};
//decipher() es una funcion que descifra el array dado
var decipher=function(array) {
//Convertimos las letras en números Ascii con push() y charCodeAt()
  var nums=[];
  for (var i=0;i<array[0].length;i++) {
    nums.push(array[0].charCodeAt(i));
  }
//Aplicamos la formula esta vez revertida
//Lo almacenamos en la variable change
  var change=[];
  for (var u=0; u<nums.length;u++) {
    if (nums[u]<=90) {
      change.push((nums[u]+65-33)%26+65);//MAYUSCULAS
      } else {
       change.push((nums[u]+97+33)%26+97);//minúsculas
      }
  }
//Convetiremos los nuevos numeros en letras con String.fromCharCode(),
//las almacenamos con push() para luego juntarlas con join()
  var decipherDone=[];
    for (var e=0;e<change.length;e++) {
      decipherDone.push(String.fromCharCode(change[e]));
      var newCipher=[decipherDone.join("")];
    }
      return newCipher;
};
//Inicio del programa
// Pedimos al usuario que elija una opcion
var option=[prompt("Elija una de las opciones de cifrado "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar")];
//validamos que ingrese la opcion correcta
//De ser correcta evaluamos que la frase no contenga números ni espacios
for (var m=0; m<option[0].length;m++) {
  if (option[0]!=="1"&& option[0]!=="2") {
    alert("Solo ingrese el número 1 o 2 para continuar");
    break;
    } else {
    var sentence = [prompt("Ingrese su frase por favor")];
    }
  for (var i=0; i<sentence[0].length;i++) {
    if (sentence[0].charCodeAt(i) === " ".charCodeAt()||isNaN(sentence[0][i]) === false) {
      alert("No ingrese números ni espacios en blanco");
      option[0]= null;
      break;
    }
  }
}
//Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()
if (option[0] === "1") {
  alert("Texto Original : "+sentence+"\n"+"Texto Cifrado : "+cipher(sentence));
  } else if (option[0]==="2") {
  alert("Texto Original : "+sentence+"\n"+"Texto Descifrado : "+decipher(sentence));
}
//Fin del programa
