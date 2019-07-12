/*
 * 深拷贝
 * 返回一个新对象，包含obj所有可枚举属性
 */

function deepClone(obj) {
   // 对于正则表达式类型、函数类型等无法进行深拷贝(而且会直接丢失相应的值)
   // 它会抛弃对象的constructor，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object
   return JSON.parse(JSON.stringify(obj))
}

function deepClone2(obj) {
   let res = obj instanceof Array ? [] : {}
   for (let k in obj) {
      res[k] = obj[k]
      if (typeof obj[k] === Object) {
         deepClone(obj[k])
      }
   }
   return res
}

function simplClone(obj) {
   return Object.assign(obj)
}

