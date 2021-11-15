a = new Date();
let date = a.toLocaleDateString();
let time= a.getHours() + ":" + a.getMinutes(); ":" + a.getSeconds();

document.getElementById('time').innerHTML=date+time;