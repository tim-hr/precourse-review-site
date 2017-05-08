const greenify = function(el) {
  el = document.querySelectorAll('thead tr');
  el[0].setAttribute('style', 'background-color: green');
};

greenify();