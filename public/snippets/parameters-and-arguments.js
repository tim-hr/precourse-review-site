const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const el = document.querySelectorAll('TH');
greenify(el[2]);
greenify(el[3]);