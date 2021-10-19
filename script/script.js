// CLOCK

let clock = setInterval(ticktack, 1000);
checkTime = (t) => {
    if (t < 10) { return '0' + t }
    else
        return t;
};
checkMillsecTime = (t) => {
    if (t < 10) { return '00' + t }
    if (t < 100) { return '0' + t }
    else
        return t;
}
function ticktack() {
    let d = new Date();
    let mounth = checkTime(d.getMonth());
    let dayDate = checkTime(d.getDate());
    let hour = checkTime(d.getHours());
    let minutes = checkTime(d.getMinutes());
    let seconds = checkTime(d.getSeconds());
    document.querySelector('.box__Date').textContent = d.getFullYear() + '.' + mounth + '.' + dayDate;
    document.querySelector('.box__Time').textContent = hour + ':' + minutes + ':' + seconds;
}

// STOPWATCH

let stopwatch;
let s = 0;
let h = 0;
let m = 0;
let ss = 0;
let ms = 0;
function tick() {
    ss += 11;
    h = checkTime(Math.trunc(ss / 3600000));
    m = checkTime(Math.trunc(ss / 60000) % 60);
    s = checkTime(Math.trunc(ss / 1000) % 60);
    if (s == 60) s = '00';
    if (m == 60) m = '00';
    ms = checkMillsecTime(ss % 1000);
    document.querySelector('.stopwatch__timer').textContent = h + ':' + m + ':' + s + ':' + ms;
}
function startClick() {
    document.querySelectorAll('.btn')[0].disabled = true;
    stopwatch = setInterval(tick, 21);
}
function stopClick() {
    clearInterval(stopwatch);
    document.querySelectorAll('.btn')[0].disabled = false;
}
function loopClick() {
    document.querySelector('.stopwatch__note').textContent += (document.querySelector('.stopwatch__timer').textContent + '\n');
}
function resretClick() {
    clearInterval(stopwatch);
    document.querySelector('.stopwatch__note').textContent = '';
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    ss = 0;
    document.querySelector('.stopwatch__timer').textContent = '00:00:00:000';
}

//TIMER
let timerB = 25;
let timer;
let t = 0;
let mt = 0;
let st = 0;
function addClick() {
    timerB += 1;
    document.querySelector('.boxTimer').children[0].textContent = timerB;
}
function subClick() {
    timerB -= 1;
    if (timerB > 0) {
        document.querySelector('.boxTimer').children[0].textContent = timerB;
    }
    else {
        alert('Error');
        timerB = 1;
    }
}
function timerTick() {
    t -= 1;
    mt = checkTime(Math.trunc(t / 60));
    st = checkTime(t % 60);
    document.querySelectorAll('.boxTimer')[1].children[0].textContent = mt + ':' + st;
    if (t==0) clearInterval(timer);
}
function startClickTimer() {
    t = timerB * 60;
    timer = setInterval(timerTick, 1000);
    document.querySelectorAll('.btn')[4].disabled = true;
}
function stopClickTimer() {
    document.querySelectorAll('.btn')[4].disabled = false;
    clearInterval(timer);
}
function resretClickTimer() {
    clearInterval(timer);
    timerB = 25;
    document.querySelectorAll('.boxTimer')[0].children[0].textContent='25';
    document.querySelectorAll('.boxTimer')[1].children[0].textContent='00:00';
}