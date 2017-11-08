//Se crea la función para preguntar al usuario la frase a través de un prompt
function askPhrase() {
    do {
        var answer = prompt('Ingresar la frase a cifrar');
    } while ( answer === null || answer === '');
}

//Se crea la función cipher.

function cipher(str) {

    var arr = []; // Se crea un array vacio para guardar los códigos de las letras en ASCII.

    for (var i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { //Usamos str.charCodeAt(i) para hallar su equivalente en ASCII
            arr.push((str.charCodeAt(i) - 65 + 33) % 26 + 65); //Con arrr.push(), agregamos al arr la conversión de las letras
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 120) { // Se usa la fórmula brindada por Michelle  que es la sgte: ((x-65+n)%26+65)
            arr.push((str.charCodeAt(i) - 97 + 33) % 26 + 97); //((x-97+n)%26+97)                    
        } else(str.charCodeAt(i) < 65){
            arr.push(str.charCodeAt[i]); //para los que no son letras mayúsculas ni minúsculas.
        }
    }
    return arr; //retornar datos del array 'arr'
}
//cipher('ABC'); //(6) [72, undefined, 73, undefined, 74, undefined] lo q me sale en la consola

//Se crea la función decipher

function decipher() {

    arr2 = []; //Se crea un array vacio para almacenar los # ASCII en letras.

    for (var i = 0; i < arr.length; i++) {

        var x = arr.charCodeAt(i); //Se crea la variable x para reemplazar en las demás líneas de código.

        if (x >= 65 && x <= 90) { //Para letras mayúsculas
            arr2.push(String.fromCharCode(x)); //Con String.fromCharCode(x), lo que hace es convertir los # ASCII en letras
        } else if (x >= 97 && x <= 120) { //Para letras mayúsculas
            arr2.push(String.fromCharCode(x)); //Con push() se almacena los datos obtenidos de String.fromCharCode en arr2
        } else(x < 65) //para los que no son letras mayúsculas ni minúsculas.
            arr2.push(x);
        }
    }
    return arr2; //retornar datos del array 'arr2'
}

askPhrase(); //Llamando a la función askPhrase.