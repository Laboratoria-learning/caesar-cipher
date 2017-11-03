//Se ejecuta cuando se selecciona una opción
var menu = function (option){
    (option == 1) ? prompt('Mensaje a cifrar:'+prompt('---'+prompt('---\n' +0))) :
    (option == 2) ? prompt('Mensaje a descifrar\n'+0) :
    (option == 3) ? alert('Gracias por su visita.') : alert('No tenemos esa opción.');
}

//Para mostrar una ventana emergente con distintas opciones
do{
    var strMenu = '1. Cifrar un mensaje\n2. Descrifrar un mensaje\n3. Salir';
    var option = prompt('Seleccione una opción:\n' + strMenu);
    menu(option);
}while(option != 3);

//Función para descifrar una frase
var decipher = function(phrase) { // ( x - 65 + n) % 26 + 65

}

//Función para cifrar una frase
var cipher = function(phrase) { // ( x + n ) % 26 -> # que debe sumar
  var index; //posicion de letra
  var n=33; //valor fijo

  var cod = '';

  for (index=0; index<phrase.length; index++) {
    //console.log(phrase[index]);
    //Obtenemos el número de posiciones que debe avanzar
    var numPositions = (index+n) % 26;
    console.log(numPositions)
    //Sumando el índice (posición actual) y la cantidad de posiciones que debe avanzar
    var newIndex = index+numPositions;
    console.log(newIndex) //7 9 11 13 15 17
    cod += phrase[newIndex];
    console.log('imprime '+cod);
    /*return cod;*/
  }
}

//var original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var descifrar = 'HIJKLMNOPQRSTUVWXYZABCDEFG';

//console.log(cipher(original));
