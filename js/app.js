function cipher(word){

  var newString;
  var newPositionEncript;
  var positionAlphabetAscii;
  var encripWord=[];

  for(var i=0; i<word.length;i++){

      if(typeof(word[i])==="string"  && word.length>=0){

         newString= word.toUpperCase();
         positionAlphabetAscii=newString[i].charCodeAt();
         //Posición de la letra en ASCII
         newPositionEncript=((positionAlphabetAscii-65)+33)%26+65;
         //Con fórmula para encontrar la nueva posición encriptada
         encripWord.push(String.fromCharCode(newPositionEncript));
         //Array que almacena la nueva encriptación
      }
  }

  return encripWord;
}
console.log(cipher("ABCD"));//devuelve [ 'H', 'I', 'J', 'K' ]

function decipher(word2){
  var positionEncript;
  var newPositionNoEncript;
  var newArrayNoEncript=[];
    for(var i =0; i<word2.length;i++){
      positionEncript=word2[i].charCodeAt();
      //Posición de la letra en ASCII
      newPositionNoEncript=((positionAlphabetAscii-65)+33)%26;
      //Con fórmula para encontrar la posición no encriptada
      newArrayNoEncript.push(String.fromCharCode(newPositionNoEncript));
      //Array que almacena la nueva encriptación
    }
  return newPositionNoEncript;
}
decipher("A");
