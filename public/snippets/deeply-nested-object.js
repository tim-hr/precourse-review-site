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

const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux[value];
document.write(`<h4>${nestedObjValue}</h4>`);
