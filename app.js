const options = ["rock", "paper", "scissors"];

function getcomputerSelection() {
  let randomNumber = Math.floor(Math.random() * options.length);

  return options[randomNumber];
}

function gethumanSelection() {
  let userChoice;
  do {
    userChoice = prompt("Enter rock, paper or scissors:");
  } while (!options.includes(userChoice.toLowerCase()));

  return userChoice;
}

function hasPlayerWonTheRound(human, computer) {
  return (
    (human.toLowerCase() === "rock" && computer === "scissors") ||
    (human.toLowerCase() === "scissors" && computer === "paper") ||
    (human.toLowerCase() === "paper" && computer === "rock")
  );
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const numberOfRounds = 5;

  for (let i = 0; i < numberOfRounds; i++) {
    let humanSelection = gethumanSelection();
    let computerSelection = getcomputerSelection();

    console.log(`Round ${i + 1}:`);
    console.log(`Player chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (hasPlayerWonTheRound(humanSelection, computerSelection)) {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
    } else if (humanSelection.toLowerCase() === computerSelection) {
      console.log("It's a draw!");
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
    }
  }

  console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
  console.log(
    `${humanScore > computerScore ? "Player" : "Computer"} has won the game!`
  );
}

playGame();
