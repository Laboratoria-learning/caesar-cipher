# EJERCICIO DE CIFRADO CESAR:

## speudocodigo
* Se pedimos que el usuario ingrese su frase.
* creamos la function cipher para cifrar la frase.
* Creamos el string vacio donde se almacenara losnuevos valores.
* Recorremos la frase ingresada,Si esta en el rango de MAYUSCULA.
```[javascript]
for(i=0;i<phrase.length;i++)
```
* Obtenemos el codigo ASCII de cada letra
**Rango para solo las mayusculas**
```[javascript]
(Asc-65 +33)%26 + 65;
``` 
* deciframos el nuevo codigo con:
```[javascript]
var Newlet= String.fromCharCode(NewAsc)
```
**si el rango es de las Minusculas**
* la formula cambia
```[javascript]
(Asc-97 +33)%26 + 97;
```
* deciframos el nuevo codigo con:
```[javascript]
var Newletm= String.fromCharCode(NewAscm)
```
+ Almacenamos letra por letra dentro del nuevo String.
```[javascript]
StrLet += NewLetm;
```
* retornamos la nueva frase encriptada

[Imagen de diagrama](\CifradoC\assets).
