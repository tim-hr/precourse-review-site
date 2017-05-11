const makeGreetingFunction = function(greeting) {
  return function(text) {
    let message = greeting;
    if (text) {
      message = message + ', ' + text + '!';
    }
    return message;
  };
};

const greet3 = makeGreetingFunction('Ola');
greet3('Pedro'); // "Ola, Pedro!"
greet3('Hackers'); //"Ola, Hackers!"

const greet1 = makeGreetingFunction('Salutations');

greet1('Bilbo'); // "Salutations, Bilbo!"
greet1('Saruman'); // "Salutations, Saruman!"

const greet2 = makeGreetingFunction('Hola');

greet2('Hermione'); // "Hola, Hermione!"
greet2('Voldemort'); // "Hola, Voldemort!"
