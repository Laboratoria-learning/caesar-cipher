/*//Solicitando al usuario mediante un prompt que ingrese su mensaje a cifrar.
var userMessage=prompt('Escriba mensaje a codificar');
//Creando funcion cipher que contiene como parametros a mi mensaje y mi numero fijo
function cipher(message,nfijo){
 var result=''
//Recorriendo con un for mi mensaje hasta la longitud de la misma
for(var i=0;i<message.length;i++){
//Convirtiendo con cada indice de mi letra a valor ascii
  var ascii=message.charCodeAt(i);
//Validando letras mayusculas y aplicando formula para cambiar a el valor de mi alfabeto.
  if(65<=ascii && ascii<=90){
    result+=String.fromCharCode((ascii-65+nfijo)%26+65)
  }
//Validando letras minusculas y aplicando formula para cambiar a el valor de mi alfabeto.
  else if(97<=ascii && ascii<=122){
     result+=String.fromCharCode((ascii-65+nfijo)%26+65)
      }
  else{
//Colocando alerta en caso el cliente no coloque un mensaje valido
     result = alert('Ingresar solo letras')
      }
    }
 return result
  }
//Llamando a la funcion el cual me devuelve el mensaje encriptado
var encryptedMessage=(cipher(userMessage,33))
alert(' Su mensaje es: '+ encryptedMessage);*/



//Solicitando al usuario mediante un prompt que ingrese su mensaje a descifrar.
var userMessage=prompt('Escriba mensaje a descifrar');
//Creando funcion cipher que contiene como parametros a mi mensaje y mi numero fijo
function decipher(message,nfijo){
 var result=''
//Recorriendo con un for mi mensaje hasta la longitud de la misma
for(var i=0;i<message.length;i++){
//Convirtiendo con cada indice de mi letra a valor ascii
  var ascii=message.charCodeAt(i);
//Validando letras mayusculas y aplicando formula para cambiar a el valor de mi alfabeto.
  if(65<=ascii && ascii<=90){
    result+=String.fromCharCode((ascii-nfijo)+26)
  }
//Validando letras minusculas y aplicando formula para cambiar a el valor de mi alfabeto.
  else if(97<=ascii && ascii<=122){
     result+=String.fromCharCode((ascii-nfijo)+26)
      }
  else{
//Colocando alerta en caso el cliente no coloque un mensaje valido
     result = alert('Ingresar solo letras')
      }
    }
 return result
  }
//Llamando a la funcion el cual me devuelve el mensaje descifrado
var encryptedMessage=(decipher(userMessage,33))
alert('Su mensaje es:'+ encryptedMessage);
