/*I'm not getting any feedback (errors or logs) in the console and don't have time
to troubleshoot it, but it would be something like the this:*/

class Order {
  constructor(){
    this.data = {
      currentStatus: 'Taking order',
      statusProgression: ['Cooking order', 'Requesting pickup of order', 'Order complete']
    };
  }

  advanceStatus(orderStatus){
    const newStatus = this.data.statusProgression.shift();
    this.data[orderStatus] = newStatus;
    return this.data[orderStatus];
  }
}

const order1 = new Order();
const order2 = new Order();

// advance state of #1
order1.advanceStatus(this.data.currentStatus);

// advance state of #1
order1.advanceStatus(this.data.currentStatus);

// advance state of #2
order2.advanceStatus(this.data.currentStatus);

// advance state of #1
order1.advanceStatus(this.data.currentStatus);

// print state of #1 to console
console.log(order1.currentStatus);

// print state of #2 to console
console.log(order2.currentStatus);
