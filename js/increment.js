//用闭包挂住变量即可 需要简单的封装一下。
function increment() {
  let count = 0;

  return function () {
    console.log(count);
    count++;
  };
}
let selfIncrement = increment();

selfIncrement();
selfIncrement();
selfIncrement();
selfIncrement();
selfIncrement();
