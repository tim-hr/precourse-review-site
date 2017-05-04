I'm a bit confused on how to make this work

class Order {
  constructor() {
    this.data = {};
  }
}

const instance #1 = new Order();
const instance #2 = new Order();

// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console
