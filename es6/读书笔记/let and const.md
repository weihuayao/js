# let and const
/*
    let 声明的变量只在当前代码块中有用  let适合单纯的计数器
*/
```
{
    let a = 10;
    var b = 1;
}
/*
    let 不存在提升变量
*/
console.log(foo) // undefined
var foo = 2

console.log(bar) // 报错
var bar = 1
```
/*
  暂时性死区  如果区块中存在let 和con st 命令，则这个区块对这些命令声明的变量
    从一开始就形成封闭作用域。只要在声明之前就使用这些变量， 就会报错。 
*/
```
if (true) {
    tmp = "abc"; // ReferenceError
    console.log(tmp); // ReferenceError
    let tmp; // TDZ 结束
    console.log(tmp); // undefined
    tmp = 123;
    console.log(tmp); // 123
};
```
/*
    let  不允许相同作用域重复声明一个变量
 */

 /* 
 const 声明一个只读的常量。一旦声明，常量的值就不能改变。
 和let 一样会出现暂时性死区
 只在块级作用域有效
 声明就需要赋值  否则报错
  */
  ```
    var a = 1;
    window.a //1 

    let b = 1
    window.b//undefined
```    
  /*
   *  let 定义的对象不是顶层对象 即不是windows对象
   */


   


