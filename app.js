//select every box to manipulate
let boxes=document.querySelectorAll(".box");
//select reset btn to add life into it 
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO= true;//player X=>true player Y=>false

//lets use array to choose winning pattern from it::
//use of 2d array: u may store all patterns like list for example [[pattern1],[pattern2]...........]

const winning_patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


const resetGame=()=>{
    turnO=true;
    enable_boxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){ //player O
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });  
});

const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    } 
};

const enable_boxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
};


const showWinner=(winner)=>{
    msg.innerText=`congrats hero ${winner}`;
    msgcontainer.classList.remove("hide");
    disable_boxes();
};


const checkWinner=()=>{
    for(let pattern of winning_patterns){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                         console.log("Winner Winner Chicken Dinner",pos1Val);
                         showWinner(pos1Val);
                }
            }
    }
}


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
