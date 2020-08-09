// Variables
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const para = document.querySelector("#para");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const restartButton = document.createElement("button");
const container = document.querySelector(".container");
const scoreboard = document.querySelector("#scoreboard");


// Generate a random choice for the computer
function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

// Play one round
function playRound(playerSelection, computerSelection){  
    playerSelection = this.getAttribute("id");
    computerSelection = computerPlay();
    para.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
    if (computerSelection === playerSelection){
        result.textContent = "Tie! You both chose " + computerSelection + ".";
        
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent = "You win! Rock beats scissors!";

        playerScore++;        
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        result.textContent = "You lose!  Paper beats rock!";

        computerScore++    
    } else if  (playerSelection === "paper" && computerSelection ===  "rock"){
        result.textContent = "You win! Paper beats rock!";
  
        playerScore++;
    } else if  (playerSelection === "paper" && computerSelection ===  "scissors"){
        result.textContent = "You lose! Scissors beats paper!";

        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "rock"){
        result.textContent = "You lose! Rock beats scissors!";

        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "paper"){
        result.textContent = "You win! Scissors beats paper!";

        playerScore++;
    }
    scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
    checkScore();
}


buttons.forEach(button => button.addEventListener("click", playRound));
scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
restartButton.textContent = "RESTART";
const gameOver = document.createElement("h2");

// Ends game after either player reaches 5 points
function checkScore(){
    if (playerScore >= 5) {
        console.log('you win the game');
        gameOver.textContent = 'You win the game!';
        container.appendChild(gameOver);
        endGame();
    }

    if (computerScore >= 5) {
        gameOver.textContent = 'You lose the game!';
        container.appendChild(gameOver);
        endGame();
    }   
}

function endGame(){
    container.appendChild(restartButton);
    restartButton.addEventListener("click", restartGame);
}

// Resets the counter and removes text to start game over.
function restartGame(){
    playerScore = 0;
    computerScore = 0;
    scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
    container.removeChild(restartButton);
    container.removeChild(gameOver);
    result.textContent = "";
    para.textContent = "";
}