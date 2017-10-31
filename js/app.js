//crea una web que pida por medio de un prompt() una frase al usuario y devuelva el mismo mensaje
var imput = prompt("escribe una texto")
function caesar(texto) {
 var output="";
 var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ"
 for (var i=0; i<texto.length;i++){
 		output += String.fromCharCode(texto.charCodeAt(i));
  };

  return output
}
