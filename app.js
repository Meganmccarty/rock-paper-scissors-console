function computerPlay() {
    let selection = Math.floor(Math.random() * Math.floor(3));
    if (selection == 0) {
        return "rock";
    } else if (selection == 1) {
        return "paper";
    } else (selection == 2)
        return "scissors";
}

console.log(computerPlay())