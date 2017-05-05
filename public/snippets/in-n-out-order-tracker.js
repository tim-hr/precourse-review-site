class Order {
  constructor() {
    this.data = {};
  }

  takeOrder(tableNumber) {
    this.data[tableNumber] = 'Order received!';
    return this.data[tableNumber];
  }

  cookOrder(tableNumber) {
    if(this.data[tableNumber] === 'Order received!') {
      this.data[tableNumber] = 'Order is being cooked!';
    } else {
      this.data[tableNumber] = 'Please make order!';
    }
    if(this.data[tableNumber] = 'Order is being cooked!') {
      this.data[tableNumber] = 'Order is ready!';
    }
    return this.data[tableNumber];
  }

  requestOrderPickup(tableNumber) {
    if(this.data[tableNumber] === 'Order is ready!') {
      this.data[tableNumber] = 'Taking order to table!';
    } else {
      this.data[tableNumber] = 'Order is not ready!';
    }
    if(this.data[tableNumber] === 'Taking order to table!') {
      this.data[tableNumber] = 'Order is complete!';
    }
    return this.data[tableNumber];
  }
}


const order1 = new Order();
const order2 = new Order();

order1.takeOrder(1);
order1.cookOrder(1);
order2.takeOrder(2);
order1.requestOrderPickup(1);
console.log(order1.data['1']);
console.log(order2.data['2']); 
