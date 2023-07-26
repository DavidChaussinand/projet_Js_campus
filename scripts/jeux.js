console.log("exo-3");

var playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
  playerInput = playerInput.toLowerCase();

  if (
    playerInput === "bomb" ||
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors"
  ) {
    return playerInput;
  } else {
    console.log("Erreur, veuillez entrer rock, paper ou scissors");
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tied";
  } else if (playerChoice === "bomb") {
    return "won";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "won";
  } else {
    return "Lost";
  }
}

function playGame() {
  let uChoice = getPlayerChoice(playerInput);
  let computerChoice = getComputerChoice();
  console.log(uChoice);
  console.log(computerChoice);
  console.log(findWinner(uChoice, computerChoice));
}
playGame();


