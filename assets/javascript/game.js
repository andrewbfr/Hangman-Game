$(document).ready(function(){
	var newWord = generateWord();
		// $("#correct").text(newWord);
		console.log(newWord);
	// $(document).keyup(function() {

}); //I don't know why the ready function has to be closed here.

var correctGuesses = [];
var wrongGuesses = [];
var skiBucket = ["tomahawk", "fullsend", "camber", "rocker", "avalanche", "powder", "whipper", "camming", "nuts", "rope", "sticky", "bowline", "granite", "sloper", "sandstone"];
var count = 0;
var pressed;
var newWord;
	
//working,   select random word on initial page load
function generateWord() {
 	var skiNumber = Math.floor(Math.random() * skiBucket.length);
   	var rand = skiBucket[skiNumber];
   	return rand;

	};

// var ccNum; // declaration in an outer scope
// //from stack overflow
// $('#authorizenet_cc_number').keyup(function(){
//     // no need to reselect on the input, just use "this"
//     ccNum = $(this).val(); // initialization in an inner scope
//     console.log(ccNum); // logs the value
// });

// console.log(ccNum); // also logs the value (if called after the handler has fired)

//try to copy to this use, which is a global listener storing new keyup events
//in the variable "pressed"

// $( document ).on( "keyup", function( event ) {
//   $( "#wrong" ).append( event.type + ": " +  event.which );
//   	var guessedLetter = String.fromCharCode(event);
//   	console.log(event);
//   	console.log("a");
// });

// window.addEventListener("keyup", function (event);
// function letterGuessed(){
// 	document
// 	var guessedLetter = String.fromCharCode(event); 

// };
$( document ).on("keyup", function(){
	function uniCharCode(event) {
    var key = event.keyCode;
    $("#wrong").append(key);
    console.log(key);
}
});

// $(document).keypress(function () {
// 	pressed = $(this)

// 	};
//put guesses of characters not present in the randomly generated word into
//a specified div

function showIncorrectGuesses(wrongGuess) {
  wrongGuesses.push(wrongGuess);
  $('#wrong').text(wrongGuesses.toString());  
}

function showCorrectGuesses(correctGuess) {
  correctGuesses.push(correctGuess);  
  $('#correct').text(correctGuesses.toString());
}

function checkGuess(word, key) {
  return word.includes(key);
}

 



// function showCorrectGuesses(character){};






// function checkIfCharPresent(word, character){
// 	if (word.includes(character)){ 
// 		return true;

// 	}
// 	else {
// 		return false;
// 	}
// };

// function finishFail(){
// 	//if length of var array in guessed letters is = 15, game fails
// 	//and moves to a new word, emptying the letter guess storage divs
// 	if (wrongGuesses.length = 15)
// 	{

// 		generateWord();
// 	}
	
// 			//else, continue putting letters into guessed letter array
// 			//and storage divs
// 	};

  
     // Here we take the guesses the user has tried -- then display it as letters
     //separated by commas.





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







