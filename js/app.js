var output='';  // Se declara la variable donde se acumulara la salida luego de ser cifrada
var keyCode=''; // Se declara la variable donde se acumulará el codigo ascii de cada letra del word a
var validateWord=false; // se declara la variable lógica e inicializa en false para controlar la validación del word 'válido'


function cipher() { // declara la función de cifrado


  do{ // se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'word' y validarla
      word=prompt('Ingrese la palabra a cifrar');//Se pide que ingrese la palabra a cifrar.

     if (word.length>0){ //Se condiciona en el caso que la longitud de la palabra 'word' ingresada sea mayor a 0

        for (i=0;i<word.length;i++){ // se utiliza un for para recorrer através de los caracteres del palabra 'word'
            keyCode=word.charCodeAt(i); //Obtenemos el codigo ascii de cada caracter de la palabra 'word'

           if ((keyCode != 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122) ){ //Restringimos caso que la palabra posea números o caracteres invalidos
              alert('Por favor ingrese una palabra válida'); // muestra una alerta del palabra inválida
                 cipher();  // utilizando la recursividad se vuelve a llamar a la función cifrado
           }else{
                 validateWord=true; // toma el valor de verdadero si la palabra ingresada es válida
                }
        }

     } else { //En el caso que no ingrese nada nos enviara un mensaje
             alert('Ha ingresado un texto vacio'); // muestra el mensaje de alerta que ha ingresado una palabra vacía
     }

  }while(validateWord===false);  // se volverá a realizar mientras no se halla podido validar la frase

           for (i=0;i<word.length;i++){  // se utiliza un for para recorrer los carácteres de la palabra
                keyCode=word.charCodeAt(i); //Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

       		 if (keyCode>=65 && keyCode<=90){//para cifrar mayusculas
              output += String.fromCharCode((word.charCodeAt(i)-65+33)%26+65); // se acumula el caracter cifrado obtenido de la fórmula

         	  } else {(keyCode>=97 && keyCode<=122);//para cifrar minusculas
         	  	output += String.fromCharCode((word.charCodeAt(i)-97+33)%26+97);  // se acumula el caracter cifrado obtenido de la fórmula
        	  }
           }


    return output; // retorna el cifrado de la palabra ingresada como resultado
}





function decipher() { // declara la función de descifrado


  do{ // se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'word' y validarla
      word=prompt('Ingrese la palabra a descifrar');//Se pide que ingrese la palabra a descifrar.

     if (word.length>0){ //Se condiciona en el caso que la longitud de la palabra ingresada sea mayor a 0

        for (i=0;i<word.length;i++){ // se utiliza un for para recorrer através de los caracteres del palabra 'word'
            keyCode=word.charCodeAt(i);//Obtenemos el codigo ascii de cada caracter de la  palabra ingresada word

           if ((keyCode != 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122) ){ //Restringimos caso que la palabra posea números o caracteres invalidos
              alert('Por favor ingrese una palabra válida'); // muestra una alerta del palabra word inválida
              decipher(); // utilizando la recursividad se vuelve llamar a la función decipher ()
           }else{
                 validateWord=true; // toma el valor de verdadero si la palabra word ingresada es válida
                }
        }

     } else { //En el caso que no ingrese nada nos enviara un mensaje
             alert('Ha ingresado un texto vacio');
     }

  }while(validateWord===false);  // se volverá a realizar mientras no se halla podido validar la palabra word

  for (i=0;i<word.length;i++){  // se utiliza un for para recorrer por los caracteres de la palabra word
                keyCode=word.charCodeAt(i);//Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

        if (keyCode>=65 && keyCode<=90){//para descifrar mayusculas

    		  output += String.fromCharCode(((word.charCodeAt(i)-65+26+26-33) % 26)+65); // se acumula el caracter descifrado obtenido de la fórmula
        }
        else {(keyCode>=97 && keyCode<=122);//para descifrar minusculas

    		  output += String.fromCharCode(((word.charCodeAt(i)-97+26+26-33) % 26)+97);  // se acumula el caracter descifrado obtenido de la fórmula
        }
      }

  return output;   //Devuelve la palabra ya descifrada
}




var validateOption=false; // se declara la variable lógica e inicializa en false para controlar la validación del word 'opción'

do {  //  se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'option' y validarla

// Presentamos una pantalla con las opciones a elegir según lo que desea realizar
selectOption=parseInt(prompt('Ingrese la acción que desea realizar \n 1.Cifrar un texto \n 2.Descifrar un texto '));

  switch (selectOption) {//Empleamos el switch case para restringir a solo 2 opciones lo que el usuario puede marcar

      case 1:
          validateOption= true; // validación de opción correcta
          alert(cipher());//En el caso que marque 1 se invocará a la función cipher.
          break; // sale de la rutina
      case 2:
          validateOption= true; //validación de opción correcta
          alert(decipher());//En el caso que marque 2 se invocará a la función decipher.
          break; // sale de la rutina

     default:
          validateOption =false; // cuando ha ingresado una opción no válida ( no 1 ó no 2) si la validación es falsa
            if (confirm('Por favor ingrese una opción válida, \n Presione: \n \n [ OK ] si desea Continuar \n \n [ CANCELAR ] si desea Salir')){ //
              continue;// continua con la rutina
           }else{
             break; //sale de la rutina
             }
    }

}while (validateOption ===false ) ;  // realizar mientras que la validación sea falsa para volver a pedir el ingreso de opción
