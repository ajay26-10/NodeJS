const { stdin } = require('process');
const readline = require('readline');

const rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
});



function game(){

    function compChoice(){
        const choice=["rock", "paper", "scissors"];
        const n=Math.floor(Math.random()*choice.length)
        return choice[n];
    }
}

function winner(userChoice,computerChoice){

    if(userChoice==computerChoice)
    {
       return "Tie";
    }
    else if (player === 'rock' && computer === 'paper') {
        return "You Lose ... 'Paper beats Rock'";
      } else if (player === 'rock' && computer === 'scissor') {
        return "You Win!!! Rock breaks the scissor";
      } else if (player === 'paper' && computer === 'rock') {
        return "Hurray you win!! Paper covers the rock";
      } else if (player === 'paper' && computer === 'scissor') {
        return "Oh no you lose.. Scissor cuts the paper";
      } else if (player === 'scissor' && computer === 'rock') {
        return "You lose .. Rock breaks the scissor";
      } else if (player === 'scissor' && computer === 'paper') {
        return "You win!! Scissor cut the paper";
      }
      
      return "You entered wrong  choice";
    }
  


function playerChoice(){

rl.question("Choose rock, paper, or scissors: ", (userChoice) => {
    userChoice = userChoice.toLowerCase();

    const computerChoice = compChoice();
    console.log(`Computer chose: ${computerChoice}`);
    const result = winner(userChoice, computerChoice);
    console.log(result);
});
}