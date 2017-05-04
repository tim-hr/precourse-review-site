const padZero = (value) => {
  value = String(value);
  if (value.length === 1) {
    return `0${value}`;
  }
  return value;
};

setInterval(() => {
  if (clock.getHours) {
    document.querySelector('.clock .hours').textContent = padZero(clock.getHours());
  }
  if (clock.getMinutes) {
    document.querySelector('.clock .minutes').textContent = padZero(clock.getMinutes());
  }
  if (clock.getSeconds) {
    document.querySelector('.clock .seconds').textContent = padZero(clock.getSeconds());
  }
}, 1000);