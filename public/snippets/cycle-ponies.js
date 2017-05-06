class PonyManager {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
    .addEventListener('click', this.swapPonies.bind(this));
  }

  swapPonies(evt) {
    document.querySelector('.wrapper').insertBefore(document.querySelectorAll('.my-little-pony')[1], document.querySelectorAll('.my-little-pony')[0]);
  }
}

const ponyManager = new PonyManager();

ponyManager.connectEventHandlers();