document.getElementById("btn-cycle-ponies").addEventListener("click", swap);

function swap() {
  const pony1 = document.getElementsByClassName("my-little-pony")[0];
  const pony2 = document.getElementsByClassName("my-little-pony")[1];

  pony2.parentNode.insertBefore(pony2, pony1);
}