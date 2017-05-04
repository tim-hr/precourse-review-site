class Order {
  constructor() {
    this.state = 'ordered';
  }

  cooking() {
    this.state = 'cooking';
  }

  requestingPickup() {
    this.state = 'requesting pickup';
  }

  completeOrder() {
    this.state = 'completed order';
  }

}

// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console

let order1 = new Order();
let order2 = new Order();
order1.cooking();
order1.requestingPickup();
order2.cooking();
order1.completeOrder();
console.log(order1.state);
console.log(order2.state);