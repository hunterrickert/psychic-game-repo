<script>
var computerChoices = ["r", "p", "s"];
var wins = 0;
var loses = 0;
var ties = 0;

var userChoiceText = document.getElementById("userChoice-text")
var computerChoiceText = document.getElementById("computerChoice-text")
var winsText = document.getElementById("wins-text")
var losesText = document.getElementById("loses-text")
var tiesText = document.getElementById("ties-text")

// this function is getting input from the user and picking a random index for the computer//
document.onkeyup = function (event) {
    var userGuess = event.key;
    var randomIndex = [Math.floor(Math.random() * computerChoices.length)];
    var computerGuess = computerChoices[randomIndex];

    alert("User guess" + userGuess)
    alert("Computer guess" + computerGuess)

    if (userGuess === computerGuess) {
        ties++
    }

    if (userGuess === "r" && computerGuess === "s") {
        wins++
    }

    if (userGuess === "p" && computerGuess === "r") {
        wins++
    }

    if (userGuess === "s" && computerGuess === "p") {
        wins++
    }

    if (computerGuess === "r" && userGuess === "s") {
        loses++
    }

    if (computerGuess === "p" && userGuess === "r") {
        loses++
    }

    if (computerGuess === "s" && userGuess === "p") {
        loses++
    }

    userChoiceText.textContent = "You Chose: " + userGuess;
    computerChoiceText.textContent = "Computer Chose: " + computerGuess;
    winsText.textContent = "wins" + wins;
    losesText.textContent = "loses" + loses;
    tiesText.textContent = "ties" + ties;


}

</script>