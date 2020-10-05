// Select DOM elements
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';

// Reset all 'selected' icons
const resetSelected = () => {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Random Computer Choice
const computerRandomChoice = () => {
  // Get random number from 1 to 5
  const computerChoiceNumber = Math.floor(Math.random() * 5) + 1;
  if(computerChoiceNumber === 1) {
    computerChoice = 'rock';
  } else if(computerChoiceNumber === 2) {
    computerChoice = 'paper';
  } else if(computerChoiceNumber === 3) {
    computerChoice = 'scissors';
  }
  else if(computerChoiceNumber === 4) {
    computerChoice = 'lizard';
  }
  else if(computerChoiceNumber === 5) {
    computerChoice = 'spock';
  }
}

// Add 'selected' styling and computerChoice text
const displayComputerChoice = () => {
  // Add 'selected' styling and update ComputerChoice Text
  switch(computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
        computerScissors.classList.add('selected');
        computerChoiceEl.textContent = ' --- Scissors';
        break;
      case 'lizard':
        computerLizard.classList.add('selected');
        computerChoiceEl.textContent = ' --- Lizard';
        break;
      case 'spock':
        computerSpock.classList.add('selected');
        computerChoiceEl.textContent = ' --- Spock';
        break;
      default:
        break;
  }
}

// Call function to process turn
const checkResult = () => {
  // Reset icons before selecting
  resetSelected();

  // Get random computer choice
  computerRandomChoice();

  // Display computers choice to the screen
  displayComputerChoice();
}

const select = (playerChoice) => {
  checkResult();

  // Add 'selected' styling and update playerChoice Text
  switch(playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = ' --- Scissors';
        break;
      case 'lizard':
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent = ' --- Lizard';
        break;
      case 'spock':
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent = ' --- Spock';
        break;
      default:
        break;
  }
}