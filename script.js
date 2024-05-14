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


    let playerSelection = this.innerHTML;
    let random_choices = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[random_choices];

    let result = playRound(playerSelection,computerSelection);
    console.log(result)
    console.log(playerSelection)
    console.log(computerSelection)
    if (result == "You win!") {
        user = user + 1;
    } else if (result == "You lose!") {
        computer = computer + 1
    } 
}

const btn = document.querySelector("#btn1");
btn.addEventListener("click", playGame);

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", playGame);

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", playGame);