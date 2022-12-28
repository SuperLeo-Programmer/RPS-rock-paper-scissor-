


const totalScore = {computerScore: 0, playerScore: 0}



function getComputerChoice() {
  var computerOptions = ['Rock', 'Paper', 'Scissor']
  var randomNumber = Math.random() * 3
  var arrayNumber = Math.floor(randomNumber)
  return computerOptions[arrayNumber]
}


function getResult(playerChoice, computerChoice) {

  let score;
  let computerScoreL;
  

  // All situations where human draws, set `score` to 0
  if (computerChoice === playerChoice) {
    score = 0;
  }


  // All situations where human wins, set `score` to 1
  else if(computerChoice === "Scissor" && playerChoice === "Rock"){
    score = 1;
    computerScoreL = -1;
  }
  else if(computerChoice === "Paper" && playerChoice === "Scissor"){
    score = 1;
    computerScoreL = -1;
  }
  else if(computerChoice === "Rock" && playerChoice === "Paper"){
    score = 1;
    computerScoreL = -1;
  }

  

  // Otherwise human loses, set 'score' to -1
  else if(computerChoice === "Rock" && playerChoice === "Scissor"){
    score = -1;
    computerScoreL = 1;

  }
  else if(computerChoice === "Paper" && playerChoice === "Rock"){
    score = -1;
    computerScoreL = 1;
  }
  else if(computerChoice === "Scissor" && playerChoice === "Paper"){
    score = -1;
    computerScoreL = 1;
  
  }
  return score;
  return computerScoreL;


  
}


function showResult(score, playerChoice, computerChoice) {
  var location = document.querySelector("#result")
  var handsDiv  = document.querySelector("#hands")
  var finalScore = document.querySelector("#player-score")
  var computerScore = document.querySelector("#computer-score")
  if(score === 0){
    location.innerHTML = "Tie"
  }
  else if (score === -1){
    location.innerHTML = "You Lost!"
  } else{
    location.innerHTML = "You Won!"
  }

  finalScore.innerHTML = "Your Score is : " +  totalScore['playerScore']

  

}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  showResult(score, playerChoice, computerChoice)
}



function playGame() {

  var rpsButtons = document.querySelectorAll('.rpsButton')
 
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value) 
    
  });

  const endGameButton = document.querySelector("#endGameButton")
  endGameButton.onclick = () => endGame(totalScore)

}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  var location = document.querySelector("#result")
  var finalScore = document.querySelector("#player-score")
  location.innerHTML = ''
  finalScore.innerHTML = ''
}

playGame()