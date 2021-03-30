/* 
compact(array): 返回数组中所有真值元素组成的新数组
*/
// <!--
//     1). compact(array): 返回数组中所有真值元素组成的新数组
//     2). chunk(array, size): 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
//   -->

Array.prototype.compact = function () {
  const array = this;
  const result = [];
  //   array.forEach((item) => {
  //     if (item) {
  //       result.push(item);
  //     }
  //   });
  return array.filter((item) => item);
};
let arr = [0, 1, false, true, "", "abc"];
console.log(arr.compact()); // [1, true, 'abc']
