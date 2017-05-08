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

const value = nestedObj.foo.bar.baz.quux.quuux.quuuux;
const nestedObjValue = value['quuuuux!'];
document.write(`<h4>${nestedObjValue}</h4>`);
