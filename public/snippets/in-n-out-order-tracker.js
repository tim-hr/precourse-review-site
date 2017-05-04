class Order {
  constructor() {
    this.state = 'taking order';
    return this.state;
  };

  cook() {
    this.state = 'cooking order';
    return this.state;
  };

  readyForPickup() {
    this.state = 'Requesting pickup of order';
    return this.state;
  };

  orderComplete() {
    this.state = 'Order Complete';
    return this.state;
  };

  checkState() {
    return this.state;
  };
};

const myOrder = new Order;
const yourOrder = new Order;

myOrder.cook();
myOrder.readyForPickup();
yourOrder.cook();
myOrder.orderComplete();
console.log(myOrder.checkState());
console.log(yourOrder.checkState());
