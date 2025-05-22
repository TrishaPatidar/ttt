let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#new-game");
let msgbox = document.querySelector(".msg-container");
let message = document.querySelector("#msg");



let turnO= true; //playerX, playerO

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetgame = ()=>{
    turnO= true;
    enablebox();
    msgbox.classList.add("hide");
}
const newgame = ()=>{
    turnO= true;
    enablebox();
    msgbox.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
        box.innerText = "O";
        turnO= false;

       } else{
        box.innerText= "X";
        turnO= true;
       }
       box.disabled= true;
       checkwinner();
    });
   
});
 const disablebox =()=>{
    for(let box of boxes){
        box.disabled= true;
    }
 }  
 const enablebox =()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
 }  
 const showwinner =(winner)=>{
    msg.innerText = `congratulations the Winner is ${winner}`;
  
    msgbox.classList.remove("hide");
    disablebox();
 }
 

let checkwinner= ()=>{
    for (let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;


            if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner", pos1Val);
                    showwinner(pos1Val);
                    
                } 
            }
    }
}
newgamebtn.addEventListener("click",newgame);
resetbtn.addEventListener("click",resetgame);
