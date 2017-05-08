let  swapPositionBtn= document.getElementById("btn-cycle-ponies");
swapPositionBtn.onclick = function(){
  const pictureEl = document.getElementsByClassName('my-little-pony');
  pictureEl[1].parentNode.insertBefore(pictureEl[1],pictureEl[0]);
  swapPositionBtn.blur();
};