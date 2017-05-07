const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(document.querySelector("thead tr"));
