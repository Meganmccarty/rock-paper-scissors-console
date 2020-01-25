let player = 0;
let computer = 0;

function computerPlay() {
    let selection = Math.floor(Math.random() * Math.floor(3));
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else (selection == 2)
        return "scissors";
}

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

function game() {
    let playerInput = prompt("Enter your selection (rock, paper, or scissors)");
    let playerChoice = playerInput.toLowerCase();
    let result = playRound(playerChoice, computerPlay()) + " Player: " + player + " Computer: " + computer;
    alert(result);
}

for(i = 0; i<5; i++) {
    game();
}
