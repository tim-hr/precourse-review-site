class Order {
	constructor() {
		this.state = 1;
	}

	advanceState() {
		if (this.state !== 4) {
			this.state += 1;
		}
	}

	getState() {
		if (this.state === 1) {
			return 'taking order';
		} else if (this.state === 2) {
			return 'cooking order';
		} else if (this.state === 3) {
			return 'requesting pickup of order';
		} else {
			return 'order complete'; 
		}
	}
}

const order1 = new Order();
const order2 = new Order();

order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();

console.log(order1.getState());
console.log(order2.getState());
