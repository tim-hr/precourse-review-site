document.getElementById("btn-cycle-ponies").addEventListener('click',function(){
  let imageDiv = document.getElementsByClassName('my-little-pony');
  let tempImage = imageDiv[0].lastElementChild.src;
  imageDiv[0].lastElementChild.src = imageDiv[1].lastElementChild.src;
  imageDiv[1].lastElementChild.src = tempImage;
});