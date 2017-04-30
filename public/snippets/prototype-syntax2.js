const Dog = function(name) {
  this.name = name;
};

Dog.prototype.listen = function(humanSpeech) {
  if (humanSpeech.indexOf(this.name) !== -1) {
    return this.bark();
  }
}

Dog.prototype.bark = function() {
  return 'ruff!';
}