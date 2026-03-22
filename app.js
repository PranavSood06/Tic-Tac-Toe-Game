let turn = true;
 
let buttons = document.querySelectorAll(".Box");

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        check_winner();
    })
});

const disableBoxes = () => {
    buttons.forEach((box)=>{
        box.disabled = true;
    })
};


const resetgame = () => {
    turn = true;
    win = false;
    for(let box of buttons){
        box.disabled = false;
        box.innerText = "";
    }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click",resetgame);

let winner = document.querySelector(".winner");
const newgame = ()=> {
    resetgame();
    winner.classList.add("hide");
    reset.classList.remove("hide");
}

let newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click",newgame);

let winner_name = document.querySelector(".winner-name");
let win = false;
const check_winner = () =>{
    for(let pattern of winPatterns){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                winner_name.innerText = `Winner ${pos1}`;
                disableBoxes();
                winner.classList.remove("hide");
                reset.classList.add("hide");
                win = true;
                return;
            }
        }
    }
    let draw = true;
    for(let box of buttons){
        if(box.innerText == ""){
            draw = false;
            break;
        }
    }

    if(!win && draw){
        winner_name.innerText = "Draw !!"
        winner.classList.remove("hide");
        reset.classList.add("hide");
    }
};

