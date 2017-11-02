function cipher(sentence, newSentence){
    sentence = prompt("Ingrese frase");
    
    for(var i=0; i<sentence.length; i++){
     var convertToASCII = sentence.charCodeAt(i);
      newSentence = ((convertToASCII - 65 + 33) % 26 + 65);
      if(sentence === sentence.toUpperCase ){
        return newSentence;
      }
      else if(sentence === " " || sentence === sentence.length){
        alert("ERROR");
      }
      
    }
    return newSentence;
  }
  
  
  function descipher (sentence, newSentence){
    
  }
