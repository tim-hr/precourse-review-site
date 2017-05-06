const pwnies = document.querySelectorAll('.my-little-pony');
const swapBtn = document.querySelector('#btn-cycle-ponies');

swapBtn.addEventListener('click', () => {
  const swap = pwnies[0].cloneNode(true); // true => deep clone
  pwnies[0].innerHTML = pwnies[1].innerHTML;
  pwnies[1].innerHTML = swap.innerHTML;
});
