var player;
var playerScore = 0;
var computer;
var computerScore = 0;

var moves = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // move buttons
        let move = document.createElement("img");
        move.src = moves[i] + ".png";
        move.classList.add("move");
        move.addEventListener("click", selectChoice);
        document.getElementById("moves").appendChild(move);
    }
};

function selectChoice() {
    player = this.src.split("/").pop().split(".")[0]; // push png to box
    document.getElementById("Pmove").src = this.src;

    computer = moves[Math.floor(Math.random() * 3)]; // computer choice
    document.getElementById("Cmove").src = computer + ".png";

    if (player == computer) {
      playerScore+=0;       // It's a draw
      computerScore+=0;
      } 
      else {
        if (player == "rock") {
            if (computer == "scissors") {
                playerScore += 1;
            } else if (computer == "paper") {
                computerScore += 1;
            }
        } else if (player == "scissors") {                 //updating case scores
            if (computer == "paper") {
                playerScore += 1;
            } else if (computer == "rock") {
                computerScore += 1;
            }
        } else if (player == "paper") {
            if (computer == "rock") {
                playerScore += 1;
            } else if (computer == "scissors") {
                computerScore += 1;
            }
        }
    }

    document.querySelector(".Pscore").innerText = playerScore;
    document.querySelector(".Cscore").innerText = computerScore;                //updating scores in score bpox

    if (playerScore == 3) {
        swal("You Win.");
        resetGame();                              //condition to find who ios the qinner
    } else if (computerScore == 3) {
        swal("Computer Wins.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;                                         //when score reaches 3 reset the game
    document.querySelector(".Pscore").innerText = playerScore;
    document.querySelector(".Cscore").innerText = computerScore;
}