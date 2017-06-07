const clock = {
  getHours: null,
  getMinutes: null,
  getSeconds: null
};

clock.getHours = function() {
  var date = new Date();
  return date.getHours();
};

clock.getMinutes = function() {
  var date = new Date();
  return date.getMinutes();
};

clock.getSeconds = function() {
  var date = new Date();
  return date.getSeconds();
};