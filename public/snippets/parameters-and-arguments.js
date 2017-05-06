const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

const head = document.querySelector('thead tr');
greenify(head);