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
  let userChoice = prompt("Please make your selection between Rock, Paper or Scissors: ", "").toLowerCase();
  return userChoice;
}

//function playRound(computerSelection, userSelection){
  computerSelection = getComputerChoice();
  userSelection = playerChoice();
  console.log((`The computer selected ${computerSelection}.`));
  console.log((`You selected ${userSelection}.`));
  if(computerSelection == userSelection){
    return 'TIE';
  }
  else if(computerSelection == 'rock' && userSelection == 'paper'){
    userScore++;
    return 'You win!';
  }
  else if(computerSelection == 'rock' && userSelection == 'scissors'){
    computerScore++;
    return 'You lose!';
  }
  else if(computerSelection == 'paper' && userSelection == 'scissors'){
    userScore++;
    return 'You win!';
  }
  else if(computerSelection == 'paper' && userSelection == 'rock'){
    computerScore++;
    return 'You lose!';
  }
  else if(computerSelection == 'scissors' && userSelection == 'rock'){
    userScore++;
    return 'You win!'; 
  }
  else if(computerSelection == 'scissors' && userSelection == 'paper'){
    computerScore++;
    return 'You lose!'; 
  }
}

//function game(){  
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
