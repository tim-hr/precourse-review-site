class Order {

  constructor() {
    this.statusList = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
    this.currentStatus = 0;
  }

  readCurrentState() {
    return this.statusList[this.currentStatus];
  }

  advanceState() {
    if ( this.currentStatus < (this.statusList.length - 1) ) {
      this.currentStatus += 1;
    }
  }

}

myOrder1 = new Order();
myOrder2 = new Order();

myOrder1.advanceState();
myOrder1.advanceState();
myOrder2.advanceState();
myOrder1.advanceState();

console.log(myOrder1.readCurrentState());
console.log(myOrder2.readCurrentState());
