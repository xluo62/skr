Array.prototype.filter = function (callback) {
  let arr = [];
  let array = this;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callback(element, index)) {
      arr.push(element);
    }
  }
  return arr;
};
