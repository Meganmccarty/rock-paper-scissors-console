/* Variables to hold the scores */
let player = 0;
let computer = 0;

/* Function to get computer's choice (rock, paper, scissors) */
function computerPlay() {
    let selection = Math.floor(Math.random() * Math.floor(3));
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else (selection == 2)
        return "scissors";
}

/* Function to play a round of rock, paper, scissors */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie! You both chose rock!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computer++;
        return "You lose! The computer's paper beats your rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        player++;
        return "You win! Your rock beats the computer's scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        player++;
        return "You win! Your paper beats the computer's rock!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! You both chose paper!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computer++;
        return "You lose! The computer's scissors beat your paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computer++;
        return "You lose! The computer's rock beats your scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        player++;
        return "You win! Your scissors beat the computer's paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! You both chose scissors!";
    }
}
/* Function to gather player's choice, initiate round of game, and display results */
function game() {
    let playerInput = prompt("Enter your selection (rock, paper, or scissors)");
    let playerChoice = playerInput.toLowerCase();
    let result = playRound(playerChoice, computerPlay()) + " Player: " + player + " Computer: " + computer;
    alert(result);
}
/* Loop to play 5 rounds of game before displaying final results */
for(i = 0; i<5; i++) {
    game();
}
/* Conditional to display final game results after playing 5 rounds */
if (player > computer) {
    alert("You won the game against the computer! Refresh the page to play again!");
} else if (computer > player) {
    alert("You lost the game against the computer! Refresh the page to play again!");
} else {
    alert("The game is a draw! Refresh the page to play again!");
}
