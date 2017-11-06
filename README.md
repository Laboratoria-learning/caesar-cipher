# Cifrado de César

## Primer ejercicio Producto Final

Consideraciones:
1.Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26

2.El código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher

3.El usuario no debe poder ingresar un campo vacío o que contenga números.

### Diagrama de flujo

![Imagen a replicar](assets/imgs/diagrama-flujo.png)

### Pseudocódigo

~~~~

usuario ingresa datos
lee datos
procedimiento cipher
para (var i=0; i<word.length;i++)
Si datos es igual a string y no está vacío
convertir a mayúsculas
ubicar valor ASCCI
Aplicar cifrado Cesar
Almacenar en array
fin para
procedimiento decipher
para (var i =0; i<word2.length;i++)
ubicar valor ASCCI
Aplicar cifrado Cesar
Almacenar en array
fin para

~~~~