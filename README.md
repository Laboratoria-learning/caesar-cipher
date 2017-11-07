CIFRADO CÉSAR
=============

### Se puede acceder a este proyecto en
[Github](https://github.com/Tayrih/cifrado_cesar_power_code "Github")

Índice
------
* [Introducción](#cabecera1)
* [Pseudocódigo](#cabecera2)
* [Diagrama de flujo](#cabecera3)
* [Autoras](#cabecera4)
* [Fecha](#cabecera5)

Introducción
-------------------
Este producto se ha creado para presentarse como proyecto final del primer sprint de programación básica, que forma parte de la malla curricular de Laboratoria.

En este proyecto final, titulado “Cifrado César”, se encuentra una carpeta llamada “Javascript”, que contiene la aplicación en la que se encuentra el código del programa conformado por tres funciones: ***validación de dato***, ***cifrado*** y ***descifrado***, y un método que evalúa qué dirección tomar. Además, se encuentra un archivo HTML que presenta el despliegue de un menú con tres opciones: **cifrado**, **descifrado** y **salir**, las que ejecutan un comando en el programa. Asimismo, se encuentra un archivo markdown, titulado “README”, que incluye un enlace a este proyecto en github en la parte superior, un índice con las subdivisiones de ese contenido, una introducción al proyecto, un pseudocódigo que describe el funcionamiento del programa por medio de un lenguaje humano que facilita su entendimiento, y un diagrama de flujo que muestra de forma estructurada y ordenada cuál es el recorrido del dato que ingresa el usuario y el resultado que se imprime en la página web acompañado de un mensaje condicionado al comando por el que se haya optado.

Pseudocódigo
------------  
Funcion  cipher ( secret)
	
	definir newPhrase como caracter
	newPhrase = ''

	definir toAscci como entero
	toAscci =caracter convertido a Ascii

	Para j=0 Hasta tamaño de secret Con Paso 1 Hacer
				
		Si (toAscci > 64 y toAscci < 91) Entonces
			escribir newPhrase = newPhrase +  Ascci convertido a caracter mayusculas ((toAscci - 65 + 33) % 26 + 65));
	
		Si no si 
			(toAscci > 96 && toAscci < 123) Entonces 
			escribir newPhrase = newPhrase  + Ascci convertido a caracter minusculas((toAscci - 97 + 33) % 26 + 97));
		sino   
			escribir newPhrase;
		Fin Si
	Fin Para
	
Fin Funcion




Funcion  decipher( secret)
	
	definir newPhrase como caracter
	newPhrase = ''

	definir toAscci como entero
	toAscci =caracter convertido a Ascii

	Para i=0 Hasta tamaño de secret Con Paso 1 Hacer
				
		Si (toAscci > 64 y toAscci < 91) Entonces
			escribir newPhrase = newPhrase +  Ascci convertido a caracter mayusculas ((toAscci - 65 - 33 + 26*2) % 26 + 65));
	
		Si no si 
			(toAscci > 96 && toAscci < 123) Entonces 
			escribir newPhrase = newPhrase  + Ascci convertido a caracter minusculas((toAscci - 97 - 33 + 26*2) % 26 + 97));
		sino   
			escribir newPhrase;
		Fin Si
	Fin Para
	
Fin Funcion





Funcion  validate( date)
	
	
	Para i=0 Hasta tamaño "date" Con Paso  1 Hacer
				
		Si (el Ascii de date > 64 y el Ascii de date< 91) o (el Ascii de date > 96 y el Ascii de date < 123))
			escribir date;  //condicionamos a que solo se ingrese letras o mayusculas o minusculas pasando a ascii, una vez 					convertido condicionamosa que este entre el rango
		Si no si ((date igual valor nulo))
			escribir "Error";
		sino 
			escribir "Error";
		Fin Si
	Fin Para
	
Fin Funcion


~~~
  Segun menu
  var menu = "Mostramos al usuario un meno con opciones a elegir (1(cifrar), 2(decifrar), 3(salir );
  definir phrase como caracter;
	
	opcion_1:
		phrase = 'Ingrese un texto a cifrar'
      		ejecutar (pharse es evaluada en funcion cipher)
		escribir texto cifrado;
      break;
	opcion_2:
		phrase = 'Ingrese un texto a descifrar'
		ejecutar (pharse es evaluada en funcion decipher)
		escribir texto descifrado;
      break;
	
	De Otro Modo:
		escribir ('Gracias');
      break;
    por defecto:
      mostrar una mensaje('Vuelva a realizar el proceso, recuerde ingresar un numero valido de la lista');
      
Fin Segun
~~~

Diagrama de flujo
-----------------
![Ingreso de datos](assets/docs/img1.jpg "Ingreso de datos")

Autoras
------
* Tahirih Jaliri Pancca
* Lizbeth Félix Peña
* Gaby Mamani Flores
* Laura Jimenez Hidalgo
* Kattia Rojas
* Kamaly Zapana Lorenzo
* Shannon Rivera Aranibal
* Mily Quispe Yura

Fecha
-----
12/10/2017
