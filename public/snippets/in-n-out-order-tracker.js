class Order {
  constructor() {
    this.data = {
      state: ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete']
    };
    this.place = 0
  };
  
  trackState() {
    return this.data['state'][this.place]
  };

  advanceState() {
    this.place++;
  };
}

const order1 = new Order();
const order2 = new Order();

order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();

console.log(order1.trackState());
console.log(order2.trackState());
