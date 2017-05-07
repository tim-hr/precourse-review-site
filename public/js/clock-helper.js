const padZero = (value) => {
  value = String(value);
  if (value.length === 1) {
    return `0${value}`;
  }
  return value;
};

setInterval(() => {
  if (clock.getHours) {
    document.querySelector('.clock .hours').textContent = padZero(new Date().getHours());
  }
  if (clock.getMinutes) {
    document.querySelector('.clock .minutes').textContent = padZero(new Date().getMinutes());
  }
  if (clock.getSeconds) {
    document.querySelector('.clock .seconds').textContent = padZero(new Date().getSeconds());
  }
}, 1000);