# Cifrado César

## Introducción

> Este código sirve como una especie de traductor, para cifrar el texto que desees.

## Ejemplo de código

> Ejemplo:
si introduces la palabra:
Despacito, resulta elzwhjpav

## Diagrama de Flujo
[sin titulo]http://subefotos.com/ver/?c604bcb18dc5bba672d636bdbaec915ao.jpg

## Pseudocódigo
>Programa: Cifrado César

    función cifrar( número de espacios) {
        do{
            var word=ventana('Ingrese texto');
    }while(palabra ingresada.longitud===0 || !si no es una palabra(word));
            var text = '';
            var excepto estos caracteres = /[ñ #áéíóúääëïöüàèìòù_@$]/;
              for(var i = 0; i < longuitud de la palabra; i++ aumenta de 1 en 1){
                  if(los caracteres ingresados.test(word.recorro(agrego))){
                    text+= word.recorro(agrego);
                  }else{
                    text+= letra.delcódigoAscci( 97 + (letradelcódigoAscci(i) + 7 + key )%26 );
                  }
            }
            return text;
          }  
        document.write(cifrar(33 espacios a la derecha));
