class ImageHandler {
  attachEventHandlers() {
    document.querySelector('#btn-cycle-ponies').addEventListener('click', this.onClickSwapPositions);
  }

  onClickSwapPositions(event) {
    const ponies = document.querySelectorAll('.my-little-pony');
    const pony1 = ponies[0].querySelector('div');
    const img1 = ponies[0].querySelector('img');

    const pony2 = ponies[1].querySelector('div');
    const img2 = ponies[1].querySelector('img');

    const ponyName1 = pony1.innerHTML;
    const imgSrc1 = img1.getAttribute('src');

    const ponyName2 = pony2.innerHTML;
    const imgSrc2 = img2.getAttribute('src');

    pony1.innerHTML = ponyName2;
    img1.setAttribute('src', imgSrc2);

    pony2.innerHTML = ponyName1;
    img2.setAttribute('src', imgSrc1);
  }
}

const imageHandler = new ImageHandler();
imageHandler.attachEventHandlers();
