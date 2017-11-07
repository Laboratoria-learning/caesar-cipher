# Cifrado Cesar

## Introduction

En criptografía, el cifrado César, también conocido como cifrado por desplazamiento, código de César o desplazamiento de César, es una de las técnicas de cifrado más simples y más usadas. Es un tipo de cifrado por sustitución en el que una letra en el texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto. Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la derecha de la A), la B sería reemplazada por la E, etc.
En este programa usted podrá elegir la opción de desplazamiento, ingresando la frase y la clave.

## Diagramas de Flujo

> Para la solución del programa se presenta el diagrama de flujo.

![Ingreso de datos](assets/docs/img1.jpg "Ingreso de datos")
 * En la imagen el diagrama de flujo corresponde al ingreso y validación de datos ingresados, una vez ingresados se invoca a la función cipher o decipher.

![Cipher][1]  ![Decipher][2]

  [1]: assets/docs/img2.jpg
  [2]: assets/docs/img3.jpg

  * Diagrama de flujo de las funciones de cifrado y decifrado Cesar


## Pseudocodigo

    funcion cipher(secret){
        Declarar newPhrase = ""
        para( i <- 0; i<longitud(secret); ++){
            convertir secret a Ascii
            newphrase += ((secret(i)-65+33) mod 26 +65)
        }
        Escribir newPhrase
      }

    funcion decipher(secret){
      Declarar newPhrase = ""
      para( i <- 0; i<longitud(secret); ++){
          convertir secret a Ascii
          newphrase += ((secret(i)-65-33 + 26*2 )mod 26 +65)
      }
      Escribir newPhrase
    }

    funcion validate(date){
      para( i = 0; i < longitud(date); i++){
        si((date>64 && date < 91) || (date>96 && date < 123))
          retornar date
        si no
          retornar error
      }
    }

    Cifrado cesar
    1. Para cifrar
    2. Para decifrar
    3. Salir
    Elija una opcion:

    Leer opcion
    declarar phrase
    segun(opcion)
        caso 1:
          phrase = Escribir  Ingrese texto a cifrar
          cipher(validate(phrase))
        caso 2:
          phrase = Escribir  Ingrese texto a descifrar
          decipher(validate(phrase))


    funcion cipher(secret){
      Declarar newPhrase = ""
      para( i <- 0; i<longitud(secret); ++){
        convertir secret a Ascii
        newphrase += ((secret(i)-65+33) mod 26 +65)
      }
      Escribir newPhrase
    }

    funcion decipher(secret){
      Declarar newPhrase = ""
      para( i <- 0; i<longitud(secret); ++){
        convertir secret a Ascii
        newphrase += ((secret(i)-65-33 + 26*2 )mod 26 +65)
      }
      Escribir newPhrase
    }
