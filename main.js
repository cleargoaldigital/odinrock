// initializing values of scores

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
  



// function for computer choice

function computerPlay() {
  let computerScore = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerScore;
}

// function for rounds of play
function playRound (playerSelection, computerSelection) {
  let computerWin = `${playerSelection}-${computerSelection.value}`;
  let playerWin = ['1-0',
    '0-2',
    '2-1'];

  if (Number(playerSelection) === computerSelection.value) {
    userScore.textContent = ++playerScore
    randomScore.textContent = ++compScore
    compareResults.textContent = "Tie!"
  }
  else if (playerWin.includes(computerWin)) {
    userScore.textContent = ++playerScore
    compareResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
  }
  else {
    randomScore.textContent = ++compScore
    compareResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
  }
  checkWinner();
}


const winnerResults = {
  computer: ["Sorry, you've lost the game to the computer! Try again!",
    'red'],
  player: ["You've won the game! Congratulations!",
    'green'],
  tie: ["The game has ended in a Tie!",
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

// function for player choice

function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}