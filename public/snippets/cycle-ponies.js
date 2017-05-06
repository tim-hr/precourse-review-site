document.getElementById("btn-cycle-ponies").addEventListener("click", pictureSwap);

function pictureSwap(){
  const parentElement = document.querySelector('.wrapper');
  const pony = document.querySelector('.my-little-pony');
  parentElement.removeChild(pony);

  const newFirstPony = document.querySelector('.my-little-pony');
  newFirstPony.parentNode.insertBefore(pony, newFirstPony.nextSibling);
}
