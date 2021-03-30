/* 
语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) 
功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 
*/
//只能拆一层
//concat([1, 2], [3, 【4】], 6) 4是不会被拆的
function concat(array, ...arrs) {
  arrs.forEach((item) => {
    if (Array.isArray(item)) {
      array.push(...item);
    } else {
      array.push(item);
    }
  });
  return array;
}
console.log(concat([1, 2], [3, 4], 6)); // [1, 2,
console.log(aUtils.slice([1, 3, 5, 7, 9])); // [1, 3, 5, 7, 9]
console.log(aUtils.slice([1, 3, 5, 7, 9], 1, 3)); // [3, 5]
console.log(aUtils.slice([1, 3, 5, 7, 9], 1, 10)); // [3, 5, 7, 9]
