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

let stringKey = 'quuuuux!';

const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux[stringKey];
document.write(`<h4>${nestedObjValue}</h4>`);
