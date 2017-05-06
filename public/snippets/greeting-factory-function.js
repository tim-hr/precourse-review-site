const makeGreetingFunction = (greeting) => (name) => `${greeting}, ${name}!`;

// Note: not sure about readability - I think it looks cleaner without indentation for (short) implicit returns
// Also not sure about use of semicolons after a nested implicit return like this... using two (;;) would look odd.

const greet1 = makeGreetingFunction('Salutations');

greet1('Bilbo'); // "Salutations, Bilbo!"
greet1('Saruman'); // "Salutations, Saruman!"

const greet2 = makeGreetingFunction('Hola');

greet2('Hermione'); // "Hola, Hermione!"
greet2('Voldemort'); // "Hola, Voldemort!"
