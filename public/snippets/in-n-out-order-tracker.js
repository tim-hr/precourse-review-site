class Order {
  constructor(state) {
    this.state = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
    this.currentState = 0;
  }

  advance() {
    this.currentState += 1;
  }

  print() {
    return this.state[this.currentState];
  }
}

const order1 = new Order();
const order2 = new Order();
order1.advance();
order1.advance();
order2.advance();
order1.advance;
console.log(order1.print());
console.log(order2.print());

// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console