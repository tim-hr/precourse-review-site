class PonyViewManager {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener('click',
        this.onClick.bind(this));
  }

  onClick(event) {
    event.preventDefault();
    var ponyEls = document.querySelectorAll('.my-little-pony');

    let ponyOne = ponyEls[0].innerHTML;
    let ponyTwo = ponyEls[1].innerHTML;

    ponyEls[0].innerHTML = ponyTwo;
    ponyEls[1].innerHTML = ponyOne;
  }
}

const ponyViewManager = new PonyViewManager();
ponyViewManager.connectEventHandlers();
