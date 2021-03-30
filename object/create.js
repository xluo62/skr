function create(prototype) {
  //创建一个空对象，他的原型对象为参数
  function Fn() {}
  Fn.prototype = prototype;
  //返回一个实例
  return new Fn();
}
module.exports = create;
