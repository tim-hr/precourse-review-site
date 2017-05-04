const date = new Date();

const clock = {
  getHours: null,
  getMinutes: null,
  getSeconds: null
};


function digitalClock(date) {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    document.getElementsByTagName('span')[0].innerHTML = h;
    document.getElementsByTagName('span')[1].innerHTML = m;
    document.getElementsByTagName('span')[2].innerHTML = s;
}

digitalClock(date);