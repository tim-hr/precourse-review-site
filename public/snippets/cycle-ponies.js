function swapImagePositions() {
  const firstImage = document.querySelectorAll(".my-little-pony")[0];
  const secondImage = document.querySelectorAll(".my-little-pony")[1];

  const image = document.querySelectorAll('.my-little-pony');

  firstImage.insertBefore(secondImage, firstImage.childNodes[0]);

}
document.getElementById('btn-cycle-ponies').addEventListener('click', swapImagePositions);

//This was as far as I was able to make it, I can't seem to find a way to reset it back to the original state