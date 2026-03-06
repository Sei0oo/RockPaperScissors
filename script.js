console.log("Hello world");
console.log(Math.floor(Math.random() * 3)+ 1);

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1

    if (num === 1) {
    console.log("rock");
} else if (num === 2) {
    console.log("paper");
} else {
    console.log("scissors");
}

}  
// to confirm my logic works
console.log(getComputerChoice());

