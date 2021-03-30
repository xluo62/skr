Function.prototype.call = function (obj, ...args) {
  //方法的api fn.call(obj[, params])
  //相当于执行了 obj.fn()
  //this 是 方法本身
  //检测corner
  if (!obj) {
    obj = window;
  }
  obj.__tempFunction = this;
  //保存函数的返回值
  const returnValue = obj.__tempFunction(...args);
  delete obj.__tempFunction;
  return returnValue;
};
