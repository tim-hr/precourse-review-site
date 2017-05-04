const state = {
  1: "Taking order",
  2: "Cooking order",
  3: "Requesting pickup of order",
  4: "Order complete"
};

class Order {
  constructor(state=1) {
    this.state = {state};
  }

  advanceState() {
    this.state += 1;
  }

  printState() {
    console.log(this.state);
  }
}

// create order instance #1
order1 = Order();

// create order instance #2
order2 = Order();

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
