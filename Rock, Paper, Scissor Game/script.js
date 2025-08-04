let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gneCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Game was Draw."

}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("win");
        msg.innerText = "You are Win."
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("lose");
        msg.innerText = "You are Lose."
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const CompChoice = gneCompChoice();
    //Generate computer choice 
    console.log("comp choice = ", CompChoice);

    if (userChoice === CompChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = CompChoice === "scissors" ? false : true;
         } else {
            //rock,paper
            userWin = CompChoice === "rock" ? false : true;
        
    } showWinner(userWin);

}

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
