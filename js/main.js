var currentWord ;
var currentWordLength = 0;
var guessedWord = [];
var wordArray = [];
var missedLetter = 8;

var random = Math.floor((Math.random() * 100) + 1)
currentWord = commonWords[random];

currentWordLength = currentWord.length;
for(var i = 0; i < currentWordLength; i++){
  guessedWord[i] = ' _ ';
}

//put in initial word
document.getElementById('word').innerHTML="<p>" + guessedWord + "</p>";

wordArray = currentWord.split('');


//gets button from html
var currentid;

document.addEventListener('click', function(e){
  currentid = e.target.id;
  var usedLetter = document.getElementById(currentid);
  if (usedLetter.className == 'used') {
    alert('used that letter before');
    return;
  }
  var guess = false;
  usedLetter.className = ('used');
  console.log(currentid);
  wordArray.forEach(function(value, index, array){
    if (array[index] == currentid){
      guessedWord[index] = currentid;
      document.getElementById('word').innerHTML="<p>" + guessedWord + "</p>";
      console.log("that's right!");
      guess = true;
    }
  })
  if (guess = false){
    missedLetter -=1;
    }
  if (missedLetter == 0){
    alert('you lose');
    var div = docuemnt.getElementById('container');
    while(dir.firstChild){
      div.removeChild(div.firstChild);
  }
  }

});
