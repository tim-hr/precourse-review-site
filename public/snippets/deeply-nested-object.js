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

// const nestedObj = {
//     'quuuuux!': 'you got me'
  
// };

const innerMostValue = function(obj) {
  const value =  obj[Object.keys(obj)];
  if (typeof value === "string")
    return value;
  
  return innerMostValue(value);
};

const nestedObjValue = innerMostValue(nestedObj);
document.write(`<h4>${nestedObjValue}</h4>`);
