//KEY PRESS-->GAME START
//btn flash --->level 1 random button flash
//game seq for example["yellow", "blue", "blue",.....]
//user seq [user
//check
//level up or game over//middle or last// if middle then next btn presswait and check// if last btn last(currlevel idx= last idx)--> level up-->game new color generate;

//btn press user<-->game  through event listener

let gameSeq=[];
let userSeq=[];
let btns=["yellow","red", "purple", "green"];

let started=false;
let level=0;
let h2= document.querySelector("h2");
let start=document.querySelector(".start");
start.addEventListener("click", function () {
if (started== false) {
    console.log("game is started");
    started=true;
    levelUp();
}

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}
function levelUp() {
    userSeq=[];    
    level++;
    h2.innerText=`level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   /* console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);*/
    gameSeq.push(randColor);
    console.log(gameSeq);

    
    //random btn choose
    gameFlash(randBtn);

}

function checkAns(idx){
    //console.log("curr level:", level);
  //  let idx=level-1;

    if (userSeq[idx] === gameSeq[idx]) {
      if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
      }
    }
    else {
        h2.innerHTML=`Game Over!  Your score was  <b>${level}</b> </br> Press any Key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    //console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);

}

function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}





