    // ===== Get player choice =====

const tvScreen = document.querySelector("#tv-screen");
const choices = document.querySelectorAll(".choice");
const playerScoreEl = document.querySelector(".player-score")
const computerScoreEl = document.querySelector(".computer-score")

let playerScore = 0
let computerScore = 0

// ===== Get computer choice =====
function getComputerChoice() {
    const choices = ["cat", "mouse", "dog"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// ===== Decide winner for a round =====
function playRound(player, computer) {
    if (player === computer) {
        console.log(`Tie! Both chose ${player}`);
        return "tie";
    } else if (
        (player === "cat" && computer === "dog") ||
        (player === "mouse" && computer === "cat") ||
        (player === "dog" && computer === "mouse")
    ) {
        console.log(`You win! ${player} beats ${computer}`);
        return "win";
    } else {
        console.log(`You lose! ${computer} beats ${player}`);
        return "lose";
    }
}

function playVideo(player, computer) {
    let videosrc = "";

    if (player === computer) {
        videosrc = "videos/tie.mp4";
    } 
    // Player wins
    else if (
        (player === "cat" && computer === "dog") ||
        (player === "dog" && computer === "mouse") ||
        (player === "mouse" && computer === "cat")
    ) {
        videosrc = `videos/${player}-wins.mp4`;
    } 
    // Player loses
    else {
        videosrc = `videos/${computer}-wins.mp4`;
    }

    console.log("Video source:", videosrc); // debugging
    tvScreen.src = videosrc;
    tvScreen.loop = true;
    tvScreen.controls = false;
    tvScreen.play().catch(err => console.log(err));
}

choices.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);

        if (result === "win") {
            playerScore++;
            playerScoreEl.textContent = playerScore;
        } else if (result === "lose") {
            computerScore++;
            computerScoreEl.textContent = computerScore;
        } 

        playVideo (playerChoice, computerChoice);

        if (playerScore === 5) {
            alert("Congratulations! You won the game!");
            playerScore = 0;
            computerScore = 0;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            playVideo (playerChoice, computerChoice) = '';
        } else if (computerScore === 5) {
            alert("Game over! The computer won!");
            playerScore = 0;
            computerScore = 0;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            playVideo (playerChoice, computerChoice) = '';
        }


        
    });
});