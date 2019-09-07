var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessArray = [];



document.onkeyup = function (event) {
    userGuess = event.key;
     if (guessArray.includes(userGuess)) {
         var html = "You already guessed: [" + userGuess + "]" ;
         return document.getElementById("game").innerHTML = html;
     } else guessArray.push(userGuess); {}
     


    if (computerGuess == userGuess) {
        alert("You Win")
        wins++;
        guessArray = [];
        guessesLeft = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    if (computerGuess != userGuess) {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        alert("You Lose")
        losses++;
        guessesLeft = 10;
        guessArray = []
    }
    var html = 
        "<p>Guess what letter I'm thinking of...</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Current Guesses: " + guessArray + "</p>";
    document.getElementById("game").innerHTML = html;

}




