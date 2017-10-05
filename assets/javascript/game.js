

$(document).ready(function(){
	// try this as a dual-page game later
var rockBucket = ["whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]

// use this for the game
var skiBucket = ["tomahawk, full-send, camber, rocker, avalanche, powder, pow-day, whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]


var randomWord = ""


//this is rewriting the entire element, not accruing letters
//holding command+R after a refresh removes the "Meta", there needs to be 
//a "span" element that is rewritten inside the "guessed" div.
//use the div for styling purposed and the "span" for holding text.
//make sure it begins to accrue letters

$( "#correct" ).click(function() {
  alert( "Hi, I work." );
});

//nice start
console.log("a");


$(document).keyup(function() {
    $("#guessed").css("background-color", "pink");
    });

console.log("b");

});



