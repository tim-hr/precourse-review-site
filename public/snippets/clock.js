let clock = {
  getMinutes: function() {
    const date = new Date();
    return date.getMinutes();
  },
  getSeconds: function() {
    const date = new Date();
    return date.getSeconds();
  },
  getHours : function() {
    const date = new Date();
    return date.getHours();
  }
};
