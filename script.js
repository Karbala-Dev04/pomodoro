let btn_start = document.getElementById("start");
let btn_pause = document.getElementById("pause");
let btn_reset = document.getElementById("reset");


let totalMinutes = 25*60;

let commencer = btn_start.addEventListener('click', startTimes)

function startTimes(){
    setInterval(() => {
        totalMinutes --
    }, 1000);
}