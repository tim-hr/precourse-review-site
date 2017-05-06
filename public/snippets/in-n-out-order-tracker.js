class Order {
  constructor(customer){
    this.customer = customer;
    this.status = 'Awaiting Order'
    this.order = null
  }

  takeOrder(order){
    this.order = order;
    this.status = `State #1: ${this.customer} has ordered ${order} and is preparing to be cooked.`;
  }

  cookOrder(){
    this.status = `State #2: ${this.customer}'s order of ${this.order} is currently being cooked.`;
  }

  requestPickUpOrder(){
    this.status = `State #3: ${this.customer}'s order is now being requested to be picked up.`;
  }

  completeOrder(customer){
    this.status = `State #4: ${customer}'s order has been picked up, thank you for eating at In-N-Out!`;
  }
};

// create order instance #1
const order1 = new Order('Kay');

// create order instance #2
const order2 = new Order('Tim');

// advance state of #1
order1.takeOrder('4x4 with Animal-Style Fries and Large Diet Coke');

// advance state of #1
order1.cookOrder();

// advance state of #2
order2.takeOrder('Double-Double with Fries and medium Dr. Pepper');

// advance state of #1
order1.requestPickUpOrder();

// print state of #1 to console
console.log(order1.status);

// print state of #2 to console
console.log(order2.status);