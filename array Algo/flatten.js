/**
 * deep flatten
 */
//方法1： 递归
//递归的定义： 展开给定的数组 数组给出的方式是通过this传递的。并返回展开后的数组
Array.prototype.flatten = function () {
  let array = this;
  const resultArr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element instanceof Array) {
      resultArr.push(...element.flatten());
    } else {
      resultArr.push(element);
    }
  }
  return resultArr;
};
//递归 用reduce
Array.prototype.flatten2 = function () {
  let array = this;

  return array.reduce((accumulator, currentElement) => {
    //console.log(accumulator);
    if (Array.isArray(currentElement)) {
      //也可以写成 accumulator.concat(currentElment.flatten2());
      accumulator.push(...currentElement.flatten2());
    } else {
      accumulator.push(currentElement);
    }

    return accumulator;
  }, []);
};
//迭代 更高效
//原理 [1,[2,[3,4]]] => [].concat(...array) => [1,2,[3,4]] =>[].concat(...array) => [].concat(1,2, [3, 4]) => [1,2,3,4]

Array.prototype.flatten3 = function () {
  let arr = this.concat([]);

  while (
    arr.some((item) => {
      return Array.isArray(item);
    })
  ) {
    //进入while
    arr = [].concat(...arr);
  }
  return arr;
};

const arr = [1, [3, [2, 4]]];
console.log(arr.flatten3());
