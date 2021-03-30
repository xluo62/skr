const iterableObj = {
  items: [100, 200, 300],
  [Symbol.iterator]: function () {
    let self = this;
    let index = 0;
    return {
      next() {
        return index < self.items.length
          ? {
              value: self.items[index++],
              done: false,
            }
          : {
              value: undefined,
              done: true,
            };
      },
    };
  },
};

//console.log(iterableObj[Symbol.iterator]().next());
for (const value of iterableObj) {
  console.log(value);
}
