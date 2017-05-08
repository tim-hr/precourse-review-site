const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};
const tableHeaderRow = document.querySelectorAll('THEAD TR')[0];
greenify(tableHeaderRow);