class SwapPonies {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener(
        'click',
        this.swap.bind(this));
  }

  swap(event) { // I DID IT THANKS TIM!!!! 
    event.preventDefault();
    let el = document.querySelectorAll('.my-little-pony div');
    
    let tempText = el[0].textContent;
    el[0].textContent = el[1].textContent;
    el[1].textContent = tempText;
    
    let el2 = document.querySelectorAll('.my-little-pony img');

    let src = el2[0].getAttribute('src');
    let src2 = el2[1].getAttribute('src');
    el2[0].setAttribute('src', src2);
    el2[1].setAttribute('src', src);
  }
}

const swapPonies = new SwapPonies();
swapPonies.connectEventHandlers();

