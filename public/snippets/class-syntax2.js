class Dog {
  constructor(name) {
    this.name = name;
  }
  listen(humanSpeech) {
    return (humanSpeech.indexOf(this.name) !== -1)
      ? this.bark()
      : null;
  }
  bark() {
    return 'ruff!';
  }
}
