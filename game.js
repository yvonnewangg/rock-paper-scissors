const choiceArray = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll('button');
// const playerSelection = prompt("Rock, paper, scissors");
buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick(event) {
    const playerSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById("results").innerHTML = result;
}

function getComputerChoice() {
       return choiceArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "The round is a tie!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            return "Yayy you won!";
            } else {
        return "Oh no! You lost";
    }     
    } 

    // function game() {
    //     for (let i = 0; i < 5; i++) {
    //         const playerSelection = prompt("Rock, paper, scissors");
    //         const computerSelection = getComputerChoice();
    //         console.log(playRound(playerSelection, computerSelection));
    //     }
    // }

    // game();