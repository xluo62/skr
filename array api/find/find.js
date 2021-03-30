Array.prototype.find = function (callback) {
  let result;
  const array = this;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callback(element, index, array)) {
      return element;
    }
  }
  return undefined;
};
