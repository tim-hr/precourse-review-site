const swapPonies = function(event) {
  const ponies = document.getElementsByClassName('my-little-pony');
  const tmp = ponies[0].childNodes[1].textContent;
  
  ponies[0].childNodes[1].textContent = ponies[1].childNodes[1].textContent;
  ponies[1].childNodes[1].textContent = tmp;

  const tmpImg = ponies[0].childNodes[3].src;
  ponies[0].childNodes[3].src = ponies[1].childNodes[3].src;
  ponies[1].childNodes[3].src = tmpImg;
}

