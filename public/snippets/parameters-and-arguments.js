var headerRow = document.querySelector('THEAD TR');

const greenify = function(el) {
  headerRow.setAttribute('style', 'background-color: green');

};

greenify(headerRow);