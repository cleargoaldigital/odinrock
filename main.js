let playerScore = 0;
let compScore = 0;
let playerChoice;
let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];


// Buttons to update/reset scores for user and computer

const selectBtn = document.querySelectorAll('div.selectBtn button');
const userScore = document.querySelector('#playerScore');
const randomScore = document.querySelector('#computerScore');
const compareResults = document.querySelector('#compareResults');
const resetBtn = document.querySelector('#refresh');

//This resets the page to restart the game

resetBtn.addEventListener('click',() => location.reload());
  
selectBtn.forEach(button => {button.addEventListener('click', getPlayerChoice)});





function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      userScore.textContent = ++playerScore
      randomScore.textContent = ++compScore
      compareResults.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        userScore.textContent = ++playerScore
        compareResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        randomScore.textContent = ++compScore
        compareResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!", 'green'],
  tie: ["The game is a Tie!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
    compareResults.textContent = winnerResults[winner][0];
  compareResults.style.color = winnerResults[winner][1];

  selectBtn.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}

