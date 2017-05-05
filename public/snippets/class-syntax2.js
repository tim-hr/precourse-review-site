class Dog {
  constructor(name) {
    this.name = name;
  }

  listen(humanSpeech) {
    if (humanSpeech.indexOf(name) !== -1) {
      return this.bark()
    }
  }

  bark() {
    return 'ruff!';
  }
}