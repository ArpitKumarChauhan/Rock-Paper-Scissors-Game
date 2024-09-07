let user_n=0;
let comp_n=0;
const msg = document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const user_score=document.querySelector("#user_score");
const comp_score=document.querySelector("#comp_score");
const computerchoice = (comp)=>{
    const options =["rock","paper","scissors"];
    const ranindex=Math.floor(Math.random()*3);
    return options[ranindex];
};

const drawgame = () => {
    console.log("game draw");
    msg.innerText = "Game was draw! Play again ";
};

const show =(userwin,user,comp) =>{
    if(userwin){
        user_n++;
        user_score.innerText=user_n;
        console.log("you win");
        msg.innerText = `You Win! Your ${user} beats Computer ${comp}`;
        msg.style.backgroundColor ="green";

    }else{
        comp_n++;
        comp_score.innerText=comp_n;
        console.log("you lost");
        msg.innerText = `You Lost! Computer ${comp} beats Your ${user}`;
        msg.style.backgroundColor ="red";
    }
};

const playgame =(user)=>{
    console.log("user choice :",user);
const comp =computerchoice();
console.log("Computer choice :",comp);
if(user === comp){
    drawgame();
    msg.style.backgroundColor ="gray";
}
else{
    let userwin=true;
    if(user==="rock"){
        userwin = comp === "paper" ? false : true;
    }
    else if(user === "paper"){
        userwin = comp ==="scissors" ? false : true;
    }else{
        userwin = comp ==="rock" ? false : true;
    }
    show(userwin,user,comp);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user=choice.getAttribute("id");
        playgame(user);
    })

});
