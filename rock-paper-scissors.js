let computerChoice;
let playerChoice;
const gameBtns = document.querySelectorAll("[type=image]");

gameBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const userChoice = e.target.textContent .toLowerCase();
        playerChoice = btn.value
        getComputerChoice();
        determineWinner(playerChoice, computerChoice);
        newGame();
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    alert("Player plays " + playerChoice);
    alert(`Computer plays ${computerChoice}`);
}

function determineWinner(playerChoice, computerChoice) {
    let results = document.getElementById("results");
  
    if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) { 
        results.textContent = "Player won";
    }
    else if (        
        (computerChoice === "rock" && playerChoice === "scissors") || 
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) { 
      results.textContent = "Computer won";
    } else {
        results.textContent = "Tie";
    }
}

function newGame() {
  let results = document.getElementById("results");
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.addEventListener("click", (e) => {
  results.textContent = "";
  });
}

