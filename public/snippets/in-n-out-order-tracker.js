class Order {
  constructor() {
    this.state = 'Taking Order';
    this.states = ['Taking Order', 'Cooking Order', 'Requesting Pickup of Order', 'Order Complete'];
  }

  advanceState(state) {
    if (this.state === 'Taking Order') {
      this.state = this.states[1];
    } else if (this.state === 'Cooking Order') {
      this.state = this.states[2];
    } else if (this.state === 'Cooking Order') {
      this.state = this.states[3];
    }
  }

  printCurrentState() {
    console.log(this.state);
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
order1.printCurrentState();

// print state of #2 to console
order2.printCurrentState();
