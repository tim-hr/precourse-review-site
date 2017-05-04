const ponySwapButton = document.getElementById('btn-cycle-ponies');
ponySwapButton.addEventListener('click', clickHandler);
function clickHandler(evt) {
  const ponies = document.getElementsByClassName('my-little-pony');
  const temp = ponies[0].innerHTML;
  ponies[0].innerHTML = ponies[1].innerHTML;
  ponies[1].innerHTML = temp;
}
