const time = new Date();

const clock = {
  getHours: function(){
    return time.getHours();
  },
  getMinutes: function(){
    return time.getMinutes()
  },
  getSeconds: function(){
    return time.getSeconds();
  }
};
