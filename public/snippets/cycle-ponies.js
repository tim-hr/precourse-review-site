class SwapPonies {
  connectEventHandlers() {
    document.getElementById('btn-cycle-ponies')
      .addEventListener(
        'click',
        this.swap.bind(this));
  }

  swap(event) { // HALP
    event.preventDefault();
    let el = document.getElementsByClassName('my-little-pony');
    
    // couldn't figure it out :(
  }
}

const swapPonies = new SwapPonies();
swapPonies.connectEventHandlers();

