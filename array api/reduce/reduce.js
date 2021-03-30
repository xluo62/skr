/**
 * reduce(callback, init)
 */

Array.prototype.reduce = function (callback, init) {
  //
  let array = this;
  let accumulator = init ? init : array[0];

  for (let index = init ? 0 : 1; index < array.length; index++) {
    //console.log(index);
    const element = array[index];
    accumulator = callback(accumulator, element, index, array);
  }

  return accumulator;
};

//[].reduce(callback, init);
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));
// expected output: 10
