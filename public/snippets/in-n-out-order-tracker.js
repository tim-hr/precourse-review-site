class Order {
  constructor() {
    this.progress = ['Taking Order', 'Cooking Order', 'Requesting pickup of order', 'Order complete'];
    this.status = this.progress[0];
  }

  getStatus() {
    return this.status;
  }


  advanceStatus() {
    const state = this.getStatus();
    const currentIndexState = this.progress.indexOf(state);
    if(currentIndexState !== this.progress.length-1) {
      this.status = this.progress[currentIndexState + 1];
    }
  }

}

const mcFlurryOrder = new Order();
const blizzardOrder = new Order();

mcFlurryOrder.advanceStatus();
mcFlurryOrder.advanceStatus();
blizzardOrder.advanceStatus();
mcFlurryOrder.advanceStatus();
console.log(mcFlurryOrder.getStatus());
console.log(blizzardOrder.getStatus());
