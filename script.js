let UserScore=0;
let CompScore=0;

const user_score=document.querySelector("#yourscore");
const comp_score=document.querySelector("#compscore");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })
})
const gencompchoice =() =>{
    const options=["Rock" , "Paper" ,"Scissor"];
    const optionidx=Math.floor(Math.random()*3);
    return options[optionidx];
}
userwin = () =>{
    console.log("you win");
    msg.innerText="WOW! You Win \n Chose again";
    msg.style.backgroundColor = "green";
    msg.style.color="white";
    UserScore++;
    user_score.innerText=UserScore;
}
userloss = () =>{
    console.log("you loss");
    msg.innerText="Opps! You loss \n Chose again";
    msg.style.backgroundColor="red";
    msg.style.color="white";
    CompScore++;
    comp_score.innerText=CompScore;
} 
draw =() =>{
    console.log("It's draw");
    msg.innerText="Ohh! It's Draw \n Chose again";
    msg.style.backgroundColor="#17203D";
    msg.style.color="#6552D0";
}
const playgame =(userchoice) =>{
    const compchoice=gencompchoice();
    console.log(userchoice);
    console.log(compchoice);
    if(compchoice===userchoice){
        draw();
    }
    else{
        if(userchoice==="Rock" && compchoice==="Paper"){
            userloss();
        }
        if(userchoice==="Rock" && compchoice==="Scissor"){
            userwin();
        }
        if(userchoice==="Paper" && compchoice==="Scissor"){
            userloss();
        }
        if(userchoice==="Paper" && compchoice==="Rock"){
            userwin();
        }
        if(userchoice==="Scissor" && compchoice==="Rock"){
            userloss();
        }
        if(userchoice==="Scissor" && compchoice==="Paper"){
            userwin();
        }
    }
}