const greenify = function(el) {
  for (let i = 0; i < el.length; i++) {
    el[i].setAttribute('style', 'background-color: green');
  }
};

const thead = document.querySelectorAll('THEAD TH')

greenify(thead);