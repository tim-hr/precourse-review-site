// I don't think I know this. 


class Order {

  constuctor () {
    this.date = { state: ["Taking order", "Cooking order", "Requesting pickup of order", "Order complete" ]};
    this.count = 0; 
  }

  state () {
    return this.date['state'][this.count]; 
  }

  advanceState() {
    let i=1; 
    while(i < this.data['state'].length) {
      this.date.state[i]
      i++ 
    }
  }

}


const order = new Order(); 


const orerInstance1 = new Order();
const orerInstance2 = new Order();

orerInstance1.advanceState();
orerInstance1.advanceState();
orerInstance2.advanceState();
orerInstance2.advanceState();

console.log(orerInstance1.state());
console.log(orerInstance2.state());

// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console