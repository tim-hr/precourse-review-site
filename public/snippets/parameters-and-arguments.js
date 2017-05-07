const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const table = document.getElementsByTagName('table');
greenify(table[1]);