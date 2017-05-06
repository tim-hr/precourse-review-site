class Order {
  constructor() {
    this.states = ["Taking order", "Cooking order", "Requesting pickup of order", "Order complete"];
    this.CurrentState = 0;
  }
  returnState(){
    return this.states[this.currentState];
  }
  advanceState(){
    this.currentState ++;
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
console.log(order1.returnState());
// print state of #2 to console
console.log(order2.returnState());

console.log("test");
