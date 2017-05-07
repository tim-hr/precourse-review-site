class Order {
	constructor() {
		this.state = 'Taking order';
	}

	nextState() {
		if (this.state === 'Taking order') {
			this.state = 'Cooking order';
		} else if (this.state === 'Cooking order') {
			this.state = 'Requesting pickup of order';
		} else if (this.state === 'Requesting pickup of order') {
			this.state = 'Order complete';
		}
	}

	printState() {
		console.log(this.state);
	}
}

// create order instance #1
var order1 = new Order;
// create order instance #2
var order2 = new Order;

// advance state of #1
order1.nextState();
// advance state of #1
order1.nextState();

// advance state of #2
order2.nextState();

// advance state of #1
order1.nextState();

// print state of #1 to console
order1.printState();
// print state of #2 to console
order2.printState();