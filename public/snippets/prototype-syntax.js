const Person = function(name) {
  this.name = name;
};

Person.prototype.displayName = function() {
  return this.name;
};