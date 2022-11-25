var myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"; 
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"; 
    }
} 
input = prompt("Enter your Choice!");

const computerSelection = getComputerChoice();
console.log(playRound(input, computerSelection));
