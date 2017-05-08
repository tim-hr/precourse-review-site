

const swapPropertyValues = function(el1, el2, propName) {
  [el1[propName], el2[propName]] = [el2[propName], el1[propName]];
};

const btn1 = document.querySelector('#btn-cycle-ponies');
btn1.addEventListener('click', function(){
  const ponyLabelEls = document.querySelectorAll(".my-little-pony div");
  const ponyImgEls = document.querySelectorAll(".my-little-pony img");

  swapPropertyValues(ponyLabelEls[0], ponyLabelEls[1], 'textContent');
  swapPropertyValues(ponyImgEls[0], ponyImgEls[1], 'src');
});