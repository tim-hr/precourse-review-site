const clock = {
  getHours: function() {
  	var d = new Date();
  	var hr = d.getHours();
  	return hr;
  },

  getMinutes: function() {
  	var d = new Date();
  	var min = d.getMinutes();
  	return min;
  },

  getSeconds: function() {
  	var d = new Date();
  	var sec = d.getSeconds();
  	return sec;
  }
};
