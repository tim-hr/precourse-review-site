const clock = {
  date: new Date(),
  getHours: function() {
    return this.date.getHours();
  },
  getMinutes: function() {
    return this.date.getMinutes();
  },
  getSeconds: function() {
    return this.date.getSeconds();
  }
};