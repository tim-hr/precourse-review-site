const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const tableHeader = document.querySelector("table thead tr"); 
greenify(tableHeader);