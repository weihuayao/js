# Symbol

es6新增的原始数据类型 （String  Number  boolea  null  undefine object  ） Symbol

## 1 .特点：

​        1、Symbol属性对应的值是唯一的，解决命名冲突问题

​        2、Symbol值不能与其他数据进行计算，包括同字符串拼串

​        3、for in, for of遍历时不会遍历symbol属性。

## 2.使用：

```javascript
1、调用Symbol函数得到symbol值

let symbol = Symbol();
let obj = {};
obj[symbol] = 'hello';

2、传参标识
let symbol = Symbol('one');
let symbol2 = Symbol('two');
 console.log(symbol);// Symbol('one')
 console.log(symbol2);// Symbol('two')

3、内置Symbol值

 \* 除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。

\- Symbol.iterator
\* 对象的Symbol.iterator属性，指向该对象的默认遍历器方法
let targetData = {
  [Symbol.iterator] =function(){
    let index = 0 ;
  	return {
    	next: function(){
      	return {value:this[index++],done:index <= this.length ? 		               false :  true}
    }
  }
  }
}

```

# Iterator

​	 iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制

##     1 .作用：

​      1、为各种数据结构，提供一个统一的、简便的访问接口；

​      2、使得数据结构的成员能够按某种次序排列

​      3、ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

## 	2.工作原理：

​       创建一个指针对象(遍历器对象)，指向数据结构的起始位置。

​       第一次调用next方法，指针自动指向数据结构的第一个成员

​       接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员

 	  每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}

   	value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。

​	   当遍历结束的时候返回的value值是undefined，done值为false

##     3.原生具备iterator接口的数据(可用for of遍历)

​      1、Array

​      2、arguments

​      3、set容器

​      4、map容器

​      5、String



