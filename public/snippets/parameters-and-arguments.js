const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const titleRow = document.querySelectorAll('THEAD TR')[0];
greenify(titleRow);

