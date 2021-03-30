/* 
 1. 自定义new工具函数
  语法: newInstance(Fn, ...args)
  功能: 创建Fn构造函数的实例对象
  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
*/
/**new 做了什么事情？
 * 创建实例对象
 * 将实例绑定到构造函数上
 * 执行构造函数
 * 返回这个实例
 *   如果构造函数本身有别的返回值：
 *                  1. 如果是对象，那么返回函数本身的对象
 *                  2. 如果是是别的，那么返回实例对象 比如 null, undefined , 1, string之类的
 *
 * @param {} Fn
 * @param  {...any} args
 */
function new2(Fn, ...args) {
  //创建一个新的对象
  const newObj = {};
  const returnValue = Fn.apply(newObj, args);
  //null instanceof Object is false
  if (returnValue instanceof Object) {
    return returnValue;
  }
  //绑定原型链
  newObj.__proto__ = Fn.prototype;
  return newObj;
}
