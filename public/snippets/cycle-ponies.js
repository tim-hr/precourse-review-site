class Ponies {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener('click', this.switchImg.bind(this))
  }

  switchImg() {
    let littlePony = document.getElementsByClassName('my-little-pony');
    let littlePony1 = littlePony[0];
    let littlePony2 = littlePony[1];  
    if (littlePony1.src === 'http://i.imgur.com/6PwBk7gm.png') {
      littlePony1.src ='http://i.imgur.com/obV6ULBm.png';
    } else {
      littlePony1.src = 'http://i.imgur.com/6PwBk7gm.png'
      }
    if (littlePony2.src === 'http://i.imgur.com/obV6ULBm.png') {
      littlePony2.src = 'http://i.imgur.com/6PwBk7gm.png';
    } else {
      littlePony2.src = 'http://i.imgur.com/obV6ULBm.png'
      }
  }
}

const ponies = new Ponies();
ponies.connectEventHandlers();

// can't do this rn, best non-DRY guess