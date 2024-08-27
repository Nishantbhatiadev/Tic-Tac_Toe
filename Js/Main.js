let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgame = document.querySelector("#new-btn")
let messagecont = document.querySelector(".win")
let message = document.querySelector(".msg")
let turnO = true;

const win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    messagecont.classList.add("hide")
}

boxes.forEach((box) =>{
     box.addEventListener("click", () =>{
        console.log("box clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
     })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) =>{
    message.innerText = `winner is ${winner}`;
    messagecont.classList.remove("hide")
    disableboxes();
} 

const checkWinner = () =>{
    for(pattern of win_patterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log('WINNER', position1)
                showWinner(position1);
            } 
        }
    }
};

newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

