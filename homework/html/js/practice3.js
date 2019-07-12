/*
 * 深拷贝
 * 返回一个新对象，包含obj所有可枚举属性
 */

function deepClone(obj) {
   return  JSON.parse(JSON.stringify(obj))
}

function  simplClone(obj){
   return Object.assign(obj)
}