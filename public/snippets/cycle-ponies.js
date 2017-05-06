const cyclePonies = function () {
  const cyclePoniesButton = document.querySelector('#btn-cycle-ponies');

  cyclePoniesButton.addEventListener('click', function () {
    const divs = document.querySelectorAll('.my-little-pony');
    const image1 = divs[0].querySelector('IMG').src;
    const image2 = divs[1].querySelector('IMG').src;
    
    divs[0].querySelector('IMG').src = image2;
    divs[1].querySelector('IMG').src = image1;
  });
};

cyclePonies();
