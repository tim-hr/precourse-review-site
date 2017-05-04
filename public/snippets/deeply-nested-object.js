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

const nestedObjValue = 'you got me';
document.write(`<h4>${nestedObjValue}</h4>`);
