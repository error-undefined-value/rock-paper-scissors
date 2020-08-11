let userScore = 0;
let computerScore = 0;
let roundCount = 0;

function computerPlay() {
	let computerChoice = ['rock', 'paper', 'scissors'];
	let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	return randomChoice;
}

function userPlay() {
	let userInput = window.prompt('Choose rock, paper, or scissors.');
	let userChoice = userInput.toLowerCase();
	if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
		return userChoice;
	} else {
		alert(userChoice + ' ' + 'is not an option.');
		window.prompt('Choose rock, paper, or scissors.');
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = userPlay();
	computerSelection = computerPlay();
	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		userScore++;
		roundCount++;
		alert('You won! Current score:' + ' ' + userScore + '-' + computerScore + '.' + ' ' + 'Round' + ' ' + roundCount + ' ' + 'of 5.');
	} else if (playerSelection === computerSelection) {
		roundCount++;
		alert('It was a tie! Current score:' + ' ' + userScore + '-' + computerScore + '.' + ' ' + 'Round' + ' ' + roundCount + ' ' + 'of 5.');
	} else {
		computerScore++;
		roundCount++;
		alert('You lost! Current score:' + ' ' + userScore + '-' + computerScore + '.' + ' ' + 'Round' + ' ' + roundCount + ' ' + 'of 5.');
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
	}
	if (userScore > computerScore) {
		alert('You won! Final score:' + ' ' + userScore + '-' + computerScore);
	} else if (userScore < computerScore) {
		alert('You lost! Final score:' + ' ' + userScore + '-' + computerScore);
	} else {
		alert('It was a tie! Final score:' + ' ' + userScore + '-' + computerScore);
	}
	gameReset();
}

function gameReset() {
	userScore = 0;
	computerScore = 0;
	roundCount = 0;
}
