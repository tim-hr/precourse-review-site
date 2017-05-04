const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(document.getElementsByTagName("TH")[2]);
greenify(document.getElementsByTagName("TH")[3]);