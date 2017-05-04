class Order {
  constructor() {
    this.orderStepCount = 0; 
    this.orderStatuses = ['Taking Order', 'Cooking order',
    'Requesting pickup of order', 'Order complete'];
  }

  advanceOrder() {
    if (this.orderStepCount < 3) {
      this.orderStepCount++;
    }
  }

  getOrderStatus() {
    return this.orderStatuses[this.orderStepCount];
  }

}

// create order instance #1
const order1 = new Order();
// create order instance #2
const order2 = new Order();
// advance state of #1
order1.advanceOrder();
// advance state of #1
order1.advanceOrder();
// advance state of #2
order2.advanceOrder();
// advance state of #1
order1.advanceOrder();
// print state of #1 to console
console.log(order1.getOrderStatus());
// print state of #2 to console
console.log(order2.getOrderStatus());
