const clock = {
  getHours: getHours,
  getMinutes: getMinutes,
  getSeconds: getSeconds
};

function getHours() {
  dateObj = new Date();
  return dateObj.getHours();
}

function getMinutes() {
  dateObj = new Date();
  return dateObj.getMinutes();
}

function getSeconds() {
  dateObj = new Date();
  return dateObj.getSeconds();
}


