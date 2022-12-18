let playerSelection;
let computerSelection = getComputerChoice(); //przypisuje wartość funkcji do zmiennej//
let playerPoints = 0;
let computerPoints = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector("#result");
result.textContent = "result";
const playerResult = document.querySelector("#playerResult");
const computerResult = document.querySelector("#computerResult");

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
function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    playerResult.textContent = `Player points: ${playerPoints}`; // wyświetla wartość punktów w każdej rundzie
    computerResult.textContent = `Computer points: ${computerPoints}`; // wyświetla wartość punktów w każdej rundzie
    //skasowałem, że po remisie gracz i komputer dostają po punkcie bo zmieniłem zdanie
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerPoints++; //dodaje punkt na konto komputera po każdej wygranej przez niego rundzie//
    playerResult.textContent = `Player points: ${playerPoints}`; // wyświetla wartość punktów w każdej rundzie
    computerResult.textContent = `Computer points: ${computerPoints}`; // wyświetla wartość punktów w każdej rundzie
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    playerResult.textContent = `Player points: ${playerPoints}`; // wyświetla wartość punktów w każdej rundzie
    computerResult.textContent = `Computer points: ${computerPoints}`; // wyświetla wartość punktów w każdej rundzie
  } else {
    return "Check your inpput for any typo.";
  }
}

function game() {
  playRound(playerSelection);

  if (
    (playerPoints === 5 && playerPoints > computerPoints) ||
    (computerPoints === 5 && playerPoints > computerPoints)
  ) {
    console.log("player won");
    //playerPoints = 0;
    //computerPoints = 0;
    result.textContent = `Player have won! Player points: ${playerPoints} \r\n 
     Computer points: ${computerPoints}`; //zając się tym, aby teskt łamał się w odpowiednim miejscu
    playerPoints = 0;
    computerPoints = 0;
    //function fun() {
    //document.getElementById("result").reset(); //powinno resetować wartosć result po tym, gdy któryś z graczy wygra
    //}
    return;
  } else if (
    (playerPoints === 5 && playerPoints < computerPoints) ||
    (computerPoints === 5 && playerPoints < computerPoints)
  ) {
    console.log("compter won");
    result.textContent = `Computer have won!. Computer points: ${computerPoints} \r\n 
     Player points: ${playerPoints}`;
    playerPoints = 0;
    computerPoints = 0;
    function fun() {
      document.getElementById("result").reset();
    }
    return;
  }

  console.log({ playerPoints, computerPoints });
  result.textContent = "result";
  return;
}

rock.addEventListener("click", () => {
  playerSelection = "rock";
  game();
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  game();
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  game();
});

/* 1) połączyć przyciski html z javascript - ZROBIONE
2) przyrwnać wartość nacisniętego przycisku do playerSelection ZROBIONE
3) po kliknięciu w przycisk uruchomić funkcję GAME() ZROBIONE
4) połączyć pole result z liczbą punktów gracza i komputera po każdej grze
5) połaczyć pole result z wynikiem gry po 5 grach
*/
