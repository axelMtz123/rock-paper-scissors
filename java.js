// ===== Get computer choice =====
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// ===== Get player choice =====
function getUserChoice() {
    let choice = prompt("Pick your weapon: rock, paper, or scissors");
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice! Pick rock, paper, or scissors");
    }
    console.log(`You picked: ${choice}`);
    return choice;
}

// ===== Decide winner for a round =====
function playRound(player, computer) {
    if (player === computer) {
        console.log(`Tie! Both chose ${player}`);
        return "tie";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        console.log(`You win! ${player} beats ${computer}`);
        return "win";
    } else {
        console.log(`You lose! ${computer} beats ${player}`);
        return "lose";
    }
}

// ===== Score tracking =====
let playerScore = 0;
let computerScore = 0;

// ===== Game loop =====
while (playerScore < 5 && computerScore < 5) {
    const player = getUserChoice();
    const computer = getComputerChoice();
    const result = playRound(player, computer);

    if (result === "win") playerScore++;
    if (result === "lose") computerScore++;

    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
}

// ===== End game =====
if (playerScore === 5) {
    console.log("Congratulations! You won the game!");
} else {
    console.log("Game over! The computer won!");
}