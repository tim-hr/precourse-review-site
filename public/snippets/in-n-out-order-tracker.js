class Order {
  constructor() {
    this.stateIndex = 0;
  }

  advanceState() {
    this.stateIndex += 1;
    if (this.stateIndex > states.length - 1) {
      this.stateIndex = states.length - 1;
    }
  }

  displayState() {
    console.log(states[this.stateIndex]);
  }
}

const states = ['Taking order',
                'Cooking order',
                'Requesting pickup of order',
                'Order complete'];

// create order instance #1
const firstOrder = new Order();

// create order instance #2
const secondOrder = new Order();

// advance state of #1
firstOrder.advanceState();

// advance state of #1
firstOrder.advanceState();

// advance state of #2
secondOrder.advanceState();

// advance state of #1
firstOrder.advanceState();

// print state of #1 to console
firstOrder.displayState();

// print state of #2 to console
secondOrder.displayState();
