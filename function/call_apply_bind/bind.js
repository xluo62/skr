Function.prototype.bind2 = function (obj, ...args) {
  // this 就是要绑定的函数本身
  //边界检测
  if (typeof this !== "function") {
    throw new Error("caller must be a function");
  }
  if (!obj) {
    obj = window;
  }
  const self = this;

  function funcBound(...args2) {
    //this 可能是 实例 也可能是 别的
    let returnValue;
    if (this instanceof funcBound) {
      // bind 作为了一个构造函数来使用，指定的this作废，但是args继续传递
      returnValue = self.call(this, ...args, ...args2);
    } else {
      returnValue = self.call(obj, ...args, ...args2);
    }
    return returnValue;
  }
  //如果要是作为构造函数，我们新的返回的函数必须有绑定函数的原型链。
  funcBound.prototype = self.prototype;
  return funcBound;
};

function fn() {}

//fn.bind(obj, 1, 2, 3);
