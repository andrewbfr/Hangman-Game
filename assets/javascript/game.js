var correctGuesses = [];
var wrongGuesses = [];


$(document).ready(function(){
	var newWord = generateWord();
		// $("#correct").text(newWord);
		console.log(newWord);
	// $(document).keyup(function() {
	// });

 });//closing document.ready



function generateWord() {
	var skiBucket = ["tomahawk", "full-send", "camber", "rocker", "avalanche", "powder", "pow-day", "whipper", "cam-a-lot", "tri-cam", "rope", "sticky", "figure-eight", "granite", "sloper", "sandstone"];
 	var skiNumber = Math.floor(Math.random() * skiBucket.length);
   	var rand = skiBucket[skiNumber];
   	return rand;

	};

// var char = event.which || event.keyCode;
    // document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;


function saveWrongGuesses(character){
	document.onkeyup = function() {
	var char = event.which;
	document.querySelector("#guessed").innerHTML = wrongGuesses.join(", " + char);
	return
	console.log(char);
}
};

// <script>
// document.getElementById("fname").onkeyup = function() {myFunction()};

// function myFunction() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }
// </script>



// function showCorrectGuesses(character){


// };



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
     

      

    

    // document.onkeyup = function(event) {
    //   var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //   wrongGuesses.push(letter);

    //   updateGuessesSoFar();


    //   };



      // Lowercase the letter, previoulsy inside onkeyup function
      // 

      // Then add the guess to the wrongGuesses array
     
	//developing functions for each step in the process





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







