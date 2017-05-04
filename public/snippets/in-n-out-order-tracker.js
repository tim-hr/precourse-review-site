class Order {
  constructor() {
    this.state = {
      0: 'Taking order',
      1: 'Cooking order',
      2: 'Requesting pickup of order',
      3: 'Complete'
    };
    this.step = 0;
  }

  getCurrentStep() {
    return this.state[this.step];
  }

  getNextStep() {
    this.step++;
  }
  
}

// create order instance #1
const orderOne = new Order();
// create order instance #2
const orderTwo = new Order();
// advance state of #1
orderOne.getNextStep();
// advance state of #1
orderOne.getNextStep();
// advance state of #2
orderTwo.getNextStep();
// advance state of #1
orderOne.getNextStep();
// print state of #1 to console
console.log(orderOne.getCurrentStep());
// print state of #2 to console
console.log(orderTwo.getCurrentStep());
