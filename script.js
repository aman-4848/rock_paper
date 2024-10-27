const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ) {
        return "computer";
    } else {
        return "player";
    }
}

let scorePlayer = 0;
let scoreComputer = 0;

function makeChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);

    if (winner === "player") {
        scorePlayer++;
        document.getElementById("resultText").innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (winner === "computer") {
        scoreComputer++;
        document.getElementById("resultText").innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        document.getElementById("resultText").innerText = "It's a draw!";
    }

    // Update scores
    document.getElementById("playerText").innerText = `Player: ${scorePlayer}`;
    document.getElementById("computerText").innerText = `Computer: ${scoreComputer}`;

    // Check if the game is over
    if (scorePlayer === 5 || scoreComputer === 5) {
        document.getElementById("resultText").innerText = scorePlayer > scoreComputer ? 
            "Game Over! Player wins the game!" : 
            "Game Over! Computer wins the game!";
        resetGame();
    }
}

function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    document.getElementById("playerText").innerText = "Player: 0";
    document.getElementById("computerText").innerText = "Computer: 0";
    document.getElementById("resultText").innerText = "Result:";
}
