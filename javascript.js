let playerSelection;
let computerSelection = getComputerChoice(); //przypisuje wartość funkcji do zmiennej//
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  // ta funkcja zwraca losową liczbę od 0 do 2//
  if (randomNumber === 0) {
    randomNumber = "rock";
  } else if (randomNumber === 1) {
    randomNumber = "paper";
  } else if (randomNumber === 2) {
    randomNumber = "scissors";
  }
  return randomNumber;
}
//w tym momencie funkcja zwraca nazwy figur gry w sposób losowy

//runda gry. //
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  //powyżej sprawia, że wprowadzona zmienna jest niewrażliwa na wielkość znaków//
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    playerPoints++; //dodaje punkt na konto gracza po każdej wygranej przez niego rundzie//
    computerPoints++;
    console.log("Draw");
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerPoints++; //dodaje punkt na konto komputera po każdej wygranej przez niego rundzie//
    console.log("Computer won this round");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    console.log("You won this round!");
  } else {
    return "Check your inpput for any typo.";
  }
}

//funkcja rozgrywająca 5 rund z kolei//
function game() {
  let iteration = 0;
  for (iteration; iteration <= 4; iteration++) {
    let playerSelection = prompt();
    playRound(playerSelection, computerSelection);
    console.log(iteration);
  }
  console.log({ playerPoints, computerPoints, iteration });

  if (playerPoints > computerPoints) {
    console.log("You won with Computer! Congratulations!");
  } else if (playerPoints < computerPoints) {
    console.log("Computer won with You! What's a pitty... ");
  } else {
    console.log("It is a draw. Play again");
  }
}
