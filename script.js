const choices = ["rock", "paper", "scissors"];
playerSelect = document.getElementById("playerText");
computerSelect = document.getElementById("computerText");
rockButton = document.getElementById("rockBtn");
paperButton = document.getElementById("paperBtn");
scissorsButton = document.getElementById("scissorsBtn");
result = document.getElementById("resultText");

function getComputerChoice() {
  const randomIndex = Math.floor( Math.random()* choices.length )
  return choices[randomIndex]
  
  

}

function determineWinner (playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return  "Player wins!";
  }
  else if (playerChoice === computerChoice) {
    return  "Its a tie"
  }
  else {
    return "Computer wins!"
  }
}


rockButton.addEventListener("click", function() {
  const playerChoice = "rock"
  const computerChoice = getComputerChoice()
  playerSelect.textContent = playerChoice;
  computerSelect.textContent = computerChoice;
  result.textContent = determineWinner(playerChoice, computerChoice)


 
  
});

paperButton.addEventListener("click", function() {
  const playerChoice = "paper"
   const computerChoice = getComputerChoice()
   playerSelect.textContent = playerChoice;
   computerSelect.textContent = computerChoice;
   result.textContent = determineWinner(playerChoice, computerChoice)



  
 });




 scissorsButton.addEventListener("click", function() {
   
   const playerChoice = "scissors"
   const computerChoice = getComputerChoice()
   playerSelect.textContent = playerChoice;
   computerSelect.textContent = computerChoice;
   result.textContent = determineWinner(playerChoice, computerChoice)

   
 });
   

 

  





