/* 
1. 理解: 
    根据当前数组产生一个去除重复元素后的新数组
    如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]
2. 实现:
    方法1: 利用forEach()和indexOf()
            说明: 本质是双重遍历, 效率差些
    方法2: 利用forEach() + 对象容器
            说明: 只需一重遍历, 效率高些
    方法3: 利用ES6语法: from + Set 或者 ... + Set
            说明: 编码简洁
*/
const arr = [2, 3, 2, 7, 6, 7];
function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(arr));
