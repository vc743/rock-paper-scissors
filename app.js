let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Enter your choice:");

  return userChoice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice) {
    return "It's a draw!";
  }

  if (
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}
