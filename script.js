const computerPlay = function () {
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};
console.log(computerPlay());

let botScore = 0;
let humanScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  do {
    playerSelection = prompt(
      "Choose between rock, paper or scissors"
    ).toLowerCase();
  } while (
    !playerSelection === "rock" &&
    !playerSelection === "paper" &&
    !playerSelection === "scissors"
  );
  if (playerSelection === computerSelection) {
    return `It's a Tie! you both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    botScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    botScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    botScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scisors" && computerSelection === "paper") {
    humanScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

const game = function () {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    console.log(`Score: huamans (${humanScore}:${botScore}) bots`);
  }
  if (humanScore > botScore) {
    console.log("Humans Win the game!");
  } else if (humanScore < botScore) {
    console.log("Bots Win the game!");
  } else {
    console.log("the war rages on");
  }
};

console.log(game());
