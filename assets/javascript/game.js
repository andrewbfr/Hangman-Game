var rockBucket = ["whipper, cam-a-lot, tri-cam, rope, sticky, figure-eight, granite, sloper, sandstone"]

var skiBucket = ["tomahawk, full-send, camber, rocker, avalanche, powder, pow-day"]



var userGuess = document.getElementById("guessed");

//this is rewriting the entire element, not accruing letters
document.onkeyup = function(event) {
        userGuess.textContent = event.key;
      };


