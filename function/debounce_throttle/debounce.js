/**
 * debounce 的 api debounce(callback, delay) 工具函数
 *
 *
 *
 */

function debounce(callback, delay) {
  let timeToken;

  return function (event) {
    if (timeToken) {
      //如果token不是undefined 意味着有东西正在计时，这时候来了新的事件，删掉以前的timeout 重启新的。
      clearTimeout(timeToken);
    }
    timeToken = setTimeout(() => {
      callback.call(this, event);
      timeToken = undefined;
    }, 2000);
  };
}
