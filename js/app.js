 

var resultado = document.getElementById("resultado"); // variable resultado es el lugar donde mi elemento que se encuentra en mi html donde me mostrara el resultado el valor unicode 

var cipher = function(){
    var cadena = document.getElementById("entrada").value; //Obtener el valor de lo que ingresa el usuario input type=text
    console.log(cadena);
	if(cadena.length == 0) {
		var alerta = alert('Error. el campo esta vacio');
		return alerta;
	}else if(!isNaN(cadena)){
		var alerta = alert('Error. el campo solo acepta texto');
		return alerta; 
	};
   
    var caracteres = []; //creamos un array 
    var caracteresCipher =[];
      
 
  	    for ( i = 0; i < cadena.length; i++){ //Recorrer la cadena que es el texto ingresado por el usuario
            caracteres[i] = cadena.charAt(i).charCodeAt(0); // El array caracteres almacenara los caracteres especificado de una cadena 
            //junto con el método charCodeAt la cual devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
        }
        for ( n = 0; n < caracteres.length; n++){
            
            var cipherNumber = (caracteres[n]  - 65 + 33) % 26 + 65
            caracteresCipher.push(String.fromCharCode(cipherNumber));//// El array caracteres almacenara los caracteres con el método devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
           

           console.log(cipherNumber);
        }

             
    resultado.innerHTML = caracteresCipher.toString();//esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres. 
};

var decipher = function(){
    var cadena = document.getElementById("entrada").value; //Obtener el valor de lo que ingresa el usuario input type=text
    console.log(cadena);
    
    var caracteres = cadena.split(','); //dividira cadena con una separacion de coma la cual resultara mi variable caracteres
 
  	    for ( i = 0; i < cadena; i++){
    	    caracteres[i] = String.fromCharCode(caracteres[i]);//// El array caracteres almacenara los caracteres con el método devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
  	    }
    resultado.innerHTML = caracteres.toString();//esta propiedad devuelve la sintaxis HTML (resultado) de mi array caracteres. 
};

