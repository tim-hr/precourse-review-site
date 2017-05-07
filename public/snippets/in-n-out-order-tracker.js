class Order {
  constructor() {
    this.data = {
      state: ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete']
    }
    this.stateNumber = 0;
    };
  

  trackState() {
    return this.data.state[this.stateNumber]
  };

  advanceState() {
    if (this.stateNumber < this.data.state.length -1) {
      this.stateNumber++
    }
  };
};
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
console.log(order1.trackState());
console.log(order2.trackState());