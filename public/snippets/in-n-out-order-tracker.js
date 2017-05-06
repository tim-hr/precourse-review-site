class Order {
    constructor() {
        this.orderStates = ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete'];
        this.state = 0;
    }

    workOnOrder() {
        if (this.state < this.orderStates.length) {
            this.state++;
        }
    }

    getCurrentOrderStatus() {
        return this.orderStates[this.state];
    }

}

// create order instance #1
const order1 = new Order();

// create order instance #2
const order2 = new Order();

// advance state of #1
order1.workOnOrder();

// advance state of #1
order1.workOnOrder();

// advance state of #2
order2.workOnOrder();

// advance state of #1
order1.workOnOrder();

// print state of #1 to console
console.log(order1.getCurrentOrderStatus());

// print state of #2 to console
console.log(order2.getCurrentOrderStatus());