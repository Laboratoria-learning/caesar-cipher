var phrase = prompt('Write here');

function cipher(word) {
  var strCipher = '' ; 
  for (var i = 0; i < word.length; i++) {
    // turn word into ASCII code.
    var letter = word.charCodeAt(i);  
    // if 'word' is uppercase...
    if (Number.isNaN(parseInt(word)) && 65 <= letter && letter <= 90 && word !== '') {
      // using the formula.   
      var num = (letter - 65 + 33) % 26 + 65;
      // num into string
      strCipher = + String.fromCharCode(num);
      // if 'word' is lowercase...
    } else if (Number.isNaN(parseInt(word)) && 97 <= letter && letter <= 122 && word !== '') {                           
      // using the formula.  
      var num2 = (letter - 97 + 33) % 26 + 97;
      // num into string
      strCipher = strCipher + String.fromCharCode(num2);
    } else {
      alert('Write Again, please.');
    } 
  }
  return alert(strCipher);
}  
cipher(phrase);


function decipher(word) { 
  var strDecipher = '' ; 
  for (var i = 0; i < word.length; i++) {
    var letter = word.charCodeAt(i);  
    
    if (Number.isNaN(parseInt(word)) && 65 <= letter && letter <= 90 && word !== '') {
      // añadir la formula y almaceno en num   
      var num = (letter - 65 + 26) % 26 + 65;
     
      strDecipher = strDecipher + String.fromCharCode(num);
    } else if (Number.isNaN(parseInt(word)) && 97 <= letter && letter <= 122 && word !== '') {      
      var num2 = (letter - 97 + 26) % 26 + 97;
      strDecipher = strDecipher + String.fromCharCode(num2);
    } else {
      alert('Write Again, please.');
    } 
  }
  return alert(strDecipher);
}  
decipher(phrase);