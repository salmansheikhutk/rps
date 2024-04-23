function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    return "Tie";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";           
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!";           
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";           
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";           
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";           
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";           
    } else {
        return "No Tie";
    }
}

function playGame() {
    let user = 0;
    let computer = 0;
    let choices = ["paper","rock","scissors"];

    for (let i=0; i < 5; i++){
        let playerSelection = prompt("Enter your selection: ");
        let random_choices = Math.floor(Math.random() * choices.length);
        let computerSelection = choices[random_choices];

        let result = playRound(playerSelection,computerSelection);
        console.log(result)
        if (result == "You win!") {
            user = user + 1;
        } else if (result == "You lose!") {
            computer = computer + 1
        } 
    }
    console.log("User score: " + user + "Computer score: " + computer)
    if (user >= 3) {
        console.log("User won!")
    } else if (computer >= 3) {
        console.log("Computer won!")
    } else {
        console.log("Replay. No winner declared.")
    }
}

playGame()




