

class Order {
	constructor(orderStates, currentState) {
		this.orderStates = ["taking order", "cooking order", "requesting pickup of order", "order complete"];
		this.data = {};
		this.currentState = 0;
	}
	advance() {
		if (this.currentState !== 3) {
			this.currentState++;
		}
	}
	returnState() {
		return `"${this.orderStates[this.currentState]}"`;
	}
}

// create order instance #1
const instance1 = new Order();

// create order instance #2
const instance2 = new Order();

// advance state of #1
instance1.advance();

// advance state of #1
instance1.advance();

// advance state of #2
instance2.advance();

// advance state of #1
instance1.advance();

// print state of #1 to console
console.log("state of #1 is ", instance1.returnState());
// print state of #2 to console
console.log("state of #2 is ", instance2.returnState());

