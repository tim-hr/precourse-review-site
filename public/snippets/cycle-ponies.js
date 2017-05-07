let swap = function () {
  let pony = document.getElementsByClassName('my-little-pony');
  pony[0].parentNode.insertBefore(pony[1], pony[0]);
}

let ponyButton = document.getElementById('btn-cycle-ponies');
ponyButton.onclick = swap;
