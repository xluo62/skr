function join(array, connector) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      //先加连接符，再加当前位置的元素，所以从第二位开始
      str += connector;
    }
    if (array[i] !== undefined) {
      str += array[i];
    }
  }
  return str;
}
console.log(join([1, 2, 3], "-"));
