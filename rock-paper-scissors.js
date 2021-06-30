/*
let computerChoice;

const gameBtns = document.querySelectorAll("[type=image]");
gameBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const userChoice = e.target.textContent.toLowerCase();
        getComputerChoice();
        determineWinner(userChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`Computer plays ${computerChoice}`);
}

function determineWinner(userChoice, computerChoice) {
    let results = document.getElementById("results");

    if (
        (userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) { 
        results.textContent = "You won";
    }
    else if (        
        (computerChoice === "rock" && userChoice === "scissors") || 
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) { results.textContent = "Computer won";
    } else {
        results.textContent = "Tie";
    }
}
*/

let computerChoice;
const gameBtns = document.querySelectorAll("[type=image]");
gameBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const userChoice = e.target.textContent.toLowerCase();
    getComputerChoice();
    determineWinner(userChoice, computerChoice);
    newGame(results);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  alert(`Computer plays ${computerChoice}`);
}

function determineWinner(userChoice, computerChoice) {
  let results = document.getElementById("results");

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    results.textContent = "You won";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
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

