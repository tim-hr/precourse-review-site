class Order {
  constructor () {
    this.states = ['Taking order', 'Cooking order', 'Requesting pick up of order', 'Order complete'];
    this.currentState = 0;
  }

  advanceState () {
    this.currentState++;
  }

  getCurrentState () {
    return this.states[this.currentState];
  }
}

const order1 = new Order();
const order2 = new Order();

order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();

console.log(order1.getCurrentState());
console.log(order2.getCurrentState());
