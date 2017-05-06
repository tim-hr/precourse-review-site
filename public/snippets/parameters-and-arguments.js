const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

let headerEl = document.querySelector('THEAD TR');
greenify(headerEl);