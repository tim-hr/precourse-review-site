let date = new Date();

const clock = {
  getHours: date.getHours(),
  getMinutes: date.getMinutes(),
  getSeconds: date.getSeconds()
};

// the function gets the current time but
// it does not render in methods.html

console.log(clock.getHours)
console.log(clock.getMinutes)
console.log(clock.getSeconds)