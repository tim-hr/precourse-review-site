class Order {

  constructor() {
    this.orderStatus = {0: 'Taking order',
                  1: 'Cooking order',
                  2: 'Requesting pickup of order',
                  3: 'Order complete'};
    this.state = 0;
  }
  
  advance() {
    this.state++;
  }

  status() {
    console.log(this.orderStatus[this.state]);
  }
}

// create order instance #1
let order1 = new Order();
// create order instance #2
let order2 = new Order();
// advance state of #1
order1.advance();
// advance state of #1
order1.advance();
// advance state of #2
order2.advance();
// advance state of #1
order1.advance();
// print state of #1 to console
order1.status();
// print state of #2 to console
order2.status();
