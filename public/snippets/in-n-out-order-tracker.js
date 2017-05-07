class Order {

  constructor(order) {
    this.state = 'Order up';
  }

  isCooking() {
    this.state = 'Order cooking';
  }

  isRequestingPickup() {
    this.state = 'Order requested for pickup';
  }

  isComplete() {
    this.state = 'Order ready!';
  }

}


// create order instance #1
var order1 = new Order();
// create order instance #2
var order2 = new Order();
// advance state of #1
order1.isCooking();
// advance state of #1
order1.isRequestingPickup();
// advance state of #2
order2.isCooking();
// advance state of #1
order1.isComplete();
// print state of #1 to console
console.log(order1.state);
// print state of #2 to console
console.log(order2.state);
