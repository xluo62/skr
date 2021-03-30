/* 
实现浅拷贝
        方法一: 利用ES6语法
        方法二: 利用ES5语法: for...in
*/
/**
 * shallowCopy(target) 如果是对象或者数组 那么拷贝 如果是函数或者别的 直接返回
 */

function shallowCopy(target) {
  if (target instanceof Array) {
    return [...target];
  }
  //这里不能用instanceof 因为所有的对象最后都是Object类，function也是
  if (target !== null && typeof target === "object") {
    return { ...target };
  }

  return target;
}
//es5 for...in
function shallowCopy2(target) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === "object")
  ) {
    const cloneTarget = target instanceof Array ? [] : {};
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const element = target[key];
        cloneTarget[key] = element;
      }
    }
    return cloneTarget;
  }
  return target;
}
