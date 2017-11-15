Funcion cipher // declara la funci�n de cifrado
	Definir output,word Como Caracter // Se declara la variable donde se acumulara la salida luego de ser cifrada
	Definir keyCode,word_length,i Como Entero // Se declara la variable donde se acumular� el codigo ascii de cada letra del word a// se declara la variable l�gica e inicializa en false para controlar la validaci�n del word 'v�lido'
	Definir validateWord Como Logico // se declara la variable l�gica e inicializa en false para controlar la validaci�n del word 'v�lido'
	Repetir // se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'word' y validarla
		word <- 'Ingrese la palabra a cifrar' // Se pide que ingrese la palabra a cifrar.
		Si word_length>0 Entonces // Se condiciona en el caso que la longitud de la palabra 'word' ingresada sea mayor a 0
			keyCode <- word_charCodeAt // Obtenemos el codigo ascii de cada caracter de la palabra 'word'
			Si ((keyCode!=32) Y (keyCode<65) O (keyCode>90) Y (keyCode<97) O (keyCode>122)) Entonces // Restringimos caso que la palabra posea n�meros o caracteres invalidos
				Escribir 'Por favor ingrese una palabra v�lida' // muestra una alerta del palabra inv�lida
				cipher() // utilizando la recursividad se vuelve a llamar a la funci�n cifrado
			Sino
				validateWord <- Verdadero // toma el valor de verdadero si la palabra ingresada es v�lida
			FinSi
		Sino // En el caso que no ingrese nada nos enviara un mensaje
			Escribir 'Ha ingresado un texto vacio' // muestra el mensaje de alerta que ha ingresado una palabra vac�a
		FinSi
	Hasta Que validateWord=Falso // se volver� a realizar mientras no se halla podido validar la frase
	Para i<-0 Hasta word_length-1 Hacer // se utiliza un for para recorrer atrav�s de los caracteres del palabra 'word'
		keyCode <- word_charCodeAt // Obtenemos el codigo ascii de cada caracter de la     palabra ingresada
		Si (keyCode>=65 Y keyCode<=90) Entonces // para cifrar mayusculas
			output <- output+'String.fromCharCode((word.charCodeAt(i)-65+33)%26+65);' // se acumula el caracter cifrado obtenido de la f�rmula
		Sino
			Si (keyCode>=97 Y keyCode<=122) Entonces // para cifrar minusculas
				output <- output+'String.fromCharCode((word.charCodeAt(i)-97+33)%26+97)' // se acumula el caracter cifrado obtenido de la f�rmula
			FinSi
		FinSi
	FinPara
	Escribir output // retorna el cifrado de la palabra ingresada como resultado
FinFuncion

Funcion decipher // declara la funci�n de descifrado
	Definir output,word Como Caracter
	Definir keyCode,word_length,i Como Entero
	Definir validateWord Como Logico
	Repetir // se utiliza un do while para que ingrese por lo menos una vez a solicitar la palabra 'word' y validarla
		word <- 'Ingrese la palabra a descifrar' // Se pide que ingrese la palabra a cifrar.
		Si word_length>0 Entonces // Se condiciona en el caso que la longitud de la palabra ingresada sea mayor a 0
			keyCode <- word_charCodeAt // Obtenemos el codigo ascii de cada caracter de la  palabra ingresada word
			Si ((keyCode!=32) Y (keyCode<65) O (keyCode>90) Y (keyCode<97) O (keyCode>122)) Entonces
				Escribir 'Por favor ingrese una palabra v�lida'
				decipher() // utilizando la recursividad se vuelve a llamar a la funci�n decifrado
			Sino
				validateWord <- Verdadero
			FinSi
		Sino
			Escribir 'Ha ingresado un texto vacio'
		FinSi
	Hasta Que validateWord=Falso
	Para i<-0 Hasta word_length-1 Hacer // se utiliza un for para recorrer atrav�s de los caracteres del palabra 'word'
		keyCode <- word_charCodeAt
		Si (keyCode>=65 Y keyCode<=90) Entonces
			output <- output+'String.fromCharCode(((word.charCodeAt(i)-65+26+26-33) % 26)+65)'
		Sino
			Si (keyCode>=97 Y keyCode<=122) Entonces
				output <- output+'String.fromCharCode(((word.charCodeAt(i)-97+26+26-33) % 26)+97);)'
			FinSi
		FinSi
	FinPara
	Escribir output
FinFuncion

Algoritmo principal
	Definir validateOption Como Logico
	Definir selectOption Como Entero
	Repetir
		Segun selectOption  Hacer
			1:
				cipher()
			2:
				decipher()
			De Otro Modo:
				Escribir 'Por favor ingrese una opci�n v�lida'
		FinSegun
	Hasta Que validateOption=Falso
FinAlgoritmo

