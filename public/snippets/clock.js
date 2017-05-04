
const getHours = function() {
  return new Date().getHours();
};
const getMinutes = function() {
  return new Date().getMinutes();
};
const getSeconds = function() {
  return new Date().getSeconds();
};

const clock = {
  getHours: getHours,
  getMinutes: getMinutes,
  getSeconds: getSeconds 
};

