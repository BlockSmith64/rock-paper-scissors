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

const gameOver = function () {};

const gameStatus = function () {
  if (humanScore === 5) {
    gameOver();
    finalResult.textContent = "Humans Win the game!";
    body.style.cssText = "background-color: #66E31E;";
    return (gameOn = false);
  } else if (botScore === 5) {
    gameOver();
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
      finalResult.textContent = "It's a draw!";
      return "draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      ++botScore;
      score.textContent = `${humanScore} - ${botScore}`;
      imgBot.src = `./images/bot-${computerSelection}.jpg`;
      finalResult.textContent = "You Lose!";
      return "bots";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scisors" && computerSelection === "paper")
    ) {
      ++humanScore;
      score.textContent = `${humanScore} - ${botScore}`;
      finalResult.textContent = "You Win!";
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

const btnNewGame = document.querySelector(".new-game-btn");

btnNewGame.addEventListener("click", function () {
  gameOn = true;
  botScore = 0;
  humanScore = 0;
  score.textContent = `${humanScore} - ${botScore}`;
  finalResult.textContent = "Pick your choice";
  imgHuman.src = "./images/q-mark-green.webp";
  imgBot.src = "./images/q-mark-blue.png";
  body.style.cssText = "background-color: #0c6155;";
  btnRock.classList.add("effects");
  btnPaper.classList.add("effects");
  btnScissors.classList.add("effects");
});
