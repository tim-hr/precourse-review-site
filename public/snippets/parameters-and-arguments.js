const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const el = document.querySelector("thead");
greenify(el);