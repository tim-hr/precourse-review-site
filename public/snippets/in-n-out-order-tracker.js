class Order {
  constructor(orderNum) {
    this.states = {
      0: 'Taking Order',
      1: 'Cooking Order',
      2: 'Requesting Pickup Order',
      3: 'Order Complete'
    }

    this.state = 0
    this.orderNum = orderNum
  }

  advanceState() {
    this.state = this.state + 1;
  }

  getState() {
    return this.states[this.state]
  }

}

// const orderInstance1 = new Order('John');
// const orderInstance2 = new Order('Jane');
// orderInstance1.advanceState()
// orderInstance1.advanceState()
// orderInstance2.advanceState()
// orderInstance1.advanceState()
// console.log(orderInstance1.getState())
// console.log(orderInstance2.getState())
