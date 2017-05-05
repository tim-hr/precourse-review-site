const greenify = function(el) {
  let cell = document.getElementsByTagName(el);
  cell.setAttribute('style', 'background-color: green');
};

greenify('th');