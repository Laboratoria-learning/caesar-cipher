// Se solicita ingresar el texto a evaluar
var textOne = prompt('Ingresar texto a cifrar');

// Se codifica la función y se declaran los 2 parámetros string que será el texto ingresado anteriormente y code que es la constante. Para este ejemplo es 33
function cipher(string, code) {

// Se declaran las variables a usar de la función
  var finalStringOne = '';
  var codAsciiOne;
  var newStringOne;
  var notLetter = 0;

// Se inicializa el for evaluando cada uno de los caracteres a cifrar
  for (i = 0; i < string.length; i++) {

    // Se evalua el caso de las mayúsculas a traves de su posición. Debe estar en el rango 65-90. Se aplica la formula para cifrar
    if ((string.charCodeAt(i)> = 65) && (string.charCodeAt(i)<=90)){
			codAsciiOne = (( string.charCodeAt(i)-65+code)%26+65) }
			
			// Se evalua el caso de las minúsculas a traves de su posición. Debe estar en el rango 97-122. Se aplica la formula para cifrar
      else if ((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){
        codAsciiOne=((string.charCodeAt(i)-97+code)%26+97)}
				
				// Se evalua el resto de caracteres que no calzan en mayúsculas y minúsculas. Cambia el estado inicial declarado
      else { notLetter = 1;}
				
			// Luego de aplicar la fórmula se tiene la nueva posición deseada con esta posición se obtiene el texto cifrado
	newStringOne = String.fromCharCode(codAsciiOne);
	// Se crea una variable que va concatenando los resultados anteriores y devuelve un solo valor
  finalStringOne += newStringOne}
	
	// Se ejecuta si es que en el texto se ubico otro tipo de caracteres
  if (notLetter===1){
    finalStringOne="Error. Verificar texto ingresado";}
		
		// Devuelve el valor de la nueva cadena cifrada
return finalStringOne;
alert(finalStringOne);
}


// Invoca la función, llama a los parametros asignados
cipher(textOne,33);


// //Se solicita ingresar el texto a evaluar
// var textTwo= finalStringOne;

// //Se codifica la función y se declaran los 2 parámetros string que será el valor cifrado anteriormente y code que es la constante. Para este ejemplo es 33
// function decipher(string,code){
// 	//Se declaran las variables a usar de la función
//   var finalStringTwo="";
//   var codAsciiTwo;
//   var newStringTwo;
//   var notLetter=0;
// 	var rest=0;
	
// 	//Se inicializa el for evaluando cada uno de los caracteres a descifrar  
//   for (i=0;i<string.length;i++){

// 		/*Se evalua el caso de las mayúsculas a traves de su posición. Debe estar en el rango 65-90. 
// 		Se declara una variable resta que toma la posición actual del caracter le resta 65 y 33%26. 
// 		Si este valor es negativo a la posición del caracter le suma 65 y 26*/
//     if ((string.charCodeAt(i)>=65)&&(string.charCodeAt(i)<=90)){
//       rest=string.charCodeAt(i)-65-code%26;
//       if (rest<0){
//         codAsciiTwo=rest+65+26}
// 				else{codAsciiTwo=rest+65}}
				
// 				/*Se evalua el caso de las minúsculas a traves de su posición. Debe estar en el rango 97-122. 
// 		Se declara una variable resta que toma la posición actual del caracter le resta 97 y 33%26. 
// 		Si este valor es negativo a la posición del caracter le suma 97 y 26*/
 
//       else if ((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122)){
//         rest=string.charCodeAt(i)-97-code%26;
//         if (rest<0){
//           codAsciiTwo=rest+97+26}
//           else{codAsciiTwo=rest+97}}
				
// 					//Se evalua el resto de caracteres que no calzan en mayúsculas y minúsculas. Cambia el estado inicial declarado
//       else{notLetter=1;}
			 
// 			//Luego de aplicar la fórmula se tiene la nueva posición deseada con esta posición se obtiene el texto cifrado
// 	newStringTwo=String.fromCharCode(codAsciiTwo);
// 	//Se crea una variable que va concatenando los resultados anteriores y devuelve un solo valor
//   finalStringTwo+=newStringTwo}
	
// 	//Se ejecuta si es que en el texto se ubico otro tipo de caracteres
//   if (notLetter===1){
//     finalStringTwo="Error. Verificar texto ingresado";}
		
// 			//Devuelve el valor de la cadena descifrada
// return finalStringTwo;
// }
// decipher(textTwo,33);
