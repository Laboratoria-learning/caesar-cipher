  /* crearemos la primera funcion para cifrar*/
function cipher() {
  /* dentro de ella crearemos las variables*/
  var alphabet = prompt("Ingresa el alfabeto").toUpperCase(); 
  var newArray = alphabet.split("");
  // en la nueva varible newAlphabet se colocara los elementos nuevos
  var newAlphabet = [];
  // realizaremos un bucle con for.
  for (i=0; i<newArray.length; i++) {
  // dentro del for realizarmos la condicion pedida, para ello crearemos un var
  // de la locacion del alfabeto.
    var location = newArray[i].charCodeAt();
    var locationTwo =((location - 65 +33)%26 + 65);
    var code = String.fromCharCode(locationTwo);
    newAlphabet.push(code);
  }
  // con un return para retornar el cifrado
  return newAlphabet.join("");
}

cipher();
function decipher() {
  // Descifrando la palabra cifrada
  for (j=0; j<newAlphabet.length; j++) {
  // dentro del for realizarmos la condicion pedida, para ello crearemos un var
  //de la locacion del alfabeto.
    var cifri = [];
    var position1 = newAlphabet[j].charCodeAt();
    var position2 =((position1 +33)%26 +65 );
    var codeTwo = String.fromCharCode(position2);
    cifri.push(codeTwo);
  }
  return (cifri.join(""));
}
decipher();
