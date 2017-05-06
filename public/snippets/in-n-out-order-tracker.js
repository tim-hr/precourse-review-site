class Order {
  constructor() {
    this.orderStatus = 'Taking order';
  }
  advanceOrder() {
    const statuses = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
    const currStatusIdx = statuses.indexOf(this.orderStatus);
    if (currStatusIdx < statuses.length - 1) {
      this.orderStatus = statuses[currStatusIdx + 1];
    }
    // return state here or extract? can also just check for [OrderInstance].orderStatus
  }
  returnOrderStatus() {
    return this.orderStatus;
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
// console.log('Order 1 status:', order1.returnOrderStatus());
console.log('Order 1 status:', order1.orderStatus);
// print state of #2 to console
console.log('Order 2 status:', order2.returnOrderStatus());
