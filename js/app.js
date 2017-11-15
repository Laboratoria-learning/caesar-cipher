
var output = ''; // Se declara la variable donde se acumulara la salida luego de ser cifrada
var keyCode = '';
var validateWord = false;


function cipher() {
 
  do {
    word = prompt('Ingrese la palabra a cifrar');// Se pide que ingrese la palabra a cifrar.

    if (word.length > 0) { // Se condiciona en el caso que la longitud de la palabra ingresada sea mayor a 0
      for (i = 0;i < word.length;i++) {
        keyCode = word.charCodeAt(i);// Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

        if ((keyCode !== 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122)) { // Restringimos caso que la palabra posea números o caracteres invalidos
          alert('Por favor ingrese una palabra válida');
          break;
        } else {
          validateWord = true;
        }
      }
    } else { // En el caso que no ingrese nada nos enviara un mensaje
      alert('Ha ingresado un texto vacio');
    }
  } while (validateWord === false);

  for (i = 0;i < word.length;i++) {
    keyCode = word.charCodeAt(i);// Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

       		 if (keyCode >= 65 && keyCode <= 90) {// para cifrar mayusculas
      output += String.fromCharCode((word.charCodeAt(i) - 65 + 33) % 26 + 65);
         	  } else {
      (keyCode >= 97 && keyCode <= 122);// para cifrar minusculas
         	  	output += String.fromCharCode((word.charCodeAt(i) - 97 + 33) % 26 + 97);
        	  }
  }


  return output;
}


function decipher() {
  // var output=''; //Se declara la variable donde se acumulara la salida luego de ser cifrada
  // var keyCode='';
  // var validateWord=false; //nuevo
  // var word='';

  do {
    word = prompt('Ingrese la palabra a descifrar');// Se pide que ingrese la palabra a cifrar.

    if (word.length > 0) { // Se condiciona en el caso que la longitud de la palabra ingresada sea mayor a 0
      for (i = 0;i < word.length;i++) {
        keyCode = word.charCodeAt(i);// Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

        if ((keyCode != 32) && (keyCode < 65) || (keyCode > 90) && (keyCode < 97) || (keyCode > 122)) { // Restringimos caso que la palabra posea números o caracteres invalidos
          alert('Por favor ingrese una palabra válida');
          break;
        } else {
          validateWord = true;
        }
      }
    } else { // En el caso que no ingrese nada nos enviara un mensaje
      alert('Ha ingresado un texto vacio');
    }
  } while (validateWord === false);

  for (i = 0;i < word.length;i++) { // ////////////////////////
    keyCode = word.charCodeAt(i);// Obtenemos el codigo ascii de cada caracter de la     palabra ingresada

    if (keyCode >= 65 && keyCode <= 90) {// para descifrar mayusculas
    		  output += String.fromCharCode(((word.charCodeAt(i) - 65 + 26 + 26 - 33) % 26) + 65);
    } else {
      (keyCode >= 97 && keyCode <= 122);// para descifrar minusculas

    		  output += String.fromCharCode(((word.charCodeAt(i) - 97 + 26 + 26 - 33) % 26) + 97);
    }
  }

  return output; // Devuelve la palabra ya descifrada
}


var validateOption = false;

do { // nuevo
// Presentamos una pantalla con las opciones a elegir según lo que desea realizar
  selectOption = parseInt(prompt('Ingrese la acción que desea realizar \n 1.Cifrar un texto \n 2.Descifrar un texto '));

  switch (selectOption) {// Empleamos el switch case para restringir a solo 2 opciones lo que el usuario puede marcar
  case 1:
    validateOption = true; //
    alert(cipher());// En el caso que marque 1 se invocará a la función cipher.
    break;
  case 2:
    validateOption = true; //
    alert(decipher());// En el caso que marque 2 se invocará a la función decipher.
    break;

  default:
    validateOption = false; //
    if (confirm('Por favor ingrese una opción válida, \n Presione: \n \n [ OK ] si desea Continuar \n \n [ CANCELAR ] si desea Salir')) { //
      continue;//
    } else {//
      break;//
    }//
  }
  // }//
} while (validateOption === false) ; // nuevo
