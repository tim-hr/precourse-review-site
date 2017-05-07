class CyclePonies {

  connectedEventHandlers() {
    document.getElementById('btn-cycle-ponies').addEventListener('click',
      this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    const tempPony = document.querySelectorAll('.my-little-pony')[0].children[1].src;
    document.querySelectorAll('.my-little-pony')[0].children[1].src = (document.querySelectorAll('.my-little-pony')[1].children[1].src);
    document.querySelectorAll('.my-little-pony')[1].children[1].src = tempPony;

  }

  }

  const cyclePonies = new CyclePonies();
  cyclePonies.connectedEventHandlers();
/*
const ponyPics = document.querySelectorAll('.my-little-pony');
console.log(ponyPics[0].nodeValue);
console.log(ponyPics[1]);

const swapButton = document.querySelector('btn-cycle-ponies');
console.log(swapButton);

//const swapPics = function 

//swapButton.addEventListener('click', swapPonies);
*/