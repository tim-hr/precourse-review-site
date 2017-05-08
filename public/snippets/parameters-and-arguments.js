const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(document.getElementsByTagName("table")[1].getElementsByTagName('tr')[0]);