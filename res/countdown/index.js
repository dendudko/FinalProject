let date;
let timeout;
let dateToCompare = new Date(0, 0, 0, 0, 0, 0, 0);
function out() {
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();
}
async function timer(){
    let promise = new Promise((resolve) => {
        out();
        if (date > dateToCompare){
            date.setSeconds(date.getSeconds()-1);
            timeout = setTimeout(timer, 1000);
        }
        else{
            resolve("Time is over... BOOM!!!");
        }
    })
        .then(value => document.getElementById('timer').innerHTML = value);
}

function start(){
    let sec = document.getElementById("input").value;
    date = new Date(0, 0, 0, 0, 0, sec, 0);
    clearTimeout(timeout);
    out();
    timer();
}

addEventListener('keydown', function(key) {
    if (key.keyCode == 13)
        start();
})

