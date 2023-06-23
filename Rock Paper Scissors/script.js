let playerScore;
let computerScore;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	

	
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
}


function equalityCheck (playerChoice, computerChoice){
	// perform an equality check and update scores and out put a string using concatenation that gives user feedback 



	alert (playerChoice);  //for debug only
	alert (computerChoice); //for debug only

	const playerTip = 0;
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}
