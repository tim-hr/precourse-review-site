const makeGreetingFunction = function(greeting) {
  return function(name) {
  	const el = document.createElement(tagName);
  	if(name) {
  		el.textContent = greeting + ', ' + name + '!';
  	} return el;
  };
};

const greet1 = makeGreetingFunction('Salutations');

greet1('Bilbo'); // "Salutations, Bilbo!"
greet1('Saruman'); // "Salutations, Saruman!"

const greet2 = makeGreetingFunction('Hola');

greet2('Hermione'); // "Hola, Hermione!"
greet2('Voldemort'); // "Hola, Voldemort!"


//need to revisit factory functions