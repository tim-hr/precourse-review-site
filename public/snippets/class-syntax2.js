class Dog {
  constructor(name){
    this.name = name;
  }

  listen(){
    const humanSpeech = ["Ruffles", "Sparkey", "Snoopy"];
    if(humanSpeech.indexOf(this.name) !== -1)
      return this.bark();
    }

    bark(){
      return 'ruff';
    }
}
