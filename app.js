
var message = prompt('¿Cual es tu secreto?');

function cipher(message){
  var array = [ ];
  var cesarPosition = [ ];
  var normalPosition = [ ];
  for(var i = 0; i<message.length;i++){
    array.push(message[i]);
    var lettersPosition = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25};
    var properties = Object.keys(lettersPosition);

    for(var j = 0; j<properties.length;j++){
      if(properties[j]===array[i]){
        normalPosition.push(lettersPosition[properties[j]]);
        normalPosition[i] += 33 % 26;

      }
    }
  }

  return alert(normalPosition + ' ' + 'Lo siento, no pude terminar :( !!!)');
}

cipher(message);
