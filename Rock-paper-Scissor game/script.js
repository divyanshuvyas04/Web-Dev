const playGame = (userChoice)=>{
    let compChoice = computerChoice();
    console.log(`Computer's choice =  ${compChoice}`);        
    console.log(`Your choice = ${userChoice}`);
    result(userChoice,compChoice);
}

let userscore = 0, compscore = 0;
const result = (userChoice,compChoice)=>{
    let userwin = true;
    let resultbox =  document.querySelector(".result");
    if(userChoice === compChoice){
        console.log("It's a DRAW");
        resultbox.innerText = "DRAW!";
    }
    else{
        if(userChoice == "Rock")
            userwin = compChoice =="Paper" ? false : true;
        else if(userChoice == "Paper")
            userwin = compChoice =="Scissors" ? false : true;
        else{
            userwin = compChoice =="Rock" ? false : true;
        }
        if(userwin){
            userscore = userscore + 1;
            console.log("You Win");
            resultbox.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
            let userScorePara = document.querySelector(".you-score");
            userScorePara.innerText = userscore;
        }
        else{
            compscore = compscore + 1;
            console.log("You lose");
            resultbox.innerText = `YOU LOST! Your ${userChoice} is beaten by ${compChoice}`;
            let compScorePara = document.querySelector(".computer-score");
            compScorePara.innerText = compscore;
        }
    }
}

let computerChoice = ()=>{
    let options = ["Rock", "Paper", "Scissors"];
    let randIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randIndex];
    return computerChoice;
}

const mychoice = document.querySelectorAll(".box");
mychoice.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
       let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})