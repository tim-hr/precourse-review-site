class Order {
  constructor(data) {
    this.data = {
      state: ["Taking order", "Cooking order", "Requesting pickup of order", "Order Complete"];
    },
    this.advance = 0;
  };

  trackAdvance() {
    return this.data['state'][this.advance]
  };

  position() {
    this.advance++;
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

order1.position();
order1.position();
order2.position();
order1.position();

// print state of #1 to console
// print state of #2 to console

console.log(order1.trackAdvance());
console.log(order2.trackAdvance());
