/* 
      
     slice()
        语法: var newArray = slice(oldArr, [begin[, end]])
        功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
     如果不给参数，浅拷贝全部
     如果end给多了 
*/

Array.prototype.slice = function (start, end) {
  if (!this instanceof Array) {
    throw new Error("must be an array");
  }

  const array = this;
  let resultArr = [];
  start = start || 0;
  end = end || array.length;
  // console.log("helo");
  if (start < 0) begin = 0;
  if (end > array.length) end = array.length;
  if (start > end) {
    console.log(end, start);
    return [];
  }
  //没有参数
  for (let index = start; index < end; index++) {
    const element = array[index];
    resultArr.push(element);
  }

  return resultArr;
};
let arr = [1, 3, 5, 7, 9];
var foo = {
  0: "Java",
  1: "Python",
  2: "Scala",
  length: 3,
};
console.log(Array.prototype.slice.call(foo));
console.log(arr.slice()); // [1, 3, 5, 7, 9]
console.log(arr.slice(1, 3)); // [3, 5]
console.log(arr.slice(1, 10)); // [3, 5, 7, 9]
