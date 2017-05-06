class Order {
  
 constructor(){
   this.array = {
   	  states: ['Taking order', 'Cooking order', 'Requesting pickup of order', 'Order complete']
   };
   this.num = 0;
 };

 returnState(){
   return this.array['states'][this.num];
 };

 advanceState(){
 	this.num++;
 };

};

const order1 = new Order();
const order2 = new Order();

order1.advanceState();
order1.advanceState();
order2.advanceState();
order1.advanceState();

console.log(order1.returnState());
console.log(order2.returnState());



// create order instance #1
// create order instance #2
// advance state of #1
// advance state of #1
// advance state of #2
// advance state of #1
// print state of #1 to console
// print state of #2 to console
 