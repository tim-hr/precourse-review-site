class Order {
  constructor(){

    this.data={};
  }
  _nextState(){
    let count = 0; 
    let states=["takingOrder","cookingOrder", "RequestingPickup", "orderComplete"];
    this.data["state"] = states[count];
    count=count+1;
    return this.data["state"];
  }
  changeState(){
    return this._nextState();
  }
}

const order1 = new Order();
const order2 = new Order();

console.log(order1.changeState());


// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console
