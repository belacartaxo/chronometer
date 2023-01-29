const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

const divPaused = document.querySelectorAll('.chronometer .column div')

let chronometer;
let second = 0

start.addEventListener('click', function(e){
    start.setAttribute("disabled", "true");
    pause.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    for (let value of divPaused){
        value.classList.remove('paused');
    }
    createDate();
})    

pause.addEventListener('click', function(e){
    pause.setAttribute("disabled", "true");
    start.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    clearInterval(chronometer);
    for (let value of divPaused){
        value.classList.add('paused');
    }
})

reset.addEventListener('click', function(e){
    reset.setAttribute("disabled", "true");
    pause.setAttribute("disabled", "true");
    start.removeAttribute("disabled");
    for (let value of divPaused){
        value.classList.remove('paused');
    }
    clearInterval(chronometer);
    hour.textContent = '00';
    minute.textContent = '00';
    seconds.textContent = '00';
    second=0;
})

function createDate(){
    chronometer = setInterval( function(){
        second++;
        const date = new Date(second*1000);
        const dateTimeZone= new Date(00);

        const valHour = date.getHours() - dateTimeZone.getHours();
        const valMinutes = date.getMinutes();
        const valSeconds = date.getSeconds();
        hour.textContent = valHour <10? '0'+valHour : valHour;
        minute.textContent = valMinutes <10?  '0'+valMinutes : valMinutes;
        seconds.textContent = valSeconds <10? '0'+valSeconds : valSeconds;
    }, 1000)
}

/* date = date.toLocaleTimeString('pt-BR', {hour12:false, timeZone:'UTC'});
function createDate(){
    chronometer = setInterval( function(){
        second++;
        let date = new Date(second*1000);
        console.log(date)

        hour.textContent = date.slice(0,2);
        minute.textContent = date.slice(3,5);
        seconds.textContent = date.slice(6,8);
    }, 1000)
} */