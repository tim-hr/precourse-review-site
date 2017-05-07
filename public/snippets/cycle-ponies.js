// your code here

class PonyViewManager {

  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener(
        'click',
        this.onClickCyclePonies.bind(this));
  }

  onClickCyclePonies(event) {
    const names = document.querySelectorAll('.my-little-pony div');
    const name0 = names[0].textContent;
    names[0].textContent = names[1].textContent;
    names[1].textContent = name0;

    const images = document.querySelectorAll('.my-little-pony img');
    const img0 = images[0].getAttribute('src');
    images[0].setAttribute('src', images[1].getAttribute('src'));
    images[1].setAttribute('src', img0);
  }

}


const ponyViewManager = new PonyViewManager();
ponyViewManager.connectEventHandlers();
