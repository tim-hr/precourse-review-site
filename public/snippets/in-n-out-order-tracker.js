class Order {
  constructor() {
    this.orderStates = ['Taking Order', 'Cooking Order', 
                      'Requesting pickup of order', 'Order complete'];
    this.orderState = this.orderStates[0];
  }

  advanceState() {
    this.orderState = this.orderStates[this.orderStates.indexOf(this.orderState) + 1];
  }

  getState() {
    return this.orderState;
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
order1.advanceState();
// print state of #1 to console
console.log(order1.getState());
// print state of #2 to console
console.log(order2.getState());
