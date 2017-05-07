const nestedObj = {
  foo: {
    bar: {
      baz: {
        quux: {
          quuux: {
            quuuux: {
              'quuuuux!': 'you got me'
            }
          }
        }
      }
    }
  }
};

const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux["quuuuux!"];
document.write(`<h4>${nestedObjValue}</h4>`);

/*I worked tirelessy to try and make it dynamic but I made no progress
due to time restirctions I had to turn in something and so I apologize that 
I had to turn in something as messy as this. 
-Gideon
*/