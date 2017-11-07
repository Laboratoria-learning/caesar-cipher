/* creando funcion Cipher y consultando  al usuario*/
function cipher() {
  var question = prompt('Escribe tu nombre');
  /* creando bucle para que en caso de que el usuario no ingrese informacion   se le solicite hacerlo*/
  while (question === '') {
    question = prompt('escribe algo');
  }
  /* recorriendo frase del usuario */
  for (var i = 0; i < question.length; i++) {
    /* de encontrar cifra numerica o un vacio solicitamos nueva informacion*/
    while (parseInt(question[i]) % 1 === 0) {
      question = prompt('No coloques numero');
      while (question === '') {
        question = prompt('escribe algo');
      }
    }
  }
  /* cifrando(primero convertir a mayusculas y aplicar cifrado)*/
  var questionMayus = question.toUpperCase();
  var str = '';
  for (var j = 0; j < questionMayus.length; j++) {
    var newPosition = (questionMayus.charCodeAt(j) - 65 + 33) % 26 + 65;
    var letterCifher = String.fromCharCode(newPosition);
    str += letterCifher;
  }
  return str;
}
/*  creando funcion de decifrado*/
function decipher(str) {
/* asignamos una variable , la cual  almacenará la palabra decifrada*/
  var decipherWord = '';
  /* recorriendo el array cifrado y ejecutando formula*/
  for (var ij = 0; ij < str.length; ij++) {
    var retroPosition = (str.charCodeAt(ij) + 65 - 33) % 26 + 65;
    var letterCesar = String.fromCharCode(retroPosition);
    decipherWord += letterCesar;
  }
  alert('tu nombre cifrado es' + ' ' + str);
  alert('tu nombre decifrado es' + ' ' + decipherWord);
}

decipher(cipher());
