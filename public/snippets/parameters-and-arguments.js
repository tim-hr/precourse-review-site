const greenify = function(el) {
  for (let i = 0; i < el.length; i++) {
  el[i].setAttribute('style', 'background-color: green');
  };
};

const head = document.querySelectorAll('thead tr th');
greenify(head);