var cipher = function(text, displacement) {
  if (containNumber(text)) {
    alert('No puede contener numeros');
    return '';
  }
  var cipherText = ''; // se crea variable para guardar los datos
  displacement = displacement % 26; // el %26 se refiere por las 26 letras del abecedario

  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') { // la letra es minúscula
      if (String.fromCharCode(text.charCodeAt(i) + displacement) > 'z') { // si al sumarle el desplazamiento se pasa del valor ascii de z en minuscula se debe restar 26 para que regrese a un valor valido dentro del abecedario
        console.log(String.fromCharCode(text.charCodeAt(i) + displacement));
        cipherText += String.fromCharCode(text.charCodeAt(i) + displacement - 26);
      } else { // solo se suma el desplazamiento
        cipherText += String.fromCharCode(text.charCodeAt(i) + displacement);
      }
    } else if (text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') { // la letra es mayuscula
      if (String.fromCharCode(text.charCodeAt(i) + displacement) > 'Z') { // // si al sumarle el desplazamiento se pasa del valor ascii de Z en mayuscula se debe restar 26 para que regrese a un valor valido dentro del abecedario
        cipherText += String.fromCharCode(text.charCodeAt(i) + displacement - 26);
      } else { // solo se suma el desplazamiento
        cipherText += String.fromCharCode(text.charCodeAt(i) + displacement);
      }
    } else {
      cipherText += text.charAt(i);
    }
  }

  return cipherText;
};

var decipher = function(text, displacement) {
  if (containNumber(text)) {
    alert('No puede contener numeros');
    return '';
  }
  var decipherText = '';
  displacement = displacement % 26;

  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= 'a' && text.charAt(i) <= 'z') { // la letra es minúscula
      if (String.fromCharCode(text.charCodeAt(i) - displacement) < 'a') { // si al restarle el desplazamiento se pasa del valor ascii de a en minuscula se debe sumar 26 para que regrese a un valor valido dentro del abecedario
        decipherText += String.fromCharCode(text.charCodeAt(i) - displacement + 26);
      } else { // solo se resta el desplazamiento
        decipherText += String.fromCharCode(text.charCodeAt(i) - displacement);
      }
    } else if (text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') { // la letra es mayuscula
      if (String.fromCharCode(text.charCodeAt(i) - displacement) < 'A') { // si al restarle el desplazamiento se pasa del valor ascii de A en mayuscula se debe sumar 26 para que regrese a un valor valido dentro del abecedario
        decipherText += String.fromCharCode((text.charCodeAt(i) - displacement) + 26);
      } else { // solo se resta el desplazamiento
        decipherText += String.fromCharCode(text.charCodeAt(i) - displacement);
      }
    } else {
      decipherText += text.charAt(i);
    }
  }

  return decipherText;
};

var containNumber = function(text) { // verificar que la palabra no contenga numeros
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) >= '0' && text.charAt(i) <= '9') {
      return true;
    }
  }
  return false;
};

var text = prompt('Ingresar texto a Cifrar?');
document.write(cipher(text, 33));
