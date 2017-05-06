const pwnyWrappers = document.querySelectorAll('.my-little-pony');
const swapBtn = document.querySelector('#btn-cycle-ponies');

swapBtn.addEventListener('click', () => {
  const swap = pwnyWrappers[0].cloneNode(true); // true => deep clone
  pwnyWrappers[0].innerHTML = pwnyWrappers[1].innerHTML;
  pwnyWrappers[1].innerHTML = swap.innerHTML;
});
