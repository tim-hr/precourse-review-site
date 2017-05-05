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

const nestedObjValue = nestedObj['foo']['bar']['baz']['quux']['quuux']['quuuux']['quuuuux!'];
const nestedObjValueDot = 'I don\'t think I can do this yet / it can\'t be done cleanly';
document.write(`<h4>${nestedObjValue}</h4>`);
document.write(`<h5>${nestedObjValueDot}</h5>`)
