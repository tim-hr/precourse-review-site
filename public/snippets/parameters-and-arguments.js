const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(document.querySelectorAll('table thead tr th')[0]);
greenify(document.querySelectorAll('table thead tr th')[1]);