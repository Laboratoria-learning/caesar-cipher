// var resultado es un label donde se va imprimir el resultado
var resultado = document.getElementById("resultado");

var validate = function( cadena ){
	var alerta = true;
	if(cadena.length === 0) {
		document.getElementById("resultado").innerHTML = '';
		alerta = 'Error. el campo esta vacio';
	}else if(!isNaN(cadena)){
		document.getElementById("resultado").innerHTML = '';
		alerta = 'Error. el campo solo acepta texto';
	}
	return alerta;
};

var cipher = function(){
    //Obtener el valor de lo que ingresa el usuario input type=text
    var cadena = document.getElementById("entrada").value;

	var valid = validate( cadena );
	if( valid !== true ){ alert( valid ); return; }

    var caracteres = []; //creamos un array
    var caracteresCipher =[];
    //Recorrer la cadena que es el texto ingresado por el usuario
    for ( var i = 0; i < cadena.length; i++){
        caracteres[i] = cadena.charAt(i).charCodeAt(0); // El array caracteres almacenara los caracteres especificado de una cadena
        //junto con el método charCodeAt la cual devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
    }
    for ( var n = 0; n < caracteres.length; n++){

        var cipherNumber = (caracteres[n]  - 65 + 33) % 26 + 65;
        // El array caracteres almacenara los caracteres con el método devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
        caracteresCipher.push(String.fromCharCode(cipherNumber));

       console.log(cipherNumber);
    }

        console.log(caracteresCipher.join(""));
    resultado.innerHTML = caracteresCipher.join("");//esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres.

};
console.log(cipher);

var decipher = function(){
    var cadena = document.getElementById("entrada").value; //Obtener el valor de lo que ingresa el usuario input type=text

	var valid = validate( cadena );
	if( valid !== true ){ alert( valid ); return; }

    var caracteres = cadena.split(','); //dividira cadena con una separacion de coma la cual resultara mi variable caracteres
  	    for ( var i = 0; i < cadena; i++){
			//El array caracteres almacenara cadena creada mediante el uso de una secuencia de val Unicode especificada.
    	    caracteres[i] = String.fromCharCode(caracteres[i]);
  	    }
    resultado.innerHTML = caracteres.toString();//esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres.
};
console.log(decipher);