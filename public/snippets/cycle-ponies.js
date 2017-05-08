class ViewManagerPony {

  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener(
        'click',
        this.onClick.bind(this))
  }

  onClick() {
    ////TEXT SWAP
    const ponyText = document.querySelectorAll('.my-little-pony div');
    const text1 = ponyText[0].textContent
    const text2 = ponyText[1].textContent
    const textBuffer = text1;
    ponyText[0].textContent = text2;
    ponyText[1].textContent = textBuffer;

    ////IMAGE SWAP
    const ponyImage = document.querySelectorAll('.my-little-pony img');
    const img1 = ponyImage[0].src;
    const img2 = ponyImage[1].src;
    const imgBuffer = img1;
    ponyImage[0].src = img2;
    ponyImage[1].src = imgBuffer;

  }
}

const viewManagerPony = new ViewManagerPony();
viewManagerPony.connectEventHandlers();