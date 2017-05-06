class Order {
  constructor() {
    this.state = 0;
  }
  advanceOrder() {
    if(this.state < 4) {
      this.state = this.state + 1;
    } else {
      console.log("This order has already been completed");
    }
  }

  currentState() {
    if(this.state == 0) {
      console.log("Taking order");
    }else if(this.state == 1) {
      console.log("Cooking order");
    }else if(this.state == 2) {
      console.log("Requesting Pickup Of Order");
    }else if(this.state == 3) {
      console.log("Order Complete");
    }
  }

}

const order1 = new Order();
const order2 = new Order();
order1.advanceOrder();
order1.advanceOrder();
order2.advanceOrder();
order1.advanceOrder();
order1.currentState();
order2.currentState();
