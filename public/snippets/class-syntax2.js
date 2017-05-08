class Dog {
  
  constructor(name) {
    this.name = name;
  }

  bark() {
    return 'ruff!';
  }

  listen(humanSpeech) {
    if(humanSpeech.indexOf(this.name) !== -1) {
      return this.bark();
    }
  }
}