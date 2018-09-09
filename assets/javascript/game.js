//Randomly generated number
var computerRandomNumber = Math.floor((Math.random() * 120) + 19);

//Adds the randomly generated number to the DOM
$("#computerGuess").text(computerRandomNumber);

//Declares the win and loss variables
var wins = 0;
var losses = 0;

//Adds the win and loss results to the DOM
$("#results").append(`<h4>wins = ${wins}</h4>`);
$("#results").append(`<h4>losses = ${losses}</h4>`);

var userRandomNumber = (Math.floor(Math.random() * 13) + 1);

// Declares the userScore variable to the DOM
var userScore = 0;
$("#userGuess").text(userScore);

//Shows the sum of all of the users guesses in the DOM
$("#emerald").click(function() {
    $("#userGuess").text(userScore = userScore + userRandomNumber);
})

$("#ruby").click(function() {
    $("#userGuess").text(userScore = userScore + userRandomNumber);
})

$("#sapphire").click(function() {
    $("#userGuess").text(userScore = userScore + userRandomNumber);
})

$("#amethyst").click(function() {
    $("#userGuess").text(userScore = userScore + userRandomNumber);
})


