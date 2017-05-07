const makeGreetingFunction = function(greeting) {
  // TODO
  return function(name) { 
    return greeting + ', ' + name + '!';
  };
};

const greet1 = makeGreetingFunction('Salutations');

console.log(greet1('Bilbo')); // "Salutations, Bilbo!"
console.log(greet1('Saruman')); // "Salutations, Saruman!"

const greet2 = makeGreetingFunction('Hola');

console.log(greet2('Hermione')); // "Hola, Hermione!"
console.log(greet2('Voldemort')); // "Hola, Voldemort!"
