class Order {
  constructor(orderStates) {
    this.orderStates = orderStates;
    this.state = 0;
  }
  getState() {
    return orderStates[this.state];
  }
  advanceState() {
    this.state++;
  }
}

const orderStates = [
    'Taking order',
    'Cooking order',
    'Requesting pickup of order',
    'Order complete'
];

// create order instance #1
const order1 = new Order(orderStates);
// create order instance #2
const order2 = new Order(orderStates);
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
