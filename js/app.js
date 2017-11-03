var phrase = prompt('Please write your phrase without number');
/*ahora lo que quiero hacer es primero hacer una condicional,
en caso el usuario hay puesto un numero en la frase, para volver a preguntar*/


var arrOfThePhrase=[];
//primero una función para cifrar mi frase
  function code (){
//para que pase por cada letra de la frase, se debe iterar
    for (var i = 0;i<phrase.length;i++){
        //las letras ingresadas deben pasarse al número según ascii para realizar la operación
        var str = phrase.charCodeAt();
        //para obtener el código ascii en número de la frase ingresada en el prompt:
        var ascii =((str-65+33)%26+65);
        //ahora, se quiere obtener las letras que forman la frase en secreto
        var cipher = String.fromCharCode(ascii);
        // aqui se quiere pasar en un grupo(en un array) vacio cada letra :(
        var newArr = arrOfThePhrase.push(cipher);
        //var newString = newArr.join('');

   }
   return cipher;
}
code();
// ahora, otra función pero esta vez para descifrar la frase

function decode(){
    for (var i = 0;i<phrase.length;i++){
        //las letras ingresadas deben pasarse al número según ascii para realizar la operación
        var str = phrase.charCodeAt();
        /*para obtener el código ascii en número de la frase ingresada en el
        prompt, con la misma fórmula pero cambiando los símbolos*/
        var ascii =((str+65-33)%26+65);
        //ahora, se quiere obtener las letras que forman la frase en secreto
        var cipher = String.fromCharCode(ascii);
        // aqui se quiere pasar en un grupo(en un array) vacio cada letra :(
        var newArr = arrOfThePhrase.push(cipher);
        //var newString = newArr.join('');
  }
}
decode();