let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    console.log("game was draw");
     msg.innerText="Game was Draw .play Again .";
     msg.style.backgroundColor="#081b31"
}

const gencompchoice = () => {
    
    let options=["rock","paper","scissors"];
    const ramIdx=Math.floor(Math.random()*3);
    return options[ramIdx];
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win !");
        msg.innerText=`You win !${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    }
    else {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lose ");
        msg.innerText=`You Lose . ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    // console.log("userchoice is",userchoice);
    const compchoice=gencompchoice();
    // console.log("comp choice is ", compchoice);

    if(userchoice === compchoice) {
        // draw 
        drawgame();
    }
    else {
        let userwin=true;

        if(userchoice=="rock") {
            userwin=compchoice === "paper" ? false :true;
        }
        else if(userchoice=="paper") {
            userwin=compchoice === "scissors" ? false : true;
        }
        if(userchoice=="scissors") {
            userwin=compchoice === "rock" ? false :true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)    })
})