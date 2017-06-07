// your code here

class SwapImages {

  connectEventHandlers() {

    document.getElementById('btn-cycle-ponies')
      .addEventListener(
        'click',
        this.onSubmit.bind(this));
  }

  swapElements (element1, element2) {
    let clonedElement1 = element1.cloneNode(true);
    let clonedElement2 = element2.cloneNode(true);
    element1.parentNode.replaceChild(clonedElement2, element1);
    element2.parentNode.replaceChild(clonedElement1, element2);
  }

  onSubmit(event) {
    event.preventDefault();

    let ponyImages = document.getElementsByClassName('my-little-pony');
    this.swapElements(ponyImages[0], ponyImages[ponyImages.length - 1]);
  }
}

const swapImages = new SwapImages();
swapImages.connectEventHandlers();