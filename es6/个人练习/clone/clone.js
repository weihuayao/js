/**
 * 基本数据类型
 *    拷贝会生成一个新的数据，修改拷贝以后的数不会影响原来的数据 
 * 
 *  对象/数组：
 *    
 *  浅拷贝:
 *  拷贝不会生成一个新的数据，是复制数据的引用地址， 修改拷贝以后的数会影响原来的数据 
 *  即拷贝引用
 *  
 *  深拷贝:
 *  拷贝会生成一个新的数据，修改拷贝以后的数不会影响原来的数据 
 *  拷贝一个新的数据
 * */ 

 //浅拷贝 
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

 //深拷贝 
 JSON.parse(JSON.stringify()) // 无法拷贝方法

let arr = [1 , 2 ,{username:"ywh"}] 
let arr3 = JSON.parse(JSON.stringify(arr))
console.log(arr3)
arr3.username = 'ywh3'
console.log(arr) // 1, 2, { username: 'ywh'}

