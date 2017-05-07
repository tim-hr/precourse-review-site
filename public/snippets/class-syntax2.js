class Dog {
  constructor(name) {
  	this.name = name;
  }

  listen(humanSpeech) {
  	return this.bark();
  }

  bark() {
  	return 'ruff!';
  }
}