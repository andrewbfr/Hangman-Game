$(document).ready(function(){
	var newWord = generateWord();
		// $("#correct").text(newWord);
		console.log(newWord);
	

}); //I don't know why the ready function has to be closed here.
//could also cause some scoping issues later on..

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


//does this work? trying it
var pressed = 
	$( document ).on("keyup", function uniCharCode(event){
    var key = event.keyCode;
    var guessedLetter = String.fromCharCode(key);
    console.log(guessedLetter);
    $("#wrong").append(guessedLetter);
});
	//this is finally FINALLY working..........


	console.log(pressed);
	//although its logging the entire document..
//now I need to check if the letter is present in the randomWord, 
//which is the value of newWord.


//how do I insert "newWord" and "guessedLetter" into this funciton as ...arguments?
//scope is difficult to manage this way
//I have a random word and key press events stored as variables.
//i want to see if the string value of random word contains the char from
//key press events.
// IF this returns as present (true) then I want it to display (inner.HTML or .append) 
//in #correct span
//else, display (inner.HTML or .append) in "#wrong"

var checkEm = function() {
	var check = newWord;
	var letter = check.includes(pressed);
	if (letter === true) {
		$("#correct").append(pressed);
	}
		else {
			$("#wrong").append(pressed);
		}
};
console.log(checkEm);
//this is logging the whole function


//or maybe better as this

//from w3 schools
// string.includes(searchvalue, start)
// function myFunction() {
//     var str = "Hello world, welcome to the universe.";
//     var n = str.includes("world");
//     document.getElementById("demo").innerHTML = n;
// }

//put guesses of characters not present in the randomly generated word into
//a specified div

// function showIncorrectGuesses(wrongGuess) {
//   wrongGuesses.push(wrongGuess);
//   $('#wrong').text(wrongGuesses.toString());  
// }

// function showCorrectGuesses(correctGuess) {
//   correctGuesses.push(correctGuess);  
//   $('#correct').text(correctGuesses.toString());
// }

// function checkGuess(word, key) {
//   return word.includes(key);
// }


//reset function, I think.

function reset(){
	if (correctGuesses === newWord) {
		generateWord()
	}
}
 




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







