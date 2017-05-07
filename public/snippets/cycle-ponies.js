class Swap {
  constructor() {

  }

  init() {
    this.initDomReferences();
    this.attachEventListeners();
  }

  initDomReferences() {
    this.swapButton = document.querySelector('#btn-cycle-ponies');
    this.topPonyName = document.querySelector('.my-little-pony-top DIV').textContent;
    this.topPonyImg = document.querySelector('.my-little-pony-top IMG').getAttribute('src');
    this.topPonyImgValue = document.querySelector('.my-little-pony-top IMG');
    this.botPonyName = document.querySelector('.my-little-pony-bot DIV').textContent;
    this.botPonyImg = document.querySelector('.my-little-pony-bot IMG').getAttribute('src');
    this.botPonyImgValue = document.querySelector('.my-little-pony-bot IMG');

  }

  swapPositions() {
    document.querySelector('.my-little-pony-top DIV').innerHTML = this.swapName(this.topPonyName);
    document.querySelector('.my-little-pony-bot DIV').innerHTML = this.swapName(this.botPonyName);
    this.topPonyImgValue.setAttribute('src', this.swapImg(this.topPonyImg));
    this.botPonyImgValue.setAttribute('src', this.swapImg(this.botPonyImg));
    this.initDomReferences();
  }

  swapName(name) {
    if (name === 'Fluttershy') {
      return 'Apple Jack';
    } else {
      return 'Fluttershy';
    };
  }

  swapImg(img) {
    if (img === 'http://i.imgur.com/6PwBk7gm.png') {
      return 'http://i.imgur.com/obV6ULBm.png';
    } else {
      return 'http://i.imgur.com/6PwBk7gm.png'
    };
  }

  attachEventListeners() {
    this.swapButton.addEventListener('click', this.swapPositions.bind(this));
  }
};

const swapPonies = new Swap();
swapPonies.init();