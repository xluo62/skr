/* 
将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
如果size 没有指定 那么size = 1
*/
Array.prototype.chunk = function (size) {
  if (!Array.isArray(this)) {
    throw new Error("must be an array");
  }
  //最终要生成一个二维数组
  const resultArr = [];
  const array = this;
  let subArr = [];
  if (size <= 1) {
    size = 1;
  } else if (size > array.length) {
    size = array.length;
  }

  array.forEach((item, index) => {
    if (subArr.length === size) {
      //小数组满了
      //console.log(subArr);
      resultArr.push(subArr.slice());
      subArr = [];
    }
    subArr.push(item);
    if (index === array.length - 1 && subArr.length !== 0) {
      resultArr.push(subArr.slice());
    }
  });
  return resultArr;
};
let arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(new Array(...arr));
console.log(arr.chunk(3)); // [[1,2,3], [4,5,6],[7]]
console.log(arr.chunk()); // [[1],[2],[3],[4],[5],[6],[7]]
console.log(arr.chunk(8)); // [[1, 2, 3, 4, 5, 6, 7]]
let obj = {};
obj.func = Array.prototype.chunk;
// obj.func();
//console.log(arr.chunk2(8)); // [[1, 2, 3, 4, 5, 6, 7]]
