class Order {
	constructor() {
		this.stateNumber = 1;
		this.states = { 1 : "Taking order",
	                  2 : "Cooking order",
	                  3 : "Requesting pickup of order",
	                  4 : "Order complete" }
	}

	advanceOrder() {
		if (this.stateNumber <= 3) {
			this.stateNumber++;
		}
	}

	getState() {
		return this.states[this.stateNumber];
	}

}

// create order instance #1
const order1 = new Order();
// create order instance #2
const order2 = new Order();
// advance state of #1
order1.advanceOrder();
// advance state of #1
order1.advanceOrder();
// advance state of #2
order2.advanceOrder();
// advance state of #1
order1.advanceOrder();
// print state of #1 to console
console.log(order1.getState());
// print state of #2 to console
console.log(order2.getState());
