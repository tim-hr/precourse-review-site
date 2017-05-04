const swapPositions = function() {
  const wrapper = document.querySelector('.wrapper');
  const topPony = document.querySelectorAll('.my-little-pony')[0];
  const bottomPony = document.querySelectorAll('.my-little-pony')[1];
  wrapper.removeChild(bottomPony)
  wrapper.insertBefore(bottomPony, topPony)
}

document.getElementById("btn-cycle-ponies")
  .addEventListener("click", swapPositions);