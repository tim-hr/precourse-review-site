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

const nestedObjValue = Object.values(nestedObj.foo.bar.baz.quux.quuux.quuuux);
document.write(`<h4>${nestedObjValue}</h4>`);
