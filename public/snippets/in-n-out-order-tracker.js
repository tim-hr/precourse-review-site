class Order {
  constructor() {
    this.data = {
      state: ["Taking order", "Cooking order", "Requesting pick up of order", "Order complete"]
    },
    this.currentState = 0;
  };

  trackState() {
    return this.data['state'][this.currentState];
  };

  nextState() {
    return this.currentState++;
  };
}

const order1 = new Order();
const order2 = new Order();

order1.nextState();
order1.nextState();
order2.nextState();
order1.nextState();

console.log(order1.trackState());
console.log(order2.trackState());

