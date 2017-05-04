class Order {
  constructor() {
    this.data = {};
  }

  createOrder(order){
    return this.data[order];
  }

  cookingOrder(order, sequence){
    this.data[order] = sequence;
  }

  requestPickUp(order, sequence){
    return this.data[order] = sequence;
  }

  orderComplete(order){
    delete this.data[order];
  }

}

const ourOrder = new Order();



// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console
