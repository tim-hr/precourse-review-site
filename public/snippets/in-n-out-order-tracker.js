class Order {
  constructor() {
    this.data = {
      state: ['Taking Order', 'Cooking Order', 'Requesting Pickup of Order', 'Order Complete']
    };
    this.place = 0;
  }
  getState() {
    return this.data.state[this.place];
  }
  advanceState() {
    this.place++;
  }
}
// create order instance #1
// create order instance #2
const order1 = new Order();
const order2 = new Order();
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();
// print state of #1 to console
// print state of #2 to console
console.log(order1.getState());
console.log(order2.getState());