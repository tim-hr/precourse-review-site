const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const headerRowEl = document.querySelector('#header-row');

greenify(headerRowEl);
