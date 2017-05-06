class Order {
  constructor(){
    this.states = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
    this.currentStateIndex = 0;
  }

  advanceState(){
    if (this.currentStateIndex < this.states.length) {
      this.currentStateIndex++;
    }
  }

  getCurrentState(){
    return this.states[this.currentStateIndex];
  }

}

// create order instance #1
let order1 = new Order();
// create order instance #2
let order2 = new Order();
// advance state of #1
order1.advanceState();
// advance state of #1
order1.advanceState();
// advance state of #2
order2.advanceState();
// advance state of #1
order1.advanceState();
// print state of #1 to console
console.log(order1.getCurrentState());
// print state of #2 to console
console.log(order2.getCurrentState());
