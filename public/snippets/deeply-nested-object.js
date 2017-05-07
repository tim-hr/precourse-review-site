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

console.log(nestedObj.foo);
const nestedObjValue = nestedObj.foo.bar.baz.quux.quuux.quuuux['quuuuux!'];
document.write(`<h4>${nestedObjValue}</h4>`);
