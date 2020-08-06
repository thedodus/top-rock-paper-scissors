
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Generate a random choice for the computer
function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

// Play one round
function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Choose: Rock, Paper, or Scissors", "Rock").toLowerCase();
    computerSelection = computerPlay();
    console.log("Computer chose: ", computerSelection);
    console.log("You chose: ", playerSelection);
    if (computerSelection === playerSelection){
        console.log("Tie! You both chose " + computerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats scissors!");
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose!  Paper beats rock!");
        computerScore++
    } else if  (playerSelection === "paper" && computerSelection ===  "rock"){
        console.log("You win! Paper beats rock!");
        playerScore++;
    } else if  (playerSelection === "paper" && computerSelection ===  "scissors"){
        console.log("You lose! Scissors beats paper!");
        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "rock"){
        console.log("You lose! Rock beats scissors!");
        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "paper"){
        console.log("You win! Scissors beats paper!");
        playerScore++;
    }
}

// Play the game five times

function game(){
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        playRound();
    }
    if (playerScore > computerScore){
        console.log(`You won the game! Player Score: ${playerScore}, Computer Score: ${computerScore}.`) 
    } else if (playerScore < computerScore) {
        console.log(`You lost the game! Player Score: ${playerScore}, Computer Score: ${computerScore}.`);
    } else if (playerScore === computerScore){
        console.log(`It was a draw!  Nobody wins!`)
    }
}
