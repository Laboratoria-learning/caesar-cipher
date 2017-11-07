/*  Se le muestra al usuario un menu de opciones para Cifrar y Descifrar*/
var option = prompt('Elija una opciones ' + '\n' + '1. Cifrar ' + '\n' + '2. Decifrar' + '\n' + '3. Salir');
/*  validamos que ingrese la opción correcta, si es correcta evaluamos la frase que no contenga números ni espacios*/
if (option === '3') {
  alert('Regrese pronto');
} else if (option !== '1' && option !== '2' && option !== '3') {
  alert('Solo ingrese opción 1 o 2');
  option = null;
} else {
  var phrase = prompt('Ingrese su frase por favor');
}
for (var i = 0; i < phrase.length; i++) {
  if (phrase.charCodeAt(i) === ' '.charCodeAt() || isNaN(phrase[i]) === false) {
    alert('No ingrese números ni espacios en blanco');
    var option = null;
    break;
  }
}
/*  Una vez validado todo pasamos a realizar la opcion que el usuario haya escogido y lo mostramos por medio de un alert()*/
if (option === '1') {
        alert("Texto Original : "+phrase+"\n"+"Texto Cifrado : "+cipher(phrase));
    } else if(option==="2"){
        alert("Texto Original : "+phrase+"\n"+"Texto Descifrado : "+decipher(phrase));
    }

                                     //FUNCION PARA CIFRAR
function cipher(phrase){
   var StrLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.

   for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
       var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
       if(Asc<=90){                      //Rango para solo las mayusculas
          var NewAsc = (Asc-65 +33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
          var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
          StrLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.
       }                                            //en caso contrario si es MINUSCULA.
       else {
         var NewAscm = (Asc-97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
         var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
           StrLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
       }
   } return StrLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

                                        //FUNCION PARA DESCIFRAR

function decipher(phrase){
   var StrLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
   for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
       var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
       if(Asc<=90){                      //Rango para solo las mayusculas
          var NewAsc = (Asc+65 -33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
          var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
          StrLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.
       }                                            //en caso contrario si es MINUSCULA.
       else {
         var NewAscm = (Asc+97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
         var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
           StrLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
       }
   }return StrLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}
