/*function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  // ta funkcja zwraca losową liczbę od 0 do 2//
  if (randomNumber === 0) {
    randomNumber = "Rock";
  } else if (randomNumber === 1) {
    randomNumber = "Paper";
  } else if (randomNumber === 2) {
    randomNumber = "Scissors";
  }
  return randomNumber;
}
//w tym momencie funkcja zwraca nazwy figur gry w sposób losowy

let playerSelection;

function game(playerSelection) {
  if (
    (getComputerChoice() === "Rock" && playerSelection === "Rock") ||
    (getComputerChoice() === "Paper" && playerSelection === "Paper") ||
    (getComputerChoice() === "Scissors" && playerSelection === "Scissors")
  ) {
    return "Draw.";
  } else if (getComputerChoice() === "Rock" && playerSelection === "Paper") {
    return "Player wins. Paper beats Rock";
  } else if (getComputerChoice() === "Rock" && playerSelection === "Scissors") {
    return "Computer wins. Rock beats Scissors";
  } else if (getComputerChoice() === "Paper" && playerSelection === "Rock") {
    return "Computer wins. Paper beats Rock";
  } else if (
    getComputerChoice() === "Paper" &&
    playerSelection === "Scissors"
  ) {
    return "Player wins. Scissros beat Paper";
  } else if (
    getComputerChoice() === "Scissors" &&
    playerSelection === "Paper"
  ) {
    return "Computer wins. Scissors beat Paper";
  } else if (getComputerChoice() === "Scissors" && playerSelection === "Rock") {
    return "Player wins. Rock beasts Scissors";
  } else {
    return 'Check your inpput for any typo. Be sure your input has ""';
  }
}
//runda gry. // */
function prime() {
  let n = prompt("Type any number to get prime numbers");
  for (n; ; n++) {
    if (n % 1 == n && n % n == 1) alert(n);
  }
}
