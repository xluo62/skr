/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let n = num2.length;
  let m = num1.length;
  let res = new Array(n + m);
  res.fill(0);
  //从个位开始逐位相乘
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      //i 是第二个数 j 是第一个数
      let mul = num1[j] * num2[i];
      let p1 = i + j;
      let p2 = i + j + 1;
      let sum = mul + res[p2];
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  /// 结果前缀可能存的 0（未使用的位）
  let i = 0;
  while (i < res.length && res[i] === 0) {
    i++;
  }
  let str = "";
  for (i; i < res.length; i++) {
    str += res[i];
  }
  return str === "" ? "0" : str;
};
