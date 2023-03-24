
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
      console.log(userSelection);
      playRound();
    }
    else if(btn.id === 'paper'){
      userSelection = btn.id;
      console.log(userSelection);
      playRound();
    } else {
      userSelection = btn.id;
      console.log(userSelection);
      playRound();
    }
  });
  });
  
};

playerChoice();


function playRound(){
  computerSelection = getComputerChoice();
  console.log((`The computer selected ${computerSelection}.`));
  console.log((`You selected ${userSelection}.`));
  if(computerSelection == userSelection){
    console.log('TIE');
  }
  else if(computerSelection == 'rock' && userSelection == 'paper'){
    userScore++;
    console.log('You win!');
  }
  else if(computerSelection == 'rock' && userSelection == 'scissors'){
    computerScore++;
    console.log('You lose!');
  }
  else if(computerSelection == 'paper' && userSelection == 'scissors'){
    userScore++;
    console.log('You win!');
  }
  else if(computerSelection == 'paper' && userSelection == 'rock'){
    computerScore++;
    console.log('You lose!');
  }
  else if(computerSelection == 'scissors' && userSelection == 'rock'){
    userScore++;
    console.log('You win!'); 
  }
  else if(computerSelection == 'scissors' && userSelection == 'paper'){
    computerScore++;
    console.log('You lose!'); 
  }
};

//playRound();
/*
function game(){  
  for (let i = 0; i < 5; i++){
    console.log(playRound(computerSelection, userSelection));
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
console.log(game());

*/


