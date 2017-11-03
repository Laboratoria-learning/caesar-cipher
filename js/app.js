var words = prompt('ingrese texto') ;

convertNumbers = parseInt(words) ;

console.log(convertNumbers) ;


  if ( !isNaN(convertNumbers) || words === '' ) {

      alert('error');

  }

  else {

      var noIsNumber = words ;

  }


  var cipher = function(wordX) {

      var wordUppercase = wordX.toUpperCase();

      var arr = wordUppercase ;


   for (var i=0 ; i<arr.length ; i++) {

     var  arrCharcodeAt = arr.charCodeAt(i) ;

     var arrCaesarCipher = ( arrCharcodeAt-65+33 ) % 26 + 65 ;

     var newStringCode = String.fromCharCode(arrCaesarCipher) ;

   }

   return newStringCode ;

 }


 document.write( cipher(noIsNumber) );
