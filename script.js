// Import Modules from confetti.js
import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

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
//Player and Computer Scores
let computerScoreNumber = 0;
let playerScoreNumber = 0;

// Reset all 'selected' icons
const resetSelected = () => {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  //Reset the confetti after each pick
  stopConfetti();
  removeConfetti();
}

// Reset Score & playerChoice/computerChoice
const resetAll = () => {
  // Reset Scores
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  // Show updated scores to DOM
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  // Reset player and computer choice text
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  // Reset result of who won last
  resultText.textContent = '';
  // reset all choice icons
  resetSelected();
}
// Set resetAll function as a global variable on the window object since script.js was turn into module type
window.resetAll = resetAll;

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

// Check result, increase scores, update resultText
const updateScore = (playerChoice) => {
  if(playerChoice === computerChoice) {
    resultText.textContent = `It's a tie.`;
  } else {
    const choice = choices[playerChoice];
    //choice.defeats.indexOf(computerChoice) return less then one the computer wins
    //since the object returns negative 1 if players choice does not defeat the computers choice
    if(choice.defeats.indexOf(computerChoice) > -1) {
      // Update text, score plus one and update player score to DOm
      resultText.textContent = `You won this round!`;
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      startConfetti();
    } else {
      resultText.textContent = `Computer won this round!`;
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// Call function to process turn
const checkResult = (playerChoice) => {
  // Reset icons before selecting
  resetSelected();

  // Get random computer choice
  computerRandomChoice();

  // Display computers choice to the screen
  displayComputerChoice();

  // Check the scores
  updateScore(playerChoice);
}

const select = (playerChoice) => {
  checkResult(playerChoice);

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

// Set select function as a global variable on the window object since script.js was turn into module type
window.select = select;

// On startup , set initial values
resetAll();