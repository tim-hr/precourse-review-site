class Ponies {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener('click', this.switchImg.bind(this))
  }

  switchImg() {
    // let Pony = document.getElementsByClassName('my--pony');
    let pony = document.querySelectorAll('.my-little-pony');
    let pony1 = pony[0];
    let firstName = pony1.querySelector('DIV');
    let firstImg = pony1.querySelector('IMG');
    let pony2 = pony[1]; 
    let secondName = pony2.querySelector('DIV');
    let secondImg = pony2.querySelector('IMG');
    // firstName.textContent = secondName.textContent;
    // secondName.textContent = firstName.textContent;
    // firstImg.setAttribute('src', secondImg.src);
    // secondImg.setAttribute('src', firstImg.src); 
    if (firstName.textContent === 'Fluttershy') {
      firstName.textContent = 'Apple Jack';
    } else {
      firstName.textContent = 'Fluttershy'
    }
    if (secondName.textContent === 'Apple Jack') {
      secondName.textContent = 'Fluttershy';
    } else {
      secondName.textContent = 'Apple Jack'
    }
    if (firstImg.src === 'http://i.imgur.com/6PwBk7gm.png') {
      firstImg.src = 'http://i.imgur.com/obV6ULBm.png';
    } else {
      firstImg.src = 'http://i.imgur.com/6PwBk7gm.png'
    }
    if (secondImg.src === 'http://i.imgur.com/obV6ULBm.png') {
      secondImg.src = 'http://i.imgur.com/6PwBk7gm.png';
    } else {
      secondImg.src = 'http://i.imgur.com/obV6ULBm.png'
    }
  }
}

const ponies = new Ponies();
ponies.connectEventHandlers();

// disregarding DRY all over the place, commented out code is non-functional clean version of if/else stms
