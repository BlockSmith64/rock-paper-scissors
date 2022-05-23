"use strict";

let botScore = 0;
let humanScore = 0;

const computerPlay = function () {
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};

const body = document.querySelector("body");
const score = document.querySelector(".score");
const result = document.querySelector(".result");
score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;

let gameOn = true;
const gameStatus = function () {
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound());
  //   console.log(`Score: huamans (${humanScore}:${botScore}) bots`);
  // }

  if (humanScore === 5) {
    result.textContent = "Humans Win the game!";
    body.style.cssText = "background-color: green;";
    return (gameOn = false);
  } else if (botScore === 5) {
    result.textContent = "Bots Win the game!";
    body.style.cssText = "background-color: red;";
    return (gameOn = false);
  }
};

const playRound = function (playerSelection, computerSelection) {
  if (gameOn) {
    if (playerSelection === computerSelection) {
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return "draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      ++botScore;
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return "bots";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scisors" && computerSelection === "paper")
    ) {
      ++humanScore;
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return "humans";
    }
  }
};

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const gameHandler = function (playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  gameStatus();
};

btnRock.addEventListener("click", function () {
  console.log("hello");
  gameHandler("rock");
});
btnPaper.addEventListener("click", function () {
  gameHandler("paper");
});
btnScissors.addEventListener("click", function () {
  gameHandler("scissors");
});

const btnNewGame = document.createElement("button");
btnNewGame.textContent = "New Game";

body.appendChild(btnNewGame);

btnNewGame.addEventListener("click", function () {
  gameOn = true;
  botScore = 0;
  humanScore = 0;
  score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
  result.textContent = "";
  body.style.cssText = "background-color: white;";
});
