class Dog {
  constructor(name) {
    this.name = name;
    this.bark = function(){ return 'ruff' };
    this.listen = function(humanSpeech){
      if(humanSpeech.indexOf(this.name) !== -1) {
        return this.bark();
      }
	};
  };
};
const spot = new Dog('spot');
spot.listen(['spot']);