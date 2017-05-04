class Order {
  constructor() {
    this.currentState = 0;
    this.order = {
      0 = 'Taking Order',
      1 = 'Cooking Order',
      2 = 'Requesting pick up of order',
      3 = 'Order Complete'
    };
  }

  advanceState() {
    this.currentState++;
  }

  currentState() {
    return this.order[this.currentState];
  }
}

// create order instance #1
const order1 = new Order();
// create order instance #2
const order2 = new Order();
// advance state of #1
order1.advanceState();
// advance state of #1
order1.advanceState();
// advance state of #2
order2.advanceState();
// advance state of #1
order2.advanceState();
// print state of #1 to console
order1.currentState();
// print state of #2 to console
order2.currentState();
