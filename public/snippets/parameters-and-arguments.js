const header = document.querySelector('THEAD TR');

const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(header);