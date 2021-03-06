let speed = 0;
let ep = 1;
let SpawnIntervalID;
let cells = document.getElementsByClassName("cell");
let score;
let chAssSikiTimerID;
let timerSec;

for (let i=0; i<cells.length; i++)
{
    cells[i].addEventListener('mousedown', () => {
        if(cells[i].style.backgroundImage!=''){
            let audio = new Audio('hit.mp3');
            audio.play();
            cells[i].style.backgroundImage='';
            score=score+100;
            document.getElementById('count').innerHTML = "SCORE: " + score;
        }
    })
}

function chooseMole(){
    if (speed==1){
        document.getElementById('KK').style.color="darkred";
        document.getElementById('KA').style.color = "#ffcd08";
        document.getElementById('KT').style.color = "#ffcd08";
        restartGame();
    }
    else if (speed==2) {
        document.getElementById('KK').style.color = "#ffcd08";
        document.getElementById('KA').style.color = "darkred";
        document.getElementById('KT').style.color = "#ffcd08";
        restartGame();
    }
    else if (speed==3) {
        document.getElementById('KK').style.color = "#ffcd08";
        document.getElementById('KA').style.color = "#ffcd08";
        document.getElementById('KT').style.color = "darkred";
        restartGame();
    }
}

function epileptic() {
    if (ep<0) {
        if (ep==-1){
        document.getElementById('body').style.background = "white";
        ep = -2;
    } else if (ep == -2) {
        document.getElementById('body').style.background = "red";
        ep = -3;
    } else if (ep == -3) {
        document.getElementById('body').style.background = "black";
        ep = -1;
    }
    recEp();
}
        else if (ep>0) {
        document.getElementById('body').style.background = 'linear-gradient(to bottom right, midnightblue,  purple) no-repeat';
    }
}

function recEp(){
    epiworks = setTimeout(epileptic, 85);
}

function timer(){
    timerSec--;
    document.getElementById('timer').innerHTML = "TIME: " + timerSec;
    if (timerSec==0) {
        clearTimeout(SpawnIntervalID);
        clearInterval(chAssSikiTimerID);
        document.getElementById('timer').innerHTML="GAME OVER!";
        for (let i = 1; i <= 16; i++) {
            document.getElementById(i).style.backgroundImage = '';
        }
    }
}

function chAssSiki(){
    chAssSikiTimerID = setInterval(timer, 1000);
}

function startGame(){
    score = 0;
    timerSec = 60;
    chAssSiki();
    spawnInterval();
}

function spawnMole() {
    let rand = Math.floor(Math.random()*16+1);
    let cellToSpawn = document.getElementById(rand);
    if (speed==1){
        cellToSpawn.style.backgroundImage = 'url(KK.jpg)';}
    else if (speed==2){
        cellToSpawn.style.backgroundImage = 'url(KA.jpg)';}
    else if (speed==3){
        cellToSpawn.style.backgroundImage = 'url(KT.jpeg)';}
    timeOutDeleteMole(cellToSpawn);
}

function spawnInterval(){
    SpawnIntervalID = setInterval(spawnMole, 900 / speed);
}

async function timeOutDeleteMole(cellToDelete){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(   cellToDelete.style.backgroundImage = ''),
            (1200/speed)+Math.floor(Math.random()*(1200/speed)))
    });
}

function restartGame() {
    for (let i = 1; i <= 16; i++) {
        document.getElementById(i).style.backgroundImage = '';
    }
    document.getElementById('timer').innerHTML = "TIME: 60";
    document.getElementById('count').innerHTML = "SCORE: 0";
    clearInterval(SpawnIntervalID);
    clearInterval(chAssSikiTimerID);
    startGame();
}

function stopGame(){
    timerSec=1;
}