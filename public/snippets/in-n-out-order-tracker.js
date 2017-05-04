class Order {
  constructor() {
    this.current = 0;
  }

  advanceState() {
    if (this.current < this.states.length) {
      this.current++;
    }
  }

  getState() {
    return this.states[this.current];
  }
}

Order.prototype.states = [
  'Taking order',
  'Cooking order',
  'Requesting pickup of order',
  'Order complete'
]

const order1 = new Order();
const order2 = new Order();
order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();
console.log(order1.getState());
console.log(order2.getState());
