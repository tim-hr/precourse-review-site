const date = new Date();

const clock = {
  getHours: getHours(date),
  getMinutes: getMinutes(date),
  getSeconds: getSeconds(date)
};

function getHours(date) {
  let h = date.getHours();
  document.getElementsByTagName('span')[0].innerHTML = h;
}

function getMinutes(date) {
  let m = date.getMinutes();
  document.getElementsByTagName('span')[1].innerHTML = m;  
}

function getSeconds(date) {
  let s = date.getSeconds();
  document.getElementsByTagName('span')[2].innerHTML = s;
}