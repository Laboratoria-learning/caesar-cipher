# **Cifrado Cesar**

## Objetivo

Realizar el cifrado y descifrado de una *palabra* por medio de este programa.

Utilizamos el **Algoritmo de Cesar** para que letra por letra se pueda cifrar el parametro ingresado.

+ Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ

+ Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
_________________________________________________

### *PseudoCodigo:*

~~~ 
Algoritmo Cifrado de César

INICIO

Función cipher(message)
    newString <- message.toUpperCase()
Para (j = 0; j < newString.length; j++)
Si newString[j] >= 65 y newString <= 90 Entonces
positionAlphabetAscii <- newString[j].charCodeAt()
newPositionEncript <- aplicamos formula de cifrado de cesar a positionAlphabetAscii
encriptWord += newPositionEncript
~~~

~~~
Si no Entonces
encriptWord <- alert('Solo se aceptan letras. Intentalo  nuevamente!')
Fin Si
Fin Para

Retornar encriptWord

Fin Función
~~~

~~~
Función decipher(message)
newString <- message.toUpperCase()
Para (j = 0; j < newString.length; j++)
Si newString[j] >= 65 y newString <= 90 Entonces
positionAlphabetAscii <- newString[j].charCodeAt()
newPositionEncript <- aplicamos formula de decifrado de cesar a positionAlphabetAscii
encriptWord += newPositionEncript
~~~

~~~
Si no Entonces
encriptWord <- alert('Solo se aceptan letras. Intentalo  nuevamente!')
Fin Si
Fin Para

Retornar encriptWord

Fin Función
~~~

~~~
Hacer message <- prompt('Ingrese una palabra')
Si message === null
alert('Regresa pronto :) ')
Si no si message.length === 0 Entonces
alert('Tu mensaje esta vacio intentalo nuevamente')
Si  no menuOpc = '1.-Cifrar\n' + '2.-Decifrar' Entonces
opc <- prompt(menuOpc, 'Elige una opción:')
Si opc === '1' Entonces
Llamar Función cipher
Si no si opc === '2' Entonces
Llamar Función decipher
Si no Entonces
alert('Intentalo nuevamente')

Fin Si
Repetir Mientras (!message)
Fin
~~~
_________________________________________________
#### Diagrama de Flujo:

![recursos](https://github.com/NishiAicchi/WonderTeam-CifradoCesar/blob/master/assets/docs/recursos.jpg)
