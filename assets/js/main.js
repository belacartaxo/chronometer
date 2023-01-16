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
    clearInterval(chronometer);
    for (let value of divPaused){
        value.classList.remove('paused');
    }
    createDate();
})    

pause.addEventListener('click', function(e){
    clearInterval(chronometer);
    for (let value of divPaused){
        value.classList.add('paused');
    }
})

reset.addEventListener('click', function(e){
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
        let hr = date.getHours()-21;
        let min = date.getMinutes();
        let sec = date.getSeconds();
        
        hr = hr < 10? '0'+hr : hr;
        min = min < 10? '0'+min : min;
        sec = sec < 10? '0'+sec : sec;

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
    }, 1000)
}
