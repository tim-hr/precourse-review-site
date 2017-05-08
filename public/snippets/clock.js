let today = new Date();
const clock = {
  getHours: today.getHours(),
  getMinutes: today.getMinutes(),
  getSeconds: today.getSeconds()
};


document.getElementById('hours').innerHTML = clock.getHours;
document.getElementById('minutes').innerHTML = clock.getMinutes;
document.getElementById('seconds').innerHTML = clock.getSeconds;

//I couldn't figure out how to dynamically have the
//clock display updating dynamically