/* 
 merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
        如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
*/
Array.prototype.merge = function (...args) {
  const _array = this;
  const set = new Set(_array);
  const result = _array.slice();
  args.forEach((array) => {
    const tempArr = array.filter((item) => !set.has(item));
    set.add(...tempArr);
    result.push(...tempArr);
  });
  return result;
};
let arr = [1, 3, 5, 7, 5];

console.log(arr.merge([1, 5, 8]));
console.log(arr.merge([1, 5, 8], [6, 8]));
