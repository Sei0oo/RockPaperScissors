console.log("Hello world");
console.log(Math.floor(Math.random() * 3)+ 1);

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
    console.log(choice);
}

getHumanChoice();