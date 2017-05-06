const cycleButton = document.getElementById('btn-cycle-ponies');

cycleButton.addEventListener('click', function() {
  const parentElement = document.getElementById('pony-parent')
  const firstElement = document.querySelectorAll('.my-little-pony')[0];
  const secondElement = document.querySelectorAll('.my-little-pony')[1];

  parentElement.insertBefore(secondElement, firstElement)
}, false);
