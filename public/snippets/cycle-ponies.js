let swapPonies = function () {
  let pony = document.getElementsByClassName('my-little-pony');
  pony[0].parentNode.insertBefore(pony[1], pony[0]);
}

let swapPositionsButton = document.getElementById('btn-cycle-ponies');
swapPositionsButton.onclick = swapPonies;