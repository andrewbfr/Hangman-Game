

$(document).ready(function(){

// use this for the game

//nice start

	$(document).keyup(function() {
		var newWord = generateWord();
		$("#correct").text(newWord);

	});



 });//closing document.ready

var skiBucket = ["tomahawk", "full-send", "camber", "rocker", "avalanche", "powder", "pow-day", "whipper", "cam-a-lot", "tri-cam", "rope", "sticky", "figure-eight", "granite", "sloper", "sandstone"];


function generateWord() {

  	var skiNumber = Math.floor(Math.random() * skiBucket.length);
   	var rand = skiBucket[skiNumber];
   	return rand;

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








