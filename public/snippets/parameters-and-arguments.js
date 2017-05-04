const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const el = document.querySelector('table thead tr');

console.log(el);

greenify(el);