const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

let table = document.getElementsByTagName("table")[1]
let headRow = table.getElementsByTagName('tr')[0]

greenify(headRow);