// declarando e inicializando variables
//var sentence='abcdeABCDE';
var option='';
var validateOption=false;
var validateSentence=false;
var parameter=33;

var asci=0;
var temp1=0;
var stringCipher='';
var stringDecipher='';


// validando la opción ingresada
do {
     option = prompt('ingrese opción: (1)Cifrar (2)Descifrar');

     if (isNaN(option.charCodeAt(0))=== true) { // que no esté vacío
        alert('No ingreso opción') ;
        validateOption=false;

     } else {
        (option.charCodeAt(0)===49  || option.charCodeAt(0)===50)? validateOption= true : validateOption= false ; // sólo 1 ó 2
     }

} while (validateOption === false);

// validando la frase ingresada
do {
     sentence = prompt('ingrese frase: ');

     if (sentence.length ===0){
        alert('No ingreso frase:') ;
     }else{

         for (var i=0; i < sentence.length ; i++){

           if(sentence.charCodeAt(i)>=65 & sentence.charCodeAt(i)<=90  || sentence.charCodeAt(i)>= 97 & sentence.charCodeAt(i) <= 122) {
              validateSentence=true;
           }
         }
     }
} while (validateSentence === false);

// comprobando si las validaciones de opción y frase ejecutar funciones cifrar o cifrado

if (validateOption ===true & validateSentence === true ){
   if( option.charCodeAt(0)===49 ){
      cipher(sentence, parameter);  // llamar a la función cifrar enviando argumentos
   }

    if(option.charCodeAt(0)===50){
      decipher(sentence, parameter); // llamar a la función decifrar enviando argumentos
   }
}

// función cifrado
function cipher (sentence,parameter){
  console.log(sentence);
  for (var i=0; i< sentence.length ; i++){
      asci= sentence.charCodeAt(i); //asigna valor asci de caracter posicion i

      if ( asci >= 65 & asci <=90){     // para  mayusculas
          temp1=(sentence.charCodeAt(i) - 65 + parameter )%26 +65;

      }else { (asci >= 97 & asci <=122) // para minisculas
          temp1=(sentence.charCodeAt(i) - 97 + parameter )%26 +97;
      }

      stringCipher+=(String.fromCharCode(temp1)); //acumula caracteres
  }
      alert(stringCipher);
      prompt(stringCipher);
}

// función decifrado
function decipher (sentence,parameter){
  stringCipher=0;

  for (var i=0; i< sentence.length ; i++){
      asci= sentence.charCodeAt(i); //asigna valor asci de caracter posicion i

      if ( asci >= 65 & asci <=90){     // para  mayusculas
         temp1=(sentence.charCodeAt(i) - 7  );

      }else { (asci >= 97 & asci <=122) // para minisculas
         temp1=(sentence.charCodeAt(i) - 7  )
      }
      stringDecipher+=(String.fromCharCode(temp1)); //acumula caracteres
  }
     alert(stringDecipher);
}
