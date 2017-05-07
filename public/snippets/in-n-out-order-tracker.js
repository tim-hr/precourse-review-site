const state = {
  1: "Taking order",
  2: "Cooking order",
  3: "Requesting pickup of order",
  4: "Order complete"
};

class Order {
  constructor() {
    this.stateKey = 1;
  }

  advanceState() {
    this.stateKey += 1;
  }

  printState() {
    console.log(state[this.stateKey]);
  }
}

// create order instance #1
order1 = new Order();

// create order instance #2
order2 = new Order();

// advance state of #1
order1.advanceState();

// advance state of #1
order1.advanceState();

// advance state of #2
order2.advanceState();

// advance state of #1
order2.advanceState();

// print state of #1 to console
order1.printState();

// print state of #2 to console
order2.printState();
