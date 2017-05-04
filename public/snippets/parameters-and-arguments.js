const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

// specifying thead prevents the greenification of the above table header row
const thead = document.querySelector('THEAD')
const headerRowElements = thead.querySelectorAll('TR TH');
Array.from(headerRowElements).forEach((el) => greenify(el));