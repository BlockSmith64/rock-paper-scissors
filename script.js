"use strict";

let botScore = 0;
let humanScore = 0;

const computerPlay = function () {
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};

const score = document.querySelector(".score");
const result = document.querySelector(".result");
score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;

let gameOn = true;
const game = function () {
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound());
  //   console.log(`Score: huamans (${humanScore}:${botScore}) bots`);
  // }

  if (humanScore === 5) {
    result.textContent = "Humans Win the game!";
    return (gameOn = false);
  } else if (botScore === 5) {
    result.textContent = "Bots Win the game!";
    return (gameOn = false);
  }
};

const playRound = function (playerSelection, computerSelection) {
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
};

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const buttonClick = function (playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
};

btnRock.addEventListener("click", function () {
  console.log("hello");
  buttonClick("rock");
});
btnPaper.addEventListener("click", function () {
  buttonClick("paper");
});
btnScissors.addEventListener("click", function () {
  buttonClick("scissors");
});

// btnRock.addEventListener("click", function () {
//   game();
//   if (gameOn) {
//     computerSelection = computerPlay();
//     playerSelection = "rock";

//     if (playerSelection === computerSelection) {
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `It's a Tie! you both chose ${playerSelection}`;
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//       ++botScore;
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//       ++humanScore;
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `You Win! ${playerSelection} beats ${computerSelection}`;
//     }
//   }
// });

// btnPaper.addEventListener(
//   "click",
//   function (playerSelection, computerSelection) {
//     game();
//     if (gameOn) {
//       computerSelection = computerPlay();
//       playerSelection = "paper";

//       if (playerSelection === computerSelection) {
//         score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//         return `It's a Tie! you both chose ${playerSelection}`;
//       } else if (
//         playerSelection === "paper" &&
//         computerSelection === "scissors"
//       ) {
//         ++botScore;
//         score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//       } else if (playerSelection === "paper" && computerSelection === "rock") {
//         ++humanScore;
//         score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//         return `You Win! ${playerSelection} beats ${computerSelection}`;
//       }
//     }
//   }
// );

// btnScissors.addEventListener("click", function () {
//   game();
//   if (gameOn) {
//     computerSelection = computerPlay();
//     playerSelection = "scissors";

//     if (playerSelection === computerSelection) {
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `It's a Tie! you both chose ${playerSelection}`;
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//       ++botScore;
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "paper"
//     ) {
//       ++humanScore;
//       score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//       return `You Win! ${playerSelection} beats ${computerSelection}`;
//     }
//   }
// });

// const body = document.querySelector("body");
// const btnNewGame = document.createElement("button");
// btnNewGame.textContent = "New Game";

// body.appendChild(btnNewGame);

// btnNewGame.addEventListener("click", function () {
//   gameOn = true;
//   botScore = 0;
//   humanScore = 0;
//   score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
//   result.textContent = "";
// });
