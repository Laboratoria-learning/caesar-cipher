function cipher(){
  var input=prompt('Ingresa tu codigo en letras para cifrar')
   if(input.length===0){ //verificamos que el input no esté vacío
    return "No puedes dejar el input vacío!!"
  }

    if(input*0===0){ //verificamos que el input no sea un número
      return 'No puedes ingresar números!'
    }


 var array=[]; //creamos un array para contener el nuevo conjunto de letras separadas y codificadas
  for(var i=0;i<input.length;i++){
    var stringAscii=input.charCodeAt(i); //una variable para almacenar el codigo ascii de la letra
    var letterCesar=(stringAscii-65+33)%26+65; //aplicamos el cifrado cesar
    var newLetter=String.fromCharCode(letterCesar); //nueva letra con cifrado cesar
    array.push(newLetter); //almacenamos la letra cifrada en el array
  }

  return array.join(''); //retornamos el array como un string
}



function decipher(){
  var secInput=prompt('Ingresa tu codigo en letras para decifrar')
   if(secInput.length===0){ //verificamos que el input no esté vacío
    return "No puedes dejar el input vacío!!"
  }

  if(secInput*0===0){//verificamos que el input no sea un número
      return 'No puedes ingresar números!'
    }

  var secArray=[];//un array para contener el nuevo conjunto de letras
  for(var i=0;i<secInput.length;i++){
    var codAscii=secInput.charCodeAt(i);//una variable para almacenar el codigo ascii de la letra
    var decifCesar=codAscii-(33%26); //aplicamos la formula para deshacer el cifrado cesar
    var newString=String.fromCharCode(decifCesar); //nueva letra sin el cifrado cesar
    secArray.push(newString); //almacenamos la letra decifrada en el secArray
  }

  return secArray.join(''); //retornamos el secArray como un string

}

cipher(); //llamamos a la funcion requerida

//decipher();
