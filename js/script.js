const user_selection = document.querySelector('#user-selection');
const pc_selection = document.querySelector('#pc-selection');
const round_result = document.querySelector('#round-result');
const user_score = document.querySelector('.user-score');
const pc_score = document.querySelector('.pc-score');
const final_result = document.querySelector('#final-result');

const options =['rock', 'paper', 'scissors'];
let computerSelection;
let userSelection;
let computerScore = 0;
let userScore = 0;

function getComputerChoice(){  
  let randomNum = Math.floor(Math.random() * options.length);
  let randomChoice = options[randomNum];
  if (randomChoice == 'rock'){
    const pc_rock = document.querySelector('.pc-rock');
    pc_rock.classList.add('clicked');
    setTimeout(function() {
      pc_rock.classList.remove('clicked');
  }, 200 );
  } 
  else if(randomChoice == 'paper'){
    const pc_paper = document.querySelector('.pc-paper');
    pc_paper.classList.add('clicked');
    setTimeout(function() {
      pc_paper.classList.remove('clicked');
  }, 200 );
  } else {
    const pc_scissors = document.querySelector('.pc-scissors');
    pc_scissors.classList.add('clicked');
    setTimeout(function() {
      pc_scissors.classList.remove('clicked');
  }, 200 );
  }
  return randomChoice;
};


function playerChoice(){
  const user_rock = document.querySelector('.user-rock');
  user_rock.addEventListener('click', () => {
    user_rock.classList.add('clicked');
    setTimeout(function() {
      user_rock.classList.remove('clicked');
  }, 200 );
  userSelection = 'rock';
  playRound();
  });
  const user_paper = document.querySelector('.user-paper');
  user_paper.addEventListener('click', () => {
    user_paper.classList.add('clicked');
    setTimeout(function() {
      user_paper.classList.remove('clicked');
  }, 200 );
  userSelection = 'paper';
  playRound();
  });
  const user_scissors = document.querySelector('.user-scissors');
  user_scissors.addEventListener('click', () => {
    user_scissors.classList.add('clicked');
    setTimeout(function() {
      user_scissors.classList.remove('clicked');
  }, 200 );
  userSelection = 'scissors';
  playRound();
  });
};

playerChoice();

function playRound(){
  computerSelection = getComputerChoice();
  if(computerSelection == userSelection){
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "TIE";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "TIE";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc);
   
  }
  else if(computerSelection == 'rock' && userSelection == 'paper'){
    userScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "WIN";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "LOSE";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc);  
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;    
  }
  else if(computerSelection == 'rock' && userSelection == 'scissors'){
    computerScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "LOSE";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "WIN";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc);   
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;   
  }
  else if(computerSelection == 'paper' && userSelection == 'scissors'){
    userScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "WIN";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "LOSE";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc);    
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;  
  }
  else if(computerSelection == 'paper' && userSelection == 'rock'){
    computerScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "LOSE";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "WIN";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc); 
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;  
  }
  else if(computerSelection == 'scissors' && userSelection == 'rock'){
    userScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "WIN";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "LOSE";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc); 
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;   
  }
  else if(computerSelection == 'scissors' && userSelection == 'paper'){
    computerScore++;
    const user_sect = document.querySelector('.user-sect');
    const game_result_user = document.createElement('p');
    game_result_user.textContent = "LOSE";
    const pc_sect = document.querySelector('.pc-sect');
    const game_result_pc = document.createElement('p');
    game_result_pc.textContent = "WIN";
    user_sect.appendChild(game_result_user);
    pc_sect.appendChild(game_result_pc); 
    let round_score_user = document.querySelector('.round-score-user');
    round_score_user.textContent = `SCORE: ${userScore}`;  
    let round_score_pc = document.querySelector('.round-score-pc');
    round_score_pc.textContent = `SCORE: ${computerScore}`;  
  }
  if(computerScore === 5){
    const modal = document.querySelector('.modal');
    modal.showModal();
    const game_summary = document.querySelector('.game-summary');
    game_summary.textContent = 'THE COMPUTER WINS';
    const score_summary_user = document.querySelector('.score-summary-user');
    score_summary_user.textContent = `USER SCORE: ${userScore}`;
    const score_summary_computer = document.querySelector('.score-summary-computer');
    score_summary_computer.textContent = `COMPUTER SCORE: ${computerScore}`;
  }
  else if(userScore === 5){
    const modal = document.querySelector('.modal');
    modal.showModal();
    const game_summary = document.querySelector('.game-summary');
    game_summary.textContent = 'THE USER WINS';
    const score_summary_user = document.querySelector('.score-summary-user');
    score_summary_user.textContent = `USER SCORE: ${userScore}`;
    const score_summary_computer = document.querySelector('.score-summary-computer');
    score_summary_computer.textContent = `COMPUTER SCORE: ${computerScore}`;
  } 
};

/*
const pc_rock = document.querySelector('.pc-rock');
pc_rock.addEventListener('click', () => {
  pc_rock.classList.add('clicked');
  setTimeout(function() {
    pc_rock.classList.remove('clicked');
  }, 200 );
});

/*function removeTransition(){
  alert('test');
};

const user_btns = document.querySelectorAll('button');
user_btns.forEach((btn) => {
  btn.addEventListener('transitionend', removeTransition);
});


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



