console.log("Hello world");

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    let choice;

    if (num === 1) {
    choice = "rock";
} else if (num === 2) {
    choice = "paper";
} else {
    choice = "scissors";
}
return choice;

}  
// to confirm my logic works
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Make your stand; rock, paper or scissors")
    return choice;
}
//to confirm my logic works
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
     humanChoice = humanChoice.toLowerCase();
     console.log(computerChoice);
    let outcome;
    if (humanChoice === "rock" && computerChoice === "paper"){
        outcome = "You lose!! paper beats rock";
        console.log(outcome);
        computerScore++;
    }
        else if(humanChoice === "rock" && computerChoice === "scissors"){
            outcome = "You win!!! rock beats scissors";
            console.log(outcome);
            humanScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){
            outcome = "You lose!! scissors beats paper";
            console.log(outcome);
            computerScore++;
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){
            outcome = "You win!!! paper beats rock"
            console.log(outcome);
            humanScore++;
        }
        
        else if(humanChoice === "scissors" && computerChoice === "rock"){
            outcome = "Aww shucks, you lose since rock beats scissors";
            console.log(outcome);
            computerScore++;
        }

        else if(humanChoice === "scissors" && computerChoice === "paper"){
            outcome = "nice you won!! scissors beats paper";
            console.log(outcome);
            humanScore++;
        }

        else if(humanChoice === computerChoice){
            outcome = "ouu a tie, try another round";
            console.log(outcome);
        }

        else{
            console.log("please enter a valid choice, rock, paper or scissors");
        }
        

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
