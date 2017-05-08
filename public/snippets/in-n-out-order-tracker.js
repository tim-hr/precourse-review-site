class Order {

 constructor() {
    this.state = {
    stage: 0,
    descriptions: ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete']
    };
  }

  advanceState() {
    if (this.state.stage < 3) {
      this.state.stage++;
    }
  }

  getState() {
    return this.state.descriptions[this.state.stage];
  }
}

const firstOrder = new Order;
const secondOrder = new Order;
firstOrder.advanceState();
firstOrder.advanceState();
secondOrder.advanceState();
firstOrder.advanceState();
console.log(firstOrder.getState());
console.log(secondOrder.getState());