class Dog {
  constructor(name) {
    this.name = name;
  }

  listen(humanSpeech) {
    if (humanSpeech.indexOf(this.name) !== -1) {
      return this.bark();
    }
    return `${this.name} looks at you confused`
  }

  bark() {
    return 'ruff!'
  }

}

