# Funcion cipher()

1. Crear una funcion llamada cipher que cifre el texto ingresado  : **function cipher()**

2. Creamos una variable texto por medio del cual el usuario con un prompt ingresa la palabra a cifrar :
  **var texto=prompt("Ingrese un texto");**

3. Creamos una variable cifrado que contenga las letras del texto a cifrar : **var cifrado ="";**

    3.1 **for(var i=0; i<texto.length; i++)** *//el for recorrera las letras del texto a cifrar//*

    3.2 **if (parseInt(texto[i])%1 === 0)** *//condicionar para no ingresar numeros//
      texto = prompt("Por favor ingrese un texto sin numeros ni espacios");*

    3.3 aplicar formula para cifrar:
      **var ubicacionCesar=(texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;

      var palabraCifrada= String.fromCharCode(ubicacionCesar);**

    3.4 acumular las letras cifradas
        **cifrado+= palabraCifrada;**

4. Retornar el texto cifrado : **return cifrado;**

# Funcion decipher()

5. Crear una funcion llamada decipher que descifre el texto ingresado inicialmente: **function decipher(cifrado)**

    5.1. creamos una alerta como la palabra cifrada inicialmente como referencia : **alert ("Palabra Cifrada: " + cifrado);**

6. Se crea una variable llamada descifrar que contenga las letras del texto a cifrar: **var descifrado ="";**

    6.1 **for(var j=0; j<cifrado.length; j++)** *//el for recorrera las letras del texto a descifrar//*

    6.2. Aplicamos las formulas para descifrar el texto:
         **var ubicacionDescifrado = (cifrado.charCodeAt(j) + 65 - 33) % 26 + 65;
           var palabraDescifrada= String.fromCharCode(ubicacionDescifrado);**
    6.3 Acumular las letras descifradas:
         **descifrado+=palabraDescifrada;** *//acumular las letras descifradas//*
7. Retornar el texto descifrado: **return descifrado;**

8. Llamas a la funcion: **decipher(cipher());**

*Nota: en el siguiente enlace se encuentra el link del flujograma.*

https://subefotos.com/ver/?899826d7aef7ed6b989a1d12bb18ca00o.png#codigos
