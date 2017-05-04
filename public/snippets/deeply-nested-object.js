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

const value = nestedObj.foo.bar.baz.quux.quuux.quuuux['quuuuux!'];

const nestedObjValue = value;

document.write(`<h4>${nestedObjValue}</h4>`);
