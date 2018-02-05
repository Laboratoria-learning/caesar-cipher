let phrase = prompt('Write here');
let phraseArr = phrase.split('');
// console.log(Array.isArray(phraseArr)); // ["abc"]

const cipher = word => {
  // debugger;
  // Verificando si es una palabra y diferente de vacia además de que no tenga espacios.
  if (Number.isNaN(parseInt(word)) && word !== '') {
    let strCipher = '';
    let positionOfLetter;
    // En lugar de for se usará filter para recorrer la frase palabra por palabra
    let positionPhraseLetter = phraseArr.filter((position) => { // Iteración de las palabras de phrase
      positionOfLetter = phraseArr.indexOf(position);
      // console.log(positionOfLetter); // retorna su posición
      // // regresa el codigo en número ascii
      let letter = word.charCodeAt(positionOfLetter);
      // console.log(letter); // retorna su codigo ascii
      // para mayúsculas
      if (letter >= 65 && letter <= 90) {
        let num = (letter - 65 + 33) % 26 + 65;
        console.log(num);
        strCipher += String.fromCharCode(num);
        console.log(strCipher);
        // para minúsculas
      } else if (letter >= 97 && letter <= 122) {
        // usando fórmula  
        let num2 = (letter - 97 + 33) % 26 + 97;
        // num a string
        strCipher += String.fromCharCode(num2);
        console.log(strCipher);
      }
    });
    console.log(positionOfLetter);
    return alert(`Your cipher number is ${strCipher}`);
  } else {
    alert('Write Again, please.');
  }
};
cipher(phrase);


const decipher = word => {
  if (Number.isNaN(parseInt(word)) && word !== '') {
    let strDecipher = '';
    let positionOfLetter;
    let positionPhraseLetter = phraseArr.filter((position) => {
      positionOfLetter = phraseArr.indexOf(position);
      let letter = word.charCodeAt(positionOfLetter);
      if (65 <= letter && letter <= 90) {
        // añadir la formula y almaceno en num   
        let num = (letter - 65 + 26) % 26 + 65;
        strDecipher += String.fromCharCode(num);
      } else if (97 <= letter && letter <= 122) {
        let num2 = (letter - 97 + 26) % 26 + 97;
        strDecipher += String.fromCharCode(num2);
      }
    });
    return alert(`Your decipher number is ${strDecipher}`);
  }
  // else {
  //   alert('Write Again, please.');
  // }
};
decipher(phrase);