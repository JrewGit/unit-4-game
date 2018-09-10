//Randomly generated number
var computerRandomNumber = Math.floor((Math.random() * 120) + 19);

//Adds the randomly generated number to the DOM
$("#computerGuess").text(computerRandomNumber);

//Declares the win and loss variables
var wins = 0;
var losses = 0;

//Declares the state of the game
var winner = false;
var lossUpdated = false;

//Assigns a random number to each image
var userRandomEmerald = (Math.floor(Math.random() * 13) + 1);
var userRandomRuby = (Math.floor(Math.random() * 13) + 1);
var userRandomSapphire = (Math.floor(Math.random() * 13) + 1);
var userRandomAmethyst = (Math.floor(Math.random() * 13) + 1);

// Declares the userScore variable to the DOM
var userScore = 0;
$("#userGuess").text(userScore);

//Creates a reset function
function reset() {
    computerRandomNumber = Math.floor((Math.random() * 120) + 19);
    $("#computerGuess").text(computerRandomNumber);
    userScore = 0;
    $("#userGuess").text(userScore);
    userRandomEmerald = (Math.floor(Math.random() * 13) + 1);
    userRandomRuby = (Math.floor(Math.random() * 13) + 1);
    userRandomSapphire = (Math.floor(Math.random() * 13) + 1);
    userRandomAmethyst = (Math.floor(Math.random() * 13) + 1);
    $("#message").html("");
    winner = false;
    lossUpdated = false;
}

//Creates an onclick function to call the reset function
function restart() {
    $("#message").click(function () {
        reset();
    })
};

//Checks to see if userGuess is equal to/over computerRandomNumber 
function winChecker() {
    if (userScore === computerRandomNumber) {
        wins++;
        $("#win").text(wins);
        $("#message").html('<h4 id="winMessage">Congrats you win! Click Me to play again!</h4>');
        restart();
        winner = true;
    } else if ((userScore > computerRandomNumber) && (winner === false) && (lossUpdated === false)) {
        losses++;
        $("#loss").text(losses);
        $("#message").html('<h4 id="lossMessage">Sorry you lost! Click Me to play again!</h4>');
        restart();
        lossUpdated = true;
    };
};

$(document).ready(function () {

    //Shows the sum of all of the users guesses in the DOM
    $("#emerald").click(function () {
        userScore = userScore + userRandomEmerald;
        $("#userGuess").text(userScore);
        winChecker();
        console.log(userRandomEmerald);
    })

    $("#ruby").click(function () {
        userScore = userScore + userRandomRuby;
        $("#userGuess").text(userScore);
        winChecker();
        console.log(userRandomRuby);
    })

    $("#sapphire").click(function () {
        userScore = userScore + userRandomSapphire;
        $("#userGuess").text(userScore);
        winChecker();
        console.log(userRandomSapphire);
    })

    $("#amethyst").click(function () {
        userScore = userScore + userRandomAmethyst;
        $("#userGuess").text(userScore);
        winChecker();
        console.log(userRandomAmethyst);
    })

});





