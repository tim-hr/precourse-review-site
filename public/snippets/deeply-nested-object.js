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

const nestedObjValue = 'replace me with the innermost value above';
document.write(`<h4>${nestedObjValue}</h4>`);
