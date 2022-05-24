"use strict";

let botScore = 0;
let humanScore = 0;

const computerPlay = function () {
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};

const body = document.querySelector("body");
const score = document.querySelector(".score");
const finalResult = document.querySelector(".final-result");
score.textContent = `${humanScore} - ${botScore}`;

let gameOn = true;
const gameStatus = function () {
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound());
  //   console.log(`Score: huamans (${humanScore}:${botScore}) bots`);
  // }

  if (humanScore === 5) {
    finalResult.textContent = "Humans Win the game!";
    body.style.cssText = "background-color: #66E31E;";
    return (gameOn = false);
  } else if (botScore === 5) {
    finalResult.textContent = "Bots Win the game!";
    body.style.cssText = "background-color: #F21E0C;";
    return (gameOn = false);
  }
};

const playRound = function (playerSelection, computerSelection) {
  if (gameOn) {
    if (playerSelection === computerSelection) {
      btnRock.src = "./images/rock-human.png";
      score.textContent = `${humanScore} - ${botScore}`;
      imgBot.src = `./images/bot-${computerSelection}.jpg`;
      return "draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      ++botScore;
      score.textContent = `${humanScore} - ${botScore}`;
      imgBot.src = `./images/bot-${computerSelection}.jpg`;
      return "bots";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scisors" && computerSelection === "paper")
    ) {
      ++humanScore;
      score.textContent = `${humanScore} - ${botScore}`;
      imgBot.src = `./images/bot-${computerSelection}.jpg`;
      return "humans";
    }
  }
};

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const gameScreen = document.querySelector(".game-screen");
const imgHuman = document.querySelector(".img-human");
const imgBot = document.querySelector(".img-bot");

const gameHandler = function (playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  gameStatus();
};

btnRock.addEventListener("click", function () {
  if (gameOn) imgHuman.src = "./images/rock-human.png";
  gameHandler("rock");
});
btnPaper.addEventListener("click", function () {
  if (gameOn) imgHuman.src = "./images/paper-human.webp";
  gameHandler("paper");
});
btnScissors.addEventListener("click", function () {
  if (gameOn) imgHuman.src = "./images/scissors-human.png";
  gameHandler("scissors");
});

// const btnNewGame = document.createElement("button");
// btnNewGame.textContent = "New Game";

// document.querySelector(".container").appendChild(btnNewGame);

// btnNewGame.addEventListener("click", function () {
//   gameOn = true;
//   botScore = 0;
//   humanScore = 0;
//   score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//   finalResult.textContent = "";
//   body.style.cssText = "background-color: white;";
// });
