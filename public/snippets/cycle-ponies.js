const swapChildren = function(...imgEls) {
  imgEls[0].parentNode.insertBefore(imgEls[1], imgEls[0]);
}

const onSubmitPonies = function(event) {
  const imgs = document.querySelectorAll('.my-little-pony');
  swapChildren(...imgs);
}

EventListener('#btn-cycle-ponies', onSubmitPonies);
