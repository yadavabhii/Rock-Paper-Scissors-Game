let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#computer-score");
const resetBtn = document.querySelector("button")

const genComChoice = () => {
    const options = ["rock", "paper", "scissors",];
    const comIndex = Math.floor(Math.random() * 3);
    return options[comIndex];
};
const playGame = (userChoice) => {
    const comChoice = genComChoice();
    // console.log("user's choice", userChoice);
    // console.log("Computer's choice", comChoice);
    // Update the user and computer scores
    // Compare the choices and determine the winner
    if (userChoice === comChoice) {
        // console.log("It's a tie!");
        msgPara.innerText = "Game was a draw. Play it again.";
        msgPara.style.backgroundColor = "#07082e";
    } else if (
        (userChoice === "rock" && comChoice === "scissors") ||
        (userChoice === "paper" && comChoice === "rock") ||
        (userChoice === "scissors" && comChoice === "paper")
    ) {
        // console.log("User wins!");
        userScore++;
        playerScore.innerText = userScore;
        msgPara.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msgPara.style.backgroundColor = "green";
    }

    else {
        // console.log("Computer wins!")
        computerScore++;
        compScore.innerText = computerScore;
        msgPara.innerText = `You lose! ${comChoice} beats Your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
};
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices clicked", userChoice)
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    playerScore.innerText = userScore;
    compScore.innerText = computerScore;
    msgPara.innerText = "You can play ";
    msgPara.style.backgroundColor = "#07082e";
    choices.forEach(choice => {
        choice.disabled = false;
    });
})