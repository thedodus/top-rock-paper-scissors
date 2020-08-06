
let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Generate a random choice for the computer
function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
}

// Play one round
function playRound(playerSelection, computerSelection){  
    playerSelection = this.getAttribute("id");
    computerSelection = computerPlay();
    const para = document.createElement("p");
    const result = document.createElement("p");
    para.textContent = `You chose ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreboard.appendChild(para);
    if (computerSelection === playerSelection){
        result.textContent = "Tie! You both chose " + computerSelection + ".";
        scoreboard.appendChild(result);
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent = "You win! Rock beats scissors!";
        scoreboard.appendChild(result);
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        result.textContent = "You lose!  Paper beats rock!";
        scoreboard.appendChild(result);
        computerScore++
    } else if  (playerSelection === "paper" && computerSelection ===  "rock"){
        result.textContent = "You win! Paper beats rock!";
        scoreboard.appendChild(result);
        playerScore++;
    } else if  (playerSelection === "paper" && computerSelection ===  "scissors"){
        result.textContent = "You lose! Scissors beats paper!";
        scoreboard.appendChild(result);
        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "rock"){
        result.textContent = "You lose! Rock beats scissors!";
        scoreboard.appendChild(result);
        computerScore++
    } else if  (playerSelection === "scissors" && computerSelection ===  "paper"){
        result.textContent = "You win! Scissors beats paper!";
        scoreboard.appendChild(result);
        playerScore++;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));

const scoreboard = document.querySelector(".scoreboard");
scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
