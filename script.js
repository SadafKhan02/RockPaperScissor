let userScore=0;
let comScore=0;
  

let choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");

const genCompChoice= ()=>{
    const options = ["rock", "paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawGame= ()=>{
    console.log("Game was draw...");
    msg.innerText="Game was draw!"
    msg.style.backgroundColor="#081b31"
}
const showWinner=(userWin,userChoice,compChoice )=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("you win!");
        msg.innerText= `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        compScorePara.innerText=comScore;
        console.log("you lose!");
        msg.innerText=`you loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


 const playGame= (userChoice)=>{
    console.log("user choice=", userChoice);
    // generate computer choice
    const compChoice= genCompChoice();
    console.log("computer choice=", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
        else{
            let userWin = true;
            if(userWin==="rock"){
                userWin=compChoice==="paper" ? false :true;

            }
            else if(userChoice==="paper"){
               userWin= compChoice==="scissors" ? false : true;
            }
            else {
                userWin===compChoice==="rock" ? false: true;

            }
            showWinner(userWin, userChoice, compChoice);
        }
 }
 



    choices.forEach((choices)=>{
     choices.addEventListener("click", ()=>{
     const userChoice = choices.getAttribute("id");
    playGame(userChoice);
    });
});

