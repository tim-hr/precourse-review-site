const greenify = function(el) {
  for (i = 0; i < el.length; i++){
    el[i].setAttribute("style", "background-color: green;")
  }
};

greenify(document.getElementsByTagName("TH"));