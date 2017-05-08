class Order {
  constructor() {
    this.data = {
      state: ["Taking order", "Cooking order", "Requesting pickup of order", "Order complete"]
    }

    this.counter = 0;
  }

  advanceState() {
    this.counter++;
  }

  currentState() {
    return this.data['state'][this.counter];
  }

}

// create order instance #1
const friedChicken = new Order();
// create order instance #2
const burger = new Order();
// advance state of #1
friedChicken.advanceState();
// advance state of #1
friedChicken.advanceState();
// advance state of #2
burger.advanceState();
// advance state of #1
friedChicken.advanceState();
// print state of #1 to console
console.log(friedChicken.currentState());
// print state of #2 to console
console.log(burger.currentState());