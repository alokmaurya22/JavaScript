const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')


setInterval(function () {
    let date = new Date()
    let myTime = (date.toLocaleTimeString());
    clock.innerHTML = myTime;
}, 1000);