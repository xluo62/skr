"use strict";
const reverseBits = function (n) {
    // write your code here
    //利用递归的栈来保存数据
    return (0 << 32) + helper(n, 32);
};
//递归定义： 给定一个binary和他的长度，返回一个反转好后的数组
function helper(n, position) {
    //递归出口
    if (position === 1) {
        return n;
    }
    //递归的拆解
    let lsb = n & 1;
    n = n >> 1;
    let reverseBits = helper(n, position - 1);
    //这个时候 reverseBits已经是递归回来了 也就是说 这里n的前三位已经被反转了，只需要把lsb放到第一位就好了
    const msb = lsb << (position - 1);
    reverseBits = msb + reverseBits;
    return reverseBits;
}
