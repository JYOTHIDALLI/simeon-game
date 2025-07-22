let gameSeq=[];
let UserSeq=[];

let btns=["yellow ","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function btnFlash(){
    btnFlash.classList.add(" userflash");
    setTimeout(function(){
        btnFlash.classList.remove("userflash");
    },1000);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText='level${level}';
    let rankIId=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector('.${randColor}');
   // console.log(randIdx);
   // console.log(randColor);
   // console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
   // console.log("curr level",level);
  
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq[idx]===gameSeq.length){
        setTimeout(levelUp,1000);
        }
    
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;

        document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
function btnPress(){

    let btn=this;
    userFlash(btn);
userColor=btn.getAttribute("id");
UserSeq.push(userColor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

