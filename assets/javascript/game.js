//3. Create an array with the alphabet
//3. These are the computer choices. Random choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];


var wins = 0;
var losses = 0;
var guesses = 10;
var guessChoices = [];

 //2. Get user input. Get user input using keypress.Store info in variable for later use.
 document.onkeyup = function(event){
    var userGuess = event.key;

//4. Randomly selects from the options array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

//5.Use conditional statements in order to determine the results.

if (options.indexOf(userGuess) > -1) {
    
    if (userGuess === computerGuess) {
    wins++;
    guesses = 10;
    guessChoices = [];
}

if (userGuess !== computerGuess) {
    guesses --;
    guessChoices.push(userGuess);
}

if (guesses === 0) {
    guesses = 10;
    losses ++;
    guessChoices = [];

}
//Creating a variable to hold our HTML. Our HTML now keeps track of the user
//and computer guesses, and wins/losses/ties.
var html =
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guesses + "</p>" +
"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
//Display the data using getElementById.
//Set the inner HTML contents of the #game div to our htnl string.
document.getElementById("game").innerHTML = html 
}
};
