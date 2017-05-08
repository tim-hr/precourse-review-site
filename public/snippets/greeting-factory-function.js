const makeGreetingFunction = function(greeting) {
  return function(name) {
    const phrase = document.createElement(greeting);
    if(name) {
      phrase.nameContent = name;
    }
    return phrase;
  };
};

const greet1 = makeGreetingFunction('Salutations');

greet1('Bilbo'); // "Salutations, Bilbo!"
greet1('Saruman'); // "Salutations, Saruman!"

const greet2 = makeGreetingFunction('Hola');

greet2('Hermione'); // "Hola, Hermione!"
greet2('Voldemort'); // "Hola, Voldemort!"
