const getHours = function() {
	const timeNow = new Date();
	return timeNow.getHours();
}

const getMinutes = function() {
	const timeNow = new Date();
	return timeNow.getMinutes();
}

const getSeconds = function() {
	const timeNow = new Date();
	return timeNow.getSeconds();
}

const clock = {
  getHours: getHours,
  getMinutes: getMinutes,
  getSeconds: getSeconds
};


