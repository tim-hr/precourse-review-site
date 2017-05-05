const clock = {
  getHours: function() {
    let hrs = new Date();
    let hours = hrs.getHours();
    return hours;
  },
  getMinutes: function() {
    let min = new Date();
    let minutes = min.getMinutes();
    return minutes;
  },
  getSeconds: function() {
    let sec = new Date();
    let seconds = sec.getSeconds();
    return seconds;
  }
};


