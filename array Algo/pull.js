// <!--
//     1. pull(array, ...values):
//         删除数组中与value相同的元素, 返回所有删除元素的数组
//         说明: 数组发生了改变
//         如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]
//     2. pullAll(array, values):
//         功能与pull一致, 只是参数变为数组
//         如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]
//这个题有个坑 就是你动态的更改了原数组的内容，然后原数组后边的内容都往前走了一位，这样你index再+1的时候就略过了本该走的下一位
//   -->
Array.prototype.pull = function (...arr) {
  const array = this;
  const result = [];
  //由于foreach不好控制进度，这里采用for的写法
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (arr.indexOf(element) !== -1) {
      //console.log(array.splice(index, 0));
      result.push(...array.splice(index, 1));
      index--;
    }
  }
  return result;
};
Array.prototype.putAll = function (arr) {
  this.put(...arr);
};
var arr = [1, 3, 5, 3, 7];
console.log(arr.pull(2, 7, 3, 7), arr);
var arr2 = [1, 3, 5, 3, 7];
