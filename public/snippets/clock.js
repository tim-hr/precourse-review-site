const getHours = function() {
	const date = new Date();
	return date.getHours();
}

const getMinutes = function() {
	const date = new Date();
	return date.getMinutes();
}

const getSeconds = function() {
	const date = new Date();
	return date.getSeconds();
}

const clock = {
  getHours: getHours,
  getMinutes: getMinutes,
  getSeconds: getSeconds
};

