/*
 * 数组去重
 * 如果数组元素为对象或数组，需进行值比较
 */
function unique(arr) {
   let set = [...new Set(arr)]
   return set
}

console.log(unique([{a:1},{a:1},{a:1},2,2,2,"1","1"]))