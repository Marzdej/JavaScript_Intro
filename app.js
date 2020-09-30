let playerScore = 0;
let computerScore = 0;

while (playerScore < 3 && computerScore < 3){
    const choices = ["r", "p", "s"]
    const playerMove = prompt("Rock (r), Paper (p) Or Scissors (s)?")
    const computerMove = choices[Math.floor(Math.random() * choices.length)]
    alert("Computer picks:"+ computerMove)

    if (playerMove == "r" && computerMove == "s" || playerMove == "s" && computerMove == "p" || playerMove == "p" && computerMove == "r"){
        alert("Player Wins This Round!")
        playerScore++;
    }

    else if (computerMove == "r" && playerMove == "s" || computerMove == "s" && playerMove == "p" || computerMove == "p" && playerMove == "r"){
        alert("Computer Wins This Round!")
        computerScore++;
    }
    else {
        alert("Draw!")
    }
    
    alert("Player score is:" + playerScore + "" + "" + "Computer score is:" + computerScore)
}

if (playerScore == 3){
    alert("Player wins the game!")
}

else if (computerScore == 3){
    alert("Computer wins the game!")
}

