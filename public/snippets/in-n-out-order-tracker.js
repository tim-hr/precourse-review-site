class Order {
  constructor(){
    this.state = ['Taking Order','Cooking Order','Requesting pickup of Order','Order Complete'];
    this.stateIndex = 0;
  }
  advanceState(){
    if(this.stateIndex<3){
      this.stateIndex++;
    }
  }
  printState(){
    return this.state[this.stateIndex];
  }
}

const order1 = new Order();
const order2 = new Order();
order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();
console.log(order1.printState());
console.log(order2.printState());
