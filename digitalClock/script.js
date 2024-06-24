// console.log(time.toLocaleTimeString());

function showTime() {
    const time = new Date()
    document.querySelector('.clock').innerHTML = time.toLocaleTimeString()
}


setInterval(showTime, 1000);