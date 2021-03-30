/* 
difference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
        如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]
*/
// <!--
// 1. difference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
//     如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]
// 2. merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
//     如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
// -->
Array.prototype.difference = function (...arr) {
  if (!this.length) {
    return [];
  }
  const set = new Set([].concat(...arr));
  const _array = this;
  return _array.reduce((accumulator, currentItem) => {
    if (!set.has(currentItem)) {
      accumulator.push(currentItem);
    }
    return accumulator;
  }, []);
};
let arr = [1, 3, 5, 7];

console.log(arr.difference([5, 8]));
console.log(arr.difference([5, 8], [3, 6]));
//console.log(arr.mergeArray([1, 5, 8], [6, 8]));
