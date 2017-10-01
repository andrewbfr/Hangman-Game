var rockBucket = ["whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]

var skiBucket = ["tomahawk, full-send, camber, rocker, avalanche, powder, pow-day"]



var userGuess = document.getElementById("guessed");

//this is rewriting the entire element, not accruing letters
//holding command+R after a refresh removes the "Meta", there needs to be 
//a "span" element that is rewritten inside the "guessed" div.
//use the div for styling purposed and the "span" for holding text.
//make sure it begins to accrue letters
document.onkeyup = function(event) {
        userGuess.textContent = event.key;
      };


