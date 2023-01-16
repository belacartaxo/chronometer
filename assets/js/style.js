const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const watch = setInterval(function(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    hr = hr < 10? '0'+hr : hr;
    min = min < 10? '0'+min : min;
    sec = sec < 10? '0'+sec : sec;
    
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}, 1000)