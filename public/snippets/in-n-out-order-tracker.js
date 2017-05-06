class Order {
  constructor() {
    this.data = {
      state: ['Taking order',
              'Cooking order', 
              'Requesting pickup', 
              'Order complete'
              ]
    },
    this.place = 0;
  }

  advanceState() {
    this.place++;
  }

  trackState() {
    return this.data['state'][this.place];
  }
}



// create order instance #1
const order1 = new Order();
// create order instance #2
const order2 = new Order();
// advance state of #1
order1.advanceState();
// advance state of #1
order1.advanceState();
// advance state of #2
order2.advanceState();
// advance state of #1
order1.advanceState();
// print state of #1 to console
console.log(order1.trackState());
// print state of #2 to console
console.log(order2.trackState());
