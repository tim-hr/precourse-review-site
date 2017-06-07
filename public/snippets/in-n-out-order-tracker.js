class Order {
  constructor() {
    this.orderList = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
    this.orderState = this.orderList[0];
  }

  order() {
    if(this.orderList.indexOf(this.orderState) + 1 < this.orderList.length) {
      this.orderState = this.orderList[this.orderList.indexOf(this.orderState) + 1];
    }
    return this.orderState;
  }
}

// create order instance #1
const instance1 = new Order();

// create order instance #2
const instance2 = new Order();

// advance state of #1
instance1.order();

// advance state of #1
instance1.order();

// advance state of #2
instance2.order();

// advance state of #1
instance1.order();

// print state of #1 to console
console.log(instance1.orderState);

// print state of #2 to console
console.log(instance2.orderState);