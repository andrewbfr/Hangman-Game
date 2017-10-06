

$(document).ready(function(){
	// try this as a dual-page game later
var rockBucket = ["whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]

// use this for the game
var skiBucket = ["tomahawk, full-send, camber, rocker, avalanche, powder, pow-day, whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]

//nice start
	console.log("a");

	$(document).keyup(function() {
	function generateWord() {

	console.log("b");
   //	return skiBucket[Math.floor(Math.random() * skiBucket.length)];
   	var rand = skiBucket[Math.floor(Math.random() * skiBucket.length)];
	$("#correct").text(rand);

	};

	console.log("c");

	});


	// var rand = skiBucket[Math.floor(Math.random() * skiBucket.length)];
	// $("#correct").text(rand);





//this is rewriting the entire element, not accruing letters
//holding command+R after a refresh removes the "Meta", there needs to be 
//a "span" element that is rewritten inside the "guessed" div.
//use the div for styling purposed and the "span" for holding text.
//make sure it begins to accrue letters















 });//closing document.ready



