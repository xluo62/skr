/* 
1. drop(array, count): 
    得到数组过滤掉左边count个后剩余元素组成的数组
    说明: 不改变当前数组, count默认是1
    如: drop([1,3,5,7], 2) ===> [5, 7]
2. dropRight(array, count): 
    得到数组过滤掉右边count个后剩余元素组成的数组
    说明: 不改变数组, count默认是1
    如: dropRight([1,3,5,7], 2) ===> [1, 3]   
*/
Array.prototype.drop = function (count = 1) {
  if (!this instanceof Array) {
    throw new Error("must be an array");
  }
  if (this.length === 0) {
    return [];
  }
  if (count < 1) count = 1;
  const array = this;
  return array.filter((item, index) => index >= count);
};
Array.prototype.dropRight = function (count = 1) {
  if (!this instanceof Array) {
    throw new Error("must be an array");
  }
  if (this.length === 0) {
    return [];
  }
  if (count < 1) count = 1;
  const array = this;
  return array.filter((item, index) => index < array.length - count);
};
let arr = [1, 3, 5, 7];
console.log(arr.drop(2));
console.log(arr.drop(4));
console.log(arr.drop());

console.log(arr.dropRight(2));
console.log(arr.dropRight(4));
console.log(arr.dropRight());
