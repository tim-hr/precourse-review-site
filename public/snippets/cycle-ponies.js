// your code here
let ponies = document.querySelectorAll('.my-little-pony');
const swapPonies = function() {
  const ponyContainer = document.querySelector('.pony-container');
  ponyContainer.insertBefore(ponies[1], ponies[0]);
  ponies = document.querySelectorAll('.my-little-pony');
};


document.getElementById('btn-cycle-ponies').addEventListener('click', swapPonies);

