let gamesSeq=[];
let userSeq= [];
let started = false;   //abhi game start nahi hua
let level = 0;    //abhi game start nahi hua tau level 0
let btns = ["yellow", "red", "purple","green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game started");
        started == true;
        //level start hoga tau levelup function ko call kar lain ge
        levelUp();

    }
});
function gameFlash(btn){
    btn.classList.add("flash");   //add flash class
    setTimeout(function () {
        btn.classList.remove("flash");
    },250)

}
function userFlash(btn){
    btn.classList.add("userflash");   //add flash class
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250)

}

function levelUp(){
     userSeq = [];
    level++;     //increase level
    h2.innerText = `level ${level}`;
    //random button choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gamesSeq.push(randColor);
    console.log(gamesSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
   gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("curr level: ", level);
   
    //let idx= level-1;
    if(userSeq[idx] === gamesSeq[idx]) {
        if(userSeq.length == gamesSeq.length){
            setTimeout(levelUp,1000);
        }
        //console.log("same value");
}
    else{
        //h2.innerText ='Game Over! Press any key to start';
        h2.innerHTML =`Game Over! your score was<b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}

 function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    checkAns(userSeq.length-1);
 }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
    function reset(){
        started = false;
        gameSeq=[];
        userSeq=[];
        level = 0;

    }

 
