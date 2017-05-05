const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

var thead = document.querySelector('thead');
console.log(thead);

greenify(thead);
