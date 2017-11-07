function cipher(){
  var frase=prompt('Ingresa una frase'); //ingresando la frase

  for(var i=0; i<frase.length; i++){ //recoriendo la frase y de limitando

    while(frase(i)==' '){ // condicionar para evitar los espacios vacios
      frase=prompt('Ingresa una frase sin espacios');//peticion de volver a ingresar la frase
    }
  }
  return frase.toUpperCase();//para que retorne en mayuscula
}

function decipher(texto){ // el descifrasado

  var clave =prompt('Ingresa la clave'); // peticion de la clave

  var output=' ';// evitando el ingreso de espacios vacios

  clave = parseInt(clave);//mi clave en numeros
  
  for(i=0; i<clave.length; i++){ //recorriendo y delimitando mi clave

    var formula = (texto.charCodeAt(i) 65 + clave) % 26 + 65;//aplicando la formula a mi frase con el codigo ASCII  y aplicando el charCodeAt
    
    var string = String.fronCharCode(formula); //aplicando fronCharCode para saber la letra de mi frase
    output += string; // la letra que me da
  }

return output; // mi retorno de la funcion

}
decipher(cipher()); // el llamado a mi funcion
