const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const element = document.querySelector('thead tr')
greenify(element);
