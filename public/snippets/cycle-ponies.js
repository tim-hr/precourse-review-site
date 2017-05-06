const swapImage = function() {
  const rows = document.querySelectorAll('.my-little-pony');
  rows[0].parentNode.insertBefore(rows[1], rows[0]);
}

const swapButton = document.getElementById('btn-cycle-ponies');
swapButton.addEventListener('click', swapImage);