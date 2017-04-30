class TableModel { // simplified a bit from the one we actually used in X-Cell
  constructor() {
    this.data = {};
  }
  getValue(location) {
    return this.data[location];
  }
  setValue(location, value) {
    this.data[location] = value;
  }
}

const ourModel = new TableModel();
