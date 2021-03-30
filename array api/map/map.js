Array.prototype.map = function (callback) {
  //this 是 array
  const array = this;
  const arr = [];
  if (!(array instanceof Array)) {
    throw new Error("must be array");
  }
  for (let index = 0; index < array.length; index++) {
    arr.push(callback(array[index], index, array));
  }
  return arr;
};

//[].map()
