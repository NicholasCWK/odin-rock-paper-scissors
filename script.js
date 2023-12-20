function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
    } else {
        return "Invalid input";
    }
}

function game() {
    const playerSelection = prompt("Choose between Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    console.log("Player choice: " + playerSelection);
    console.log("Computer choice " + computerSelection);
    return playRound(playerSelection, computerSelection);
}

for (let i = 1; i < 6; i++) {
    console.log("Round " + i + ": " + game());
}