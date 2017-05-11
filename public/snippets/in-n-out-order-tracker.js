class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.state = 1;
  }

  advanceState(orderNumber) {
    if(this.state < 4) {
      this.state++;
    }
  }



  printState() {
    return this.state;
  }


}

// create order instance #1
let order1 = new Order(1);

// create order instance #2
let order2 = new Order(2);

// advance state of #1
order1.advanceState();
// advance state of #1
order1.advanceState();

// advance state of #2
order2.advanceState();

// advance state of #1
order1.advanceState();


// print state of #1 to console
order1.printState();
// print state of #2 to console
order2.printState();
