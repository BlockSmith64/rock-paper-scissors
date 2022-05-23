const computerPlay = function () {
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
};

let botScore = 0;
let humanScore = 0;

const playRound = function (playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = "rock";

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
};

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");

const score = document.querySelector(".score");

score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;

btnRock.addEventListener("click", function () {
  computerSelection = computerPlay();
  playerSelection = "rock";

  if (playerSelection === computerSelection) {
    console.log("draw");
    score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
    return `It's a Tie! you both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    botScore++;
    console.log("L");
    score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("W");
    humanScore++;
    `Score: huamans (${humanScore}:${botScore}) bots`;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
});

btnPaper.addEventListener(
  "click",
  function (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = "paper";

    if (playerSelection === computerSelection) {
      console.log("draw");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `It's a Tie! you both chose ${playerSelection}`;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      botScore++;
      console.log("L");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      console.log("W");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
);

btnScissors.addEventListener(
  "click",
  function (playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = "scissors";

    if (playerSelection === computerSelection) {
      console.log("draw");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `It's a Tie! you both chose ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      botScore++;
      console.log("L");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      humanScore++;
      console.log("W");
      score.textContent = `Score: huamans (${humanScore}:${botScore}) bots`;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
);

const game = function () {
  // for (let i = 0; i < 5; i++) {
  //   console.log(playRound());
  //   console.log(`Score: huamans (${humanScore}:${botScore}) bots`);
  // }
  if (humanScore > 5) {
    console.log("Humans Win the game!");
  } else if (botScore > 5) {
    console.log("Bots Win the game!");
  }
};

console.log(game());
