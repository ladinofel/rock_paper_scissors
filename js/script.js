const user_selection = document.querySelector('#user-selection');
const pc_selection = document.querySelector('#pc-selection');
const round_result = document.querySelector('#round-result');
const user_score = document.querySelector('#user-score');
const pc_score = document.querySelector('#pc-score');
const final_result = document.querySelector('#final-result');

const options =['rock', 'paper', 'scissors'];
let computerSelection;
let userSelection;
let computerScore = 0;
let userScore = 0;

function getComputerChoice(){  
  let randomNum = Math.floor(Math.random() * options.length);
  let randomChoice = options[randomNum];
  return randomChoice;
}

function playerChoice(){
  const user_btns = document.querySelectorAll('.user-btn');
  user_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(btn.id === 'rock'){
      userSelection = btn.id; 
      playRound();
    }
    else if(btn.id === 'paper'){
      userSelection = btn.id;
      playRound();
    } else {
      userSelection = btn.id;
      playRound();
    }
  });
  });
};

playerChoice();

function playRound(){
  computerSelection = getComputerChoice();
  user_selection.textContent = `You selected ${userSelection}.`;
  pc_selection.textContent = `The computer selected ${computerSelection}.`;
  if(computerSelection == userSelection){
    round_result.textContent = 'There has been a tie.'; 
  }
  else if(computerSelection == 'rock' && userSelection == 'paper'){
    userScore++;
    round_result.textContent = 'You win!';
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  else if(computerSelection == 'rock' && userSelection == 'scissors'){
    computerScore++;
    round_result.textContent = 'You lose!';
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  else if(computerSelection == 'paper' && userSelection == 'scissors'){
    userScore++;
    round_result.textContent = 'You win!';
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  else if(computerSelection == 'paper' && userSelection == 'rock'){
    computerScore++;
    round_result.textContent = 'You lose!';
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  else if(computerSelection == 'scissors' && userSelection == 'rock'){
    userScore++;
    round_result.textContent = 'You win!'; 
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  else if(computerSelection == 'scissors' && userSelection == 'paper'){
    computerScore++;
    round_result.textContent = 'You lose!'; 
    user_score.textContent = `Your score is: ${userScore}`;
    pc_score.textContent = `The computer's score is: ${computerScore}`;
  }
  if(computerScore === 5){
    final_result.textContent = 'THE COMPUTER WINS!';
    computerScore = 0;
    userScore = 0;
  }
  else if(userScore === 5){
    final_result.textContent = 'THE USER WINS!';
    computerScore = 0;
    userScore = 0;
  }


  
};


/*
function game(){  
  for (let i = 0; i < 5; i++){
    playerChoice();
    //console.log(playRound(computerSelection, userSelection));
    console.log(`The current score is User: ${userScore} Computer: ${computerScore}.`);
  }
  console.log('The game is over.');
  if(userScore > computerScore){
    console.log('The user is the winner!');
    }
    else if(computerScore > userScore){
      console.log('The computer is the winner!');
    } else {
      console.log('There has been a tie.');
    }

  }
game();
*/



