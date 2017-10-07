

$(document).ready(function(){
	var newWord = generateWord();
		// $("#correct").text(newWord);
		console.log(newWord);
// use this for the game

//nice start

	// $(document).keyup(function() {
		

	// });



 });//closing document.ready

var skiBucket = ["tomahawk", "full-send", "camber", "rocker", "avalanche", "powder", "pow-day", "whipper", "cam-a-lot", "tri-cam", "rope", "sticky", "figure-eight", "granite", "sloper", "sandstone"];


function generateWord() {

  	var skiNumber = Math.floor(Math.random() * skiBucket.length);
   	var rand = skiBucket[skiNumber];
   	return rand;

	}

var guessedLetters = [];

      var updateGuessesSoFar = function() {
      // Here we take the guesses the user has tried -- then display it as letters separated by commas.
      document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");

      

    };

    document.onkeyup = function(event) {
      
      

      // Lowercase the letter
      var letter = String.fromCharCode(event.keyCode).toLowerCase();

      // Then add the guess to the guessedLetters array
      guessedLetters.push(letter);

      updateGuessesSoFar();


      }
	//developing functions for each step in the process
function showCorrectGuesses(character){

}

function saveIncorrectGuesses(character){

}

function checkIfCharPresent(word, character){
	if (word.includes(character)){ 
		return true;

	}
	else {
		return false;
	}
}


//Game can choose a random string from the array, the whole page can listen to the onkey 
//events, append the onkey events to an html element, 

//Would like the random word generator to select an array value once and hold it until 
//the guessed div string equals the string from the random word generator. 

//Want the game to display guessed characters not present in the random word generated 
//string inside another div.

//want to have a counter, 15 onkeyup events permitted to get the guessed string values 
// equal to the randomWord

//alert some message when the two strings are equal. can strings be "equal"? or 
//is that only a relevant thing for numbers







