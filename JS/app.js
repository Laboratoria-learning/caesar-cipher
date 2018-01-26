$(document).ready(function() {
$('#text').focus();
//Funcion para Codificar
  $('#code').on('click', function cipher() {
      let str = $('#text').val();
      let unicode;
      let word;
      let newPhrase= '';
      for (i = 0; i <= str.length - 1; i++) {
        unicode = str.charCodeAt(i);
        word = (unicode - 97 + 33) % 26 + 97;
        let neWord = String.fromCharCode(word);
        newPhrase = newPhrase.concat(neWord);
      }
      return document.write('Tu frase codificada es: ' + newPhrase);
    });
//Función para Decodificar
  $('#decode').on('click', function decipher() {
    let str2 = $('#text').val();
    let unicode2;
    let word2;
    let newPhrase2 = '';
    for (var i = 0; i <= str2.length - 1; i++) {
        unicode2 = str2.charCodeAt(i);
        word2 = (unicode2 + 97 + 33) % 26 + 97;
        let neWord2 = String.fromCharCode(word2);
        newPhrase2 = newPhrase2.concat(neWord2);
      }
      return document.write('Tu frase decodificada es: ' + newPhrase2) ;
  });
});
