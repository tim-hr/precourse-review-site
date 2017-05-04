const clock = {
  getHours: function() {
    let timeStamp = new Date(Date.now());
    return timeStamp.getHours();
  },
  getMinutes: function() {
    let timeStamp = new Date(Date.now());
    return timeStamp.getMinutes();
  },
  getSeconds: function() {
    let timeStamp = new Date(Date.now());
    return timeStamp.getSeconds();
  }
};
