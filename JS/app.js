let phrase = prompt('Write here');
let phraseArr = phrase.split('');
// console.log(Array.isArray(phraseArr)); // ["abc"]

const cipher = word => {
  let strCipher = '' ; 
  // debugger
  // En lugar de for se usará filter para recorrer la frase palabra por palabra
  let positionPhraseLetter = phraseArr.filter((position) => {
    let positionOfLetter = phraseArr.indexOf(position);
    // regresa el codigo en número ascii
    let letter = word.charCodeAt(positionOfLetter);
    // para mayúsculas
    if (Number.isNaN(parseInt(word)) && letter >= 65  && letter <= 90 && word !== '') {
      let num = (letter - 65 + 33) % 26 + 65;
      console.log(num);
      strCipher += String.fromCharCode(num);
      console.log(strCipher);
      // para minúsculas
    } else if (Number.isNaN(parseInt(word)) && letter >= 97 && letter <= 122 && word !== '') {                           
      // usando fórmula  
      let num2 = (letter - 97 + 33) % 26 + 97;
      // num a string
      strCipher += String.fromCharCode(num2);
    } else {
      alert('Write Again, please.');
    } 
    return alert(`Your cipher number is ${strCipher}`);
  });
}  
cipher(phrase);


const decipher = word => { 
  let strDecipher = '' ; 
  
  let positionPhraseLetter = phraseArr.filter((position) => {
    let positionOfLetter = phraseArr.indexOf(position);
    let letter = word.charCodeAt(positionOfLetter);  
    
    if (Number.isNaN(parseInt(word)) && 65 <= letter && letter <= 90 && word !== '') {
      // añadir la formula y almaceno en num   
      let num = (letter - 65 + 26) % 26 + 65;
     
      strDecipher += String.fromCharCode(num);
    } else if (Number.isNaN(parseInt(word)) && 97 <= letter && letter <= 122 && word !== '') {      
      let num2 = (letter - 97 + 26) % 26 + 97;
      strDecipher += String.fromCharCode(num2);
    } else {
      alert('Write Again, please.');
    } 
  });
  return alert(`Your decipher number is ${strDecipher}`);
}  
decipher(phrase);