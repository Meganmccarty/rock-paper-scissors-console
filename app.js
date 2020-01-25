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
        return "You lose! The computer's paper beats your rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Your rock beats the computer's scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Your paper beats the computer's rock!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! You both chose paper!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! The computer's scissors beat your paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! The computer's rock beats your scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Your scissors beat the computer's paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! You both chose scissors!";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection));