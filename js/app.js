// Encription function
function cipher(word) {
  var newString = word.toUpperCase();
  var newPositionEncript;
  var positionAlphabetAscii;
  var encripWord = '';

  for (var i = 0; i < word.length;i++) {
    if (newString[i].charCodeAt() >= 65 && newString[i].charCodeAt() <= 90) {
      positionAlphabetAscii = newString[i].charCodeAt();
      // ASCII letter position
      newPositionEncript = ((positionAlphabetAscii - 65) + 33) % 26 + 65;
      // Finding the new encrypted position (with formula)
      encripWord = encripWord + String.fromCharCode(newPositionEncript);
      // concatenated from the new encryption
    } else {
      encripWord = alert('Only letters are accepted. Try again!');
      break;
    }
  }
  return encripWord;
} 


// decryption function
function decipher(message) {
  var newString = message.toUpperCase();
  var newPositionNoEncript;
  var positionAlphabetAscii;
  var noEncripWord = '';
  
  for (var j = 0; j < newString.length; j++) {
    if (newString[j].charCodeAt() >= 65 && newString[j].charCodeAt() <= 90) {
      positionAlphabetAscii = newString[j].charCodeAt();  
      // ASCII letter position
      newPositionNoEncript = ((positionAlphabetAscii - 33 + 65) % 26) + 65;  
      // finding the new deciphered position (with formula)
      noEncripWord += String.fromCharCode(newPositionNoEncript);
      // concatenated from the new decryption
    } else {
      noEncripWord = alert('Only letters are accepted. Try again!');
      break;
    }
  }
  return noEncripWord;
}


do {
  var message = '';
  var message = prompt('Enter a word:');
  
  if (message === null) {
    alert('Come back soon :) ');
    break;
  } else if (message.length === 0) {
    alert('Your message is empty, try again');
  } else {
    var menuOpc = '1.- Cipher\n ' + '2.- Decipher';
    var opc = prompt(menuOpc, 'Choose an option:');
  
    if (opc === '1') {
      cipher(message);
    } else if (opc === '2') {
      decipher(message);
    } else {
      alert('Try again');
      message = '';
    }
  }
} while (message.length === 0);