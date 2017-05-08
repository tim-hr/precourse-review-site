class Order {
  constructor() {
      this.state = 'Taking order';
  }

  advance() {
    switch (this.state) {
        case 'Taking order':
        this.state = 'Cooking order';
        break;
        case 'Cooking order':
        this.state = 'Requesting pickup of order';
        break;
        case 'Requesting pickup of order':
        this.state = 'Order complete';
        break;
    }
  }

  getStatus() {
      return this.state;
  }
}

let orderOne = new Order();
let orderTwo = new Order();
orderOne.advance();
orderOne.advance();
orderTwo.advance();
orderOne.advance();
console.log(orderOne.getStatus());
console.log(orderTwo.getStatus());
