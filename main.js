let playerScore = 0;
let compScore = 0;
let playerChoice;

// set computer choices in an array

let computerChoices = [
  {
  choice: 'Rock',
  value: 0
},
{
  choice: 'Paper',
  value: 1
},
{
  choice: 'Scissors',
  value: 2
}];

// Buttons to update/reset scores for user and computer

const weaponSelection = document.querySelectorAll('.btn');
const userScore = document.querySelector('#playerScore');
const randomScore = document.querySelector('#computerScore');
const compareResults = document.querySelector('#compareResults');
const resetBtn = document.querySelector('#refresh');

resetBtn.addEventListener('click', () => location.reload());

weaponSelection.forEach(button => {
  button.addEventListener('click', getPlayerChoice)})
  


// function for player choice

function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}

// function for computer choice

function computerPlay() {
  let computerScore = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerScore;
}

function playRound (playerSelection, computerSelection) {
  let computerWin = `${playerSelection}-${computerSelection.value}`;
  let playerWin = ['1-0', '0-2', '2-1'];

  if (Number(playerSelection) === computerSelection.value) {
    userScore.textContent = playerScore++;
    randomScore.textContent = compScore++;
    compareResults.textContent = " This is a Tie!"
  } else if (playerWin.includes(computerWin)) {
    userScore.textContent = playerScore++;
    compareResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
  } else {
    randomScore.textContent = compScore++;
    compareResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
  }
  checkWinner();
}

const winnerResults = {
  computer: ["You have lost the game to the computer!",
    'yellow'],
  player: ["You have won the game!",
    'green'],
  tie: ["The game is a Tie!",
    'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore) {
      updateWinner('tie')
    } else {
      let win = `${(compScore > playerScore) ? 'computer': 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner) {
  compareResults.textContent = winnerResults[winner][0];
  compareResults.style.color = winnerResults[winner][1];

  weaponSelection.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

