const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

let tableHeader =  document.querySelector('THEAD TR');

// I'm not a 100% sure why this works
//THEAD alone selects the whole table
//TR selects the first tables header. 

greenify(tableHeader);
