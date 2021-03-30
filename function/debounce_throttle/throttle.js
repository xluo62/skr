//throttle的api  工具函数
/**
 * throttle(callback, delay) 输入函数  间隔多久才会触发那一次。
 */

function throttle(callback, delay) {
  let prev = 0;
  return function (event) {
    //this 是 标签本身 event是事件对象
    const current = Date.now();
    if (current - prev >= delay) {
      callback.call(this, event);
      prev = current;
    }
  };
}
