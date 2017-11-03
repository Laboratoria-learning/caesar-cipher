var words= prompt("ingrese texto");

convertNumbers=parseInt(words);

console.log(convertNumbers);

  if(!isNaN(convertNumbers) || words === ""){
      alert("error");
  }else{
    var noIsNumber= words;
  }


 var cipher= function(wordX){
      var a=wordX.toUpperCase();
      var arr= a;



   for(var i=0;i<arr.length;i++){
     var b= arr.charCodeAt(i) ;


     var c=(b-65+33)%26+65;
     var d= String.fromCharCode(c);

   }

   return d;
 }
 document.write(cipher(noIsNumber));
 
