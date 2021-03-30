/* 
实现深拷贝
    1). 大众乞丐版
        问题1: 函数属性会丢失
        问题2: 循环引用会出错

    2). 面试基础版本
        解决问题1: 函数属性还没丢失
        问题2: 循环引用会出错

    3). 面试加强版本
        解决问题2: 循环引用正常
    4). 面试加强版本2(优化遍历性能)
        数组: while | for | forEach() 优于 for-in | keys()&forEach() 
        对象: for-in 与 keys()&forEach() 差不多
*/
function deepCopy(target) {
  return JSON.parse(JSON.stringify(target));
}

function deepCopy2(target) {
  if (
    target instanceof Array ||
    (target !== null && typeof target === "object")
  ) {
    const cloneTarget = target instanceof Array ? [] : {};
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const element = target[key];
        cloneTarget[key] = deepCopy2(element);
      }
    }
    return cloneTarget;
  }
  return target;
}
/* 
解决了: 函数属性会丢失
解决: 循环引用会出错    
解决思路:
    目标: 同一个对旬/数组只能被克隆1次
    创建克隆对象前:　如果克隆对象已经存在, 直接返回
    创建克隆对象后: 保存克隆对象 
    缓存容器结构: Map  key: target, value: cloneTaget
*/

//借助map
//循环引用甚至可能属性引用自己
function deepCopy3(target, map = new Map()) {
  if (
    target instanceof Array ||
    (typeof target === "object" && target !== null)
  ) {
    //递归出口
    if (map.has(target)) {
      return target;
    }
    let cloneTarget = target instanceof Array ? [] : {};
    map.set(target, cloneTarget);
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const element = target[key];
        cloneTarget[key] = deepCopy3(element, map);
      }
    }
    return cloneTarget;
  }
  return target;
}

function deepCopy4(target, map = new Map()) {
  if (
    target instanceof Array ||
    (typeof target === "object" && target !== null)
  ) {
    //递归出口
    if (map.has(target)) {
      return map.get(target);
    }
    let cloneTarget = target instanceof Array ? [] : {};
    map.set(target, cloneTarget);
    if (cloneTarget instanceof Array) {
      target.forEach((element, index) => {
        cloneTarget[index] = deepCopy4(element, map);
      });
    } else {
      for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
          const element = target[key];
          cloneTarget[key] = deepCopy4(element, map);
        }
      }
    }

    return cloneTarget;
  }
  return target;
}
const obj1 = {
  a: 1,
  b: ["e", "f", "g"],
  c: { h: { i: 2 } },
  d: function () {}, // 存在函数
};
// 存在循环引用
obj1.b.push(obj1.c); // 将c添加到b中
obj1.c.j = obj1.b;

//  const obj1Clone = aUtils.deepClone1(obj1)
//  const obj1Clone = aUtils.deepClone2(obj1)
//  const obj1Clone = aUtils.deepClone3(obj1)
const obj1Clone = deepCopy4(obj1);
console.log(obj1Clone, obj1Clone.b === obj1.b, obj1Clone.c === obj1.c);
console.log(obj1Clone.d === obj1.d); // true
