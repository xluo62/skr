/**
 * js使用的是Number是双精度浮点数。
 * 如果数字大小超过了2^53 - 1 或者小于 - 2^53 + 1 那么将丢失精确度
 * 因此导致了 比如说 2^53 和 2^53 + 1相等
 * 如何进行大于2^53的大数相加并且保证精确度呢？
 * 通过竖式运算来模拟。
 */
/**
 *
 * @param {string} num1
 * @param {string} num2
 */
function addBigNumber(num1, num2) {
  //先判断，如果num1或者num2已经超过了safeInt但是却传来的不是字符串，那么就意味着已经超出范围了
  const checkNum = (num) => typeof num === "string" && !isNaN(Number(num));
  if (checkNum(num1) && checkNum(num2)) {
    const tmp1 = num1.split('').reverse();
    const tmp2 = num2.split('').reverse();
    const result = [];
    const format = num => {
        if (typeof num === 'number') {
            return num;
        }
        //Number(undefined) return NaN
        if (!isNaN(Number(num))) {
            return Number(num);
        }
        return 0;
    }
    let temp = 0;
    for (let i = 0; i <= Math.max(num1.length, num2.length); i++) {
        const addTemp = format(tmp1)
    }
    
  } else {
    throw new Error("number type error");
  }
}
