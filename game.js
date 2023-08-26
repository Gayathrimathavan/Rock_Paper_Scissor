let playerScore = 0,
	computerScore = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let displayPlayerScore = document.getElementById("playerScore");
let displayComputerScore = document.getElementById("computerScore");
let gameStatus = document.getElementById("status");
let displayPlayerSelection = document.getElementById("playerSelection");
let displayComputerSelection = document.getElementById("computerSelection");
let reset = document.getElementById("reset");

let sis="https://codersgas.github.io/rock-paper-scissors/scissor.png";
let pap="https://codersgas.github.io/rock-paper-scissors/paper.png";
let rck="https://codersgas.github.io/rock-paper-scissors/rock.png";
let temp =document.createElement("img");
temp.id="comimg";
let  resetVals=()=>{
	playerScore = 0;
	computerScore = 0;
	// computerSelection.textContent = "Null";
	playerSelection.textContent = "Null";
	playerScore.textContent = playerScore;
	displayComputerScore.textContent = 0;
	displayPlayerScore.textContent = 0;
	gameStatus.textContent = "Choose an option !";
}


play = (playerSelection, computerSelection) => {
	if(playerScore<5&&computerScore<5){
	if (playerSelection === computerSelection) {
		// gameStatus.textContent = "It's a draw !!!";
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'paper') {
			playerScore++;
			// gameStatus.textContent = `Computer loses, ${playerSelection} beats ${computerSelection} !!`;
		} else {
			computerScore++;
			// gameStatus.textContent = `Computer wins, ${computerSelection} beats ${playerSelection} !!`;
		}
	} else if (playerSelection === 'rock') {
		if (computerSelection === 'scissors') {
			playerScore++;
			// gameStatus.textContent = `Computer loses, ${playerSelection} beats ${computerSelection} !!`;
		} else {
			computerScore++;
			// gameStatus.textContent = `Computer wins, ${computerSelection} beats ${playerSelection} !!`;
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'rock') {
			playerScore++;
			// gameStatus.textContent = `Computer loses, ${playerSelection} beats ${computerSelection} !!`;
		} else {
			computerScore++;
			// gameStatus.textContent = `Computer wins, ${computerSelection} beats ${playerSelection} !!`;
		}
		
	}
}
	if(playerScore==5||computerScore==5){
		gameStatus.textContent=`${playerScore>4?"Player ":"Computer "} wins !`;
		
		setTimeout(resetVals,3000);
	}
}


comsel=(val)=>{
	return val==="scissors"?sis:val==="rock"?rck:pap; 
}



random = () => {
	return (Math.floor(Math.random() * (3)));
}

let value = ["rock", "paper", "scissors"];

//computerPlay() returns random value from array value[] using random function

computerPlay = () => {
	return value[random()];
}





rock.addEventListener("click", function () {
	let playerSelection = "rock";
	displayPlayerSelection.textContent = playerSelection;
	let computerSelection = computerPlay();
	// displayComputerSelection.textContent = computerSelection;
	temp.src=comsel(computerSelection);
	displayComputerSelection.appendChild(temp);
	let image=document.getElementById("comimg");
	image.width="200";
	play(playerSelection, computerSelection);
     
	displayPlayerScore.textContent = playerScore;
	displayComputerScore.textContent = computerScore;

});


paper.addEventListener("click", function () {
	let playerSelection = "paper";
	displayPlayerSelection.textContent = playerSelection;
	let computerSelection = computerPlay();
	// displayComputerSelection.textContent = computerSelection;
	
	temp.src=comsel(computerSelection);
	displayComputerSelection.appendChild(temp);
	let image=document.getElementById("comimg");
	image.width="200";
	play(playerSelection, computerSelection);

	displayPlayerScore.textContent = playerScore;
	displayComputerScore.textContent = computerScore;

});

scissors.addEventListener("click", function () {
	let playerSelection = "scissors";
	displayPlayerSelection.textContent = playerSelection;
	let computerSelection = computerPlay();
	// displayComputerSelection.textContent = computerSelection;
	temp.src=comsel(computerSelection);
	displayComputerSelection.appendChild(temp);
	let image=document.getElementById("comimg");
	image.width="200";
	play(playerSelection, computerSelection);
    
	displayPlayerScore.textContent = playerScore;
	displayComputerScore.textContent = computerScore;

});

reset.addEventListener("click",resetVals);