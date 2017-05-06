// your code here
const handleSwap = function(){
  const ponyEl = document.getElementsByClassName('my-little-pony');
  ponyEl[1].parentNode.insertBefore(ponyEl[1], ponyEl[0]);
}

const swapButton = document.getElementById('btn-cycle-ponies');
swapButton.addEventListener('click', handleSwap);