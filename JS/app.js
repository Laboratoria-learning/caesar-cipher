var phrase = prompt('Ingresa la frase a decodificar');
var newarray = [];
var unicode = [];

function cipher(str) {
  var array = phrase.split('');
  for (i = 0; i <= array.length - 1;i++) {
    unicode.push(phrase.charCodeAt(i));
  }

  for (i = 0; i <= unicode.length - 1; i++) {
    newarray.push((unicode[i] - 65 + 33) % 26 + 65);
  }
  return newarray;
}
var arr = cipher(phrase);
function decipher(array2) {
  var arr2 = [];
  for (i = 0; i <= array2.length - 1; i++) {
    arr2.push(String.fromCharCode(array2[i]));
    return arr2;
  }
  if (isNaN(phrase) === false) {
    'Ingrese una frase por favor';
  } else {
  }
}
decipher(arr);
