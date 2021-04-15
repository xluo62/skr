/**
 * 1.Object.assign

思路分析：

object.assign实际上实现了浅拷贝，参数target，把若干个source的值复制给target

遍历参数，获取source的值，对于每一个source然后for .. in 遍历传入的参数的属性，复制给新的属性
 * 
 * 
 *  */
Object.assign = function (target, ...sources) {
  sources.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        target[key] = obj[key];
      });
    }
  });
  return target;
};

console.log(Object.assign({ a: 1, b: 2 }, { b: 4, c: 5 }));
