const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};
const tShirtHeader = document.querySelector('THEAD > TR');
greenify(tShirtHeader);
