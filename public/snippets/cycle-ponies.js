
class CyclePonies {

  constructor() {
    this.swapButton = document.querySelector('#btn-cycle-ponies');
    this.firstPony = document.getElementsByClassName('my-little-pony');
    console.log(this.firstPony);
  }

  attachEventHandlers() {

    this.swapButton.addEventListener('click', this.swapPoniesClick.bind(this));
  }

  swapPoniesClick(evt) {
    const pony = this.firstPony[1];
    pony.parentNode.insertBefore(pony,pony.parentNode.children[9]);
  }

}

const ponySwap = new CyclePonies();
ponySwap.attachEventHandlers();

