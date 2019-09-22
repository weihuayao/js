# Clone

## 1 .基本数据类型

​     拷贝会生成一个新的数据，修改拷贝以后的数不会影响原来的数据 



##  2. 对象/数组：

​    

### 2.1 浅拷贝:

  拷贝不会生成一个新的数据，是复制数据的引用地址， 修改拷贝以后的数会影响原来的数据 

 即拷贝引用



```javascript
 赋值
 let obj = {username:"ywh"}
 let obj1 = obj 
 obj1.username = "ywh1"
 console.log(obj)  //{ username: 'ywh1' }

 arr.concat()

 let arr = [1 , 2 ,{username:"ywh"}] 
 let arr2 = arr.concat()
 arr2[1] = 3
 console.log(arr) //  [ 1, 2, { username: 'ywh' } ]
 arr2[2].username = 'ywh2'
 console.log(arr) // 1, 2, { username: 'ywh2' } ]

 arr.slice()

 let arr = [1 , 2 ,{username:"ywh"}] 
 let arr2 = arr.slice()
 arr2[1] = 3
 console.log(arr) //  [ 1, 2, { username: 'ywh' } ]
 arr2[2].username = 'ywh2'
 console.log(arr) // 1, 2, { username: 'ywh2' } ]

 let obj = {username: 'ywh'}
 let obj2 = Object.assign(obj) 
 obj2.username = 'ywh2'
 console.log(obj) // { username: 'ywh2'}
```





###   2.2 深拷贝:

拷贝会生成一个新的数据，修改拷贝以后的数不会影响原来的数据 

拷贝一个新的数据

```javascript
 //深拷贝 
 JSON.parse(JSON.stringify()) // 无法拷贝方法

let arr = [1 , 2 ,{username:"ywh"}] 
let arr3 = JSON.parse(JSON.stringify(arr))
console.log(arr3)
arr3.username = 'ywh3'
console.log(arr) // 1, 2, { username: 'ywh'}


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

```

