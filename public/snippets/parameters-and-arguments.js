const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

let headerElement = document.querySelector('thead tr')

greenify(headerElement);