class Order {

  constructor(number) {
    this.orderNumber = number;
    this.orderState = 0;
    this.allOrderStates = {
      0: 'not yet taken',
      1: 'taken',
      2: 'cooking',
      3: 'pickup requested',
      4: 'completed'
    };
  }

  advanceOrder() {
    this.orderState += 1;
  }

  currentOrderStatus() {
    const orderStateInText = this.allOrderStates[this.orderState];
    console.log(`Order ${this.orderNumber} ${orderStateInText}.`);
  }

}

// create order instance #1
const orderOne = new Order(1);

// create order instance #2
const orderTwo = new Order(2);

// advance state of #1
orderOne.advanceOrder();

// advance state of #1
orderOne.advanceOrder();

// advance state of #2
orderTwo.advanceOrder();

// advance state of #1
orderOne.advanceOrder();

// print state of #1 to console
orderOne.currentOrderStatus();

// print state of #2 to console
orderTwo.currentOrderStatus();