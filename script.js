let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

const scoreDisplay = document.querySelector("#score");
const result = document.querySelector("#result");
const body = document.querySelector("body");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    const div = document.createElement("div");
    if (playerSelection == computerSelection) {
        div.textContent = "Tie!";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            div.textContent = "You Win! Paper beats Rock";
            updateScore("player");
        } else if (computerSelection == "scissors") {
            div.textContent = "You Lose! Scissors beats Paper";
            updateScore("computer");
        }
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            div.textContent = "You Win! Rock beats Scissors";
            updateScore("player");
        } else if (computerSelection == "paper") {
            div.textContent = "You Lose! Paper beats Rock";
            updateScore("computer");
        }
    } else {
        if (computerSelection == "paper") {
            div.textContent = "You Win! Scissors beats Paper";
            updateScore("player");
        } else if (computerSelection == "rock") {
            div.textContent = "You Lose! Rock beats Scissors";
            updateScore("computer");
        }
    }
    const result = document.querySelector("#result");
    result.appendChild(div);
}

function updateScore(winner) {
    if (winner == "player") {
        playerScore++;
    } else {
        computerScore++;
    }
    scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if (playerScore >= 5) {
        endGame(true);
    } else if (computerScore >= 5) {
        endGame(false);
    }
}

function endGame(playerWins) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    const div = document.createElement("div");
    if (playerWins) {
        div.textContent = "You win the game!";
    } else {
        div.textContent = "You lose the game!";
    }
    body.appendChild(div);
}