/* 
  语法: object mergeObject(...objs)
    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
    合并前:
        { a: [{ x: 2 }, { y: 4 }], b: 1}
        { a: { z: 3}, b: [2, 3], c: 'foo'}
    合并后: 
        { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
*/
// import { concat } from "../array/concat";
// export function mergeObject(...objs) {
//   const result = {};

//   objs.forEach((obj) => {
//     Object.keys(obj).forEach((key) => {
//       const value = obj[key];
//       // result中没有key属性
//       if (!result.hasOwnProperty(key)) {
//         result[key] = value;
//       } else {
//         // result中有key属性
//         // 对原值与value进行合并生成新的数组
//         result[key] = concat([], result[key], value);
//       }
//     });
//   });

//   return result;
// }

/* 
  语法: object mergeObject(...objs)
    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
    合并前:
        { a: [{ x: 2 }, { y: 4 }], b: 1}
        { a: { z: 3}, b: [2, 3], c: 'foo'}
    合并后: 
        { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
*/
function mergeObject2(...objs) {
  if (!objs) {
    return;
  }
  const ans = {};
  objs.forEach((obj, index) => {
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      if (ans.hasOwnProperty(key)) {
        //发生了冲突
        ans[key] = [].concat(ans[key], value);
      } else {
        ans[key] = value;
      }
    });
  });
  return ans;
}
console.log(
  mergeObject2(
    { a: [{ x: 2 }, { y: 4 }], b: 1 },
    { a: { z: 3 }, b: [2, 3], c: "foo" }
  )
);
