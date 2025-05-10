const options = ["rock", "paper", "scissors"];
const optionsBtn = document.querySelectorAll("button");
const resultsContainer = document.querySelector("#results");
resultsContainer.style.border = "3px solid black";
resultsContainer.style.marginTop = "10px";

function getcomputerSelection() {
  let randomNumber = Math.floor(Math.random() * options.length);

  return options[randomNumber];
}

function hasPlayerWonTheRound(human, computer) {
  return (
    (human.toLowerCase() === "rock" && computer === "scissors") ||
    (human.toLowerCase() === "scissors" && computer === "paper") ||
    (human.toLowerCase() === "paper" && computer === "rock")
  );
}

let humanScore = 0;
let computerScore = 0;

function addParagraph(parent, text, isBold = false) {
  const p = document.createElement("p");
  p.textContent = text;
  if (isBold) p.style.fontWeight = "bold";
  parent.appendChild(p);
}

function playRound(playerSelection) {
  const computerSelection = getcomputerSelection();
  let result = document.createElement("div");
  result.style.padding = "10px";
  result.style.borderTop = "3px solid black";

  addParagraph(result, `Player chose: ${playerSelection.toLowerCase()}`);
  addParagraph(result, `Computer chose: ${computerSelection}`);

  if (hasPlayerWonTheRound(playerSelection, computerSelection)) {
    addParagraph(
      result,
      `You win! ${playerSelection} beats ${computerSelection}.`,
      true
    );
    humanScore++;
  } else if (playerSelection.toLowerCase() === computerSelection) {
    addParagraph(result, "It's a draw!", true);
  } else {
    addParagraph(
      result,
      `You lose! ${computerSelection} beats ${playerSelection}.`,
      true
    );
    computerScore++;
  }

  addParagraph(
    result,
    `Your score: ${humanScore} - Computer's score: ${computerScore}`
  );

  // Mostrar mensaje claro de victoria
  if (humanScore === 5 || computerScore === 5) {
    let h2 = document.createElement("h2");
    if (humanScore === 5) {
      h2.textContent = "Congratulations! ¡You win the match! :)";
      h2.style.color = "green";
    } else {
      h2.textContent = "The computer won the match :(";
      h2.style.color = "red";
    }
    result.appendChild(h2);

    // Deshabilitar botones para que no se pueda seguir jugando
    optionsBtn.forEach((btn) => (btn.disabled = true));
  }

  resultsContainer.appendChild(result);
}

optionsBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.textContent);
  });
});

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   const numberOfRounds = 5;

//   for (let i = 0; i < numberOfRounds; i++) {
//     let humanSelection = gethumanSelection();
//     let computerSelection = getcomputerSelection();

//     console.log(`Round ${i + 1}:`);
//     console.log(`Player chose: ${humanSelection}`);
//     console.log(`Computer chose: ${computerSelection}`);

//     if (hasPlayerWonTheRound(humanSelection, computerSelection)) {
//       humanScore++;
//       console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
//     } else if (humanSelection.toLowerCase() === computerSelection) {
//       console.log("It's a draw!");
//     } else {
//       computerScore++;
//       console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
//     }
//   }

//   console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
//   console.log(
//     `${humanScore > computerScore ? "Player" : "Computer"} has won the game!`
//   );
// }

// playGame();
