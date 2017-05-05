class Order {
	constructor(state) {
		this.state = state;
	}

	advanceState() {
		this.states = ['Taking order', 'Cooking order', 'Requesting pickup of order','Order complete'];
		this.state = this.state +1
		return this.states[this.state];
	}

	printState() {
		console.log(this.states[this.state]);
	}
}

let instance1 = new Order(0);
let instance2 = new Order(0);

instance1.advanceState();
instance1.advanceState();
instance2.advanceState();
instance1.printState();
instance2.printState();
