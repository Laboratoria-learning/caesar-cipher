// SE CREA DOS FUNCIONES //
// PRIMERA FUNCION QUE CIFRE //
function cipher() {
// MEDIO DE UN PROMPT EL USUARIO DARA SU FRASE//
  var sentence = prompt('Ingrese la frase que desea cifrar');
  // LA FRASE  Y SEPARAMOS POR CADA CARACTER
  var convertEncrypt = sentence.split('');
  // AGREGARE UN ARRAY VACIO PARA QUE ENTRE LOS CARACTERES ENCRIPTADOS
  var pushEnncrypt = [];
  // ENCRIPTAR UNO POR UNO MEDIANTE UN FOR
  for (var i = 0; i < convertEncrypt.length;i++) {
    // SE HACE UNA NUEVA variable QUE LA FRASE devuelve un número indicando
    // el valor Unicode del carácter en el índice proporcionado
    var newcharacterPosition = convertEncrypt[i].charCodeAt();
    // utilizamos la formula para encriptar
    var characterPosition = ((newcharacterPosition - 65 + 33) % 26 + 65);
    // devuelve una cadena creada mediante el uso de una secuencia de valores // DE LA FORMULA QUE HICIMOS ARRIBA
    var pushPosition = characterPosition.String.fromCharCode(characterPosition);
    // AHORA AGREGAMOS Y JUNTAMOS LO CIFRADO EN EL ARRAY VACIO
  pushEnncrypt.push(pushPosition) && pushEnncrypt.join(pushPosition);
  // RETORNA AL ARRAY VACIO
return pushEnncrypt()
}
cipher()
//SEGUNDA FUNCION QUE DECIFRA
function decipher(){
  //ENTRAR UN PROMPT PARA QUE EL USUARIO ME DEVUELVA LO QUE SE LE indica
var phrase = prompt("Ingresa lo que deseas decifrar");
//LOS CARACTERES INGRESADOS SE SEPARAN
var phraseSplit = phrase.split()
//COLOCAMOS UN ARRAY VACIO PARA LUEGO EL DECIFRADO ENTRE
 var pushDecipher=[];
 //MEDIANTE UN FOR LO QUE INGRESO EL USUARIO COMENZARA A CONTAR UNO POR UNO
 for (var i=0; i<phraseSplit.length;i++){
//EL INDICE ES tODO LO QUE ENTRA EL USUARIO
var newDecipher=phraseSplit[i];
//SE PONE LA FORMULA PARA DECIFRARLO
var starDecipher=(newDecipher - 33) % 26;
//EL RESULTADO SE AGREGA Y JUNTA LOS CARACTERES AL ARRAY VACIO
pushDecipher.push(starDecipher) && pushDecipher.join(starDecipher);
 }
return pushDecipher()//RETONAR AL ARRAR VACIO
}
