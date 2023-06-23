var randomNumber = 0;
var playerScore = 0;
var computerScore = 0;
var playerTip = 0;


function gameLoop (playerGuess) {
	equalityCheck (playerGuess, generateRandomNumber());
	updateHtmlContent ();
}

function generateRandomNumber () {
	var result = Math.floor((Math.random() * 3) + 1);
	return result;
}

function updateHtmlContent () {
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;	
}


function equalityCheck (playerGuess, generateRandomNumber){
	alert (playerGuess);
	alert (generateRandomNumber);
}
