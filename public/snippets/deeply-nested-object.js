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

const getIt = (obj) => {
  let firstProp = Object.keys(obj)[0];
  return typeof (obj[firstProp]) === 'string' ?  obj[firstProp] : getIt(obj[firstProp]);
}

const nestedObjValue = getIt(nestedObj);
document.write(`<h4>${nestedObjValue}</h4>`);
