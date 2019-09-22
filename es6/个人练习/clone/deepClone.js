/**
 * 深拷贝
 */

function getObjClass(obj) {
  let result = Object.prototype.toString.call(obj).slice(8, -1);
  if (result === 'Null') {
    return 'Null';
  } else if (result === 'Undefined') {
    return 'Undefined';
  } else {
    return result;
  }
}
// for in 遍历数组的时候遍历的是下标
// let testArr = [1, 2, 3, 4];
// for (let i in testArr) {
//   console.log(i); // 对应的下标索引
// }

// 深度克隆
function deepClone(obj) {
  let result, objClass = getObjClass(obj);
  if (objClass === 'Object') {
    result = {};
  } else if (objClass === 'Array') {
    result = [];
  } else {
    return obj; // 如果是其他数据类型不复制，直接将数据返回
  }
  // 遍历目标对象
  for (let key in obj) {
    let value = obj[key];
    if (getObjClass(value) === "Object" || 'Array') {
      result[key] = deepClone(value);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}


let obj3 = {
  username: 'kobe',
  age: 39,
  sex: {
    option1: '男',
    option2: '女'
  }
};
let obj4 = deepClone(obj3);
console.log(obj4);
obj4.sex.option1 = '不男不女'; // 修改复制后的对象不会影响原对象
console.log(obj4, obj3);