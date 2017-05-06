let theadTr = document.querySelectorAll("thead tr")[0];

const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};


greenify(theadTr);