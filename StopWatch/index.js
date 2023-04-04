const displaytime= document.querySelector("#displaytime");
const start= document.querySelector("#startBtn");
const pause= document.querySelector("#pauseBtn");
const reset= document.querySelector("#resetBtn");

let elapsedTime=0;
let startTime=0;
let currTime=0;
let paused=true;
let intervalId;
let hrs=0;
let min=0;
let sec=0;




start.addEventListener("click", ()=>{
    if(paused) {paused=false;
    startTime=Date.now()-elapsedTime;
    intervalId=setInterval(updateTime, 1000);}

});
pause.addEventListener("click", ()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
reset.addEventListener("click", ()=>{
        elapsedTime=0;
        startTime=0;
        currTime=0;
        paused=true;
        intervalId;
        hrs=0;
        min=0;
        sec=0;
        displaytime.innerHTML="00:00:00";
});

function updateTime(){
elapsedTime=Date.now() -startTime;

sec=Math.floor((elapsedTime/1000)%60);
min=Math.floor((elapsedTime/(1000*60))%60);
hrs=Math.floor((elapsedTime/(1000*60*60))%60);


sec=pad(sec);
min=pad(min);
hrs=pad(hrs);
displaytime.innerHTML=`${hrs}:${min}:${sec}`;
function pad(unit) {return (("0")+unit).length > 2 ? unit :"0"+unit;}
}

