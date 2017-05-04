const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const headerList = document.querySelectorAll('TABLE THEAD TH');
headerList.forEach( el => greenify(el));