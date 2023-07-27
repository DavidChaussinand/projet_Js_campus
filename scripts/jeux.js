console.log("exo-3");

let userScore = 0;
let computerScore = 0;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getPlayerChoice(playerInput) {
  if (
    playerInput === "bomb" ||
    playerInput === ROCK ||
    playerInput === PAPER ||
    playerInput === SCISSORS
  ) {
    return playerInput;
  } else {
    console.log("Erreur, veuillez entrer rock, paper ou scissors");
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return ROCK;
  } else if (computerChoice === 1) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tied";
  } else if (playerChoice === "bomb") {
    return "won";
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "won";
  } else {
    return "Lost";
  }
}

function updateScore(result) {
  if (result === "won") {
    userScore++;

  } else if (result === "Lost") {
    computerScore++;
  }
  document.getElementById("user").innerHTML = `<h3>Moi : ${userScore} </h3>`;
  document.getElementById("ordinateur").innerHTML = `<h3>Ordinateur : ${computerScore}</h3>`;
}



function playGame(playerInput) {
  let uChoice = getPlayerChoice(playerInput);
  let computerChoice = getComputerChoice();
  document.getElementById("show").innerHTML = `<p> moi = ${uChoice} et ordinateur =  ${computerChoice}</p>`;
  let result = findWinner(uChoice, computerChoice);
  updateScore(result);
}



const rockBtn =document.getElementById("rockBtn");
const paperBtn =document.getElementById("paperBtn");
const scissorsBtn =document.getElementById("scissorsBtn");

document.addEventListener("DOMContentLoaded", function () {
 
  rockBtn.addEventListener("click", function () {
    playGame(ROCK);
  });

  paperBtn.addEventListener("click", function () {
    playGame(PAPER);
  });

  scissorsBtn.addEventListener("click", function () {
    playGame(SCISSORS);
  });
})
