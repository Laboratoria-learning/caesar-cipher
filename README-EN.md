# CIFRADO CESAR
## ENUNCIADO
- Crea una web que pida, por medio de un _prompt()_, una frase al usuario y devuelva el mismo mensaje "encriptado" según el _algoritmo de Cifrado César_ con el parámetro de desplazamiento de **33 espacios hacia la derecha**

 Por ejemplo:

  -Texto original: _ABCDEFGHIJKLMNOPQRSTUVWXYZ_

  -Texto codificado: _HIJKLMNOPQRSTUVWXYZABCDEFG_

## OBJETIVO
- Crear un programa que **_encripte_** y **_desencripte_** una frase ingresada por el usuario, considerando que el usuario no puede ingresar campos vacios ni numeros.

### flujograma
 - Revisar el archivo Excel.xls **_flujograma cifrado cesar_** encontrada en la carpeta **_docs_** .

### pseudocódigo
   - PSEUDOCODIGO DEL CIFRADO CESAR

   -CIFRADO:

   PROGRAMA: Encriptado (según el algoritmo del cifrado cesar).

   ENTRADAS: “frase” (no contener espacios ni números), 33 espacios hacia la DERECHA.

   SALIDA:”frase encriptada”.

  - MOSTRAR “ingresa una frase”;

  - LEER la frase;
  - PARA  i = 0 hasta la longitud de la frase con INCREMENTOS de +1
     - EXTRAE la equivalencia ASCII de cada letra de la frase;
     - CALCULA Letra encriptada =  Equiv.ASCII((Equiva. ASCCI de la letra -65 +(n=33)%26)+65)

    FIN PARA;
  - RETORNA “frase encriptada”

   FIN PROGRAMA.

 -DESCIFRADO:

 PROGRAMA: Desencriptado de la “frase encriptada”.

 ENTRADAS: “frase encriptada”, 33 espacios hacia la IZQUIERDA.

  - ESCRIBIR “frase encriptada”;

  - LEER “frase encriptada”;
  - PARA  i = 0 hasta la longitud de “frase encriptada” con INCREMENTOS de +1

     - EXTRAE la equivalencia ASCII de cada letra de “frase encriptada”;
     - CALCULA Letra desencriptada =  Equiv.ASCII((Equiva. ASCCI de la letra -65 –(n=33)+26)+65);

    FIN PARA;

  - RETORNA “frase desencriptada”

  FIN PROGRAMA.
