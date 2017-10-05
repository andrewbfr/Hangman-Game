# Hangman-Game
-Initial version of basic hangman game, HTML elements updated by JS.

!Core Layout
**This will obviously change, is subject to change, deletion, and being ignored

-Display the following on the page:

- Some kind of Header

-<div> Press any key to get started!

-<div> Wins: (# of times user guessed the word correctly).

   * <div> If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

 -<div> losses

-<div> Number of Guesses Remaining: (# of guesses remaining for the user).

-<div> Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

-After the user wins/loses the game should automatically choose another word and make the user play it.

-consider two options at a failed attempt
	1. alert allowing to show the answer
	2. alert, if false (cancel), putting word back into word bucket to call again later

-Consider two themes, selectable with a prompt (Boolean), choosing "rock-climbing" or "outdoor activities"


*Functionality

-eventListeners "document.onkeyup = function(event) {
        var name.textContent = event.key;
      };"

-onKeyUp "document.getElementById"

-how to define limits on number of guesses?

-start with a for-loop to list each word in a div.

-.attr(display:hidden) as long as the guess is incorrect, so if "correct guess"

		else attr.(display: hidden)