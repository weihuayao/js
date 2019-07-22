

# 1.Typescript介绍、 安装 、开发环境搭建

## 1.1 ts介绍：

​				1 微软开发， 开源 。

​    			2 兼容ES6 、 ES5 。扩展js语法。

​				3  比较像Java C#

​				4 vue react 可以 集成TS

## 		1.2  ts安装：

​				cmd 命令窗口中 ： npm install -g typescrip  编译ts文件 tsc xxx.ts  将ts文件编译xxx.js

## 		1.3 ts 开发环境的搭建（vscode）：						

​				新建的ts文件不能直接运行需要转化为 js才能在浏览器执行，人工编译显得很麻烦。在ts文		件目录下 			ts -init会生成一个tsconfig.js  找到 // “outDir”:"./" 取消注释添加生成js文件的目录。		在工具栏找到 终			端 			-->运行任务-->监视ts.config。



# 2 .Typescript中的数据类型

​          typescript提供了 布尔类型（boolean） 数字类型（number）  字符串类型(string)  数组类型（array） 元组类型（tuple） 枚举类型（enum）    任意类型（any） null 和 undefined  void类型     never类型。具体用法如下：

```typescript
//布尔类型（boolean）

var flag:boolean = true;
console.log(flag);
flag = false;
console.log(flag)

//数字类型(number)

var num:number = 123

// 字符串类型

var str:string = "hello world"

//数组类型

var arr:number[] = [1 ,2,3]

var arr1:Array<number> = [1,2,3]

var arr2:any[] = ["123",4112,true]

// 元组类型（tuple）  属于数组的一种

let arr3:[number,string]=[123,'this is ts'];

//枚举类型（enum）
// enum 枚举名{ 
//     标识符[=整型常数], 
//     标识符[=整型常数], 
//     ... 
//     标识符[=整型常数], 
// } ;  

enum Flag {success = 1 ,error= 2}

let s:Flag = Flag.success //s = 1
let f:Flag = Flag.error // f =2


enum Color {blue,red,'orange'};
var c:Color=Color.red;
console.log(c);   //1  如果标识符没有赋值 它的值就是下标

enum Color1 {blue,red=3,'orange'};
var a:Color1=Color1.red;
console.log(a);   //3
var b:Color1=Color1.orange;
console.log(b);   //4

// 任意类型（any）
var  data:any =123 ; //可以赋值任何类型

//任意类型的用处  若不使用any类型 ts语法报错
var oBox:any=document.getElementById('box');
oBox.style.color='red';

// null 和 undefined  其他（never类型）数据类型的子类型
var num:number;
console.log(num) //输出：undefined  报错

var num1:undefined;
console.log(num1) //输出：undefined  //正确

//定义没有赋值就是undefined
var num2:number | undefined;

//一个元素可能是 number类型 可能是null 可能是undefined
var n:number | null | undefined;

// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。

function fun():void{

    console.log('hello ')
}

fun();


// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。

var foo:never;

//    a=123; //错误的写法
    foo=(()=>{

        throw new Error('错误');
    })()
```

​    其编译后产生的js文件如下 ：

```javascript
"use strict";
//布尔类型（boolean）
var flag = true;
console.log(flag);
flag = false;
console.log(flag);
//数字类型(number)
var num = 123;
// 字符串类型
var str = "hello world";
//数组类型
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
var arr2 = ["123", 4112, true];
// 元组类型（tuple）  属于数组的一种
var arr3 = [123, 'this is ts'];
//枚举类型（enum）
// enum 枚举名{ 
//     标识符[=整型常数], 
//     标识符[=整型常数], 
//     ... 
//     标识符[=整型常数], 
// } ;  
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success; //s = 1
var f = Flag.error; // f =2
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c); //1  如果标识符没有赋值 它的值就是下标
var Color1;
(function (Color1) {
    Color1[Color1["blue"] = 0] = "blue";
    Color1[Color1["red"] = 3] = "red";
    Color1[Color1["orange"] = 4] = "orange";
})(Color1 || (Color1 = {}));
;
var a = Color1.red;
console.log(a); //3
var b = Color1.orange;
console.log(b); //4
// 任意类型（any）
var data = 123; //可以赋值任何类型
//任意类型的用处  若不使用any类型 ts语法报错
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined  其他（never类型）数据类型的子类型
var num;
console.log(num); //输出：undefined  报错
var num1;
console.log(num1); //输出：undefined  //正确
//定义没有赋值就是undefined
var num2;
//一个元素可能是 number类型 可能是null 可能是undefined
var n;
// void类型 :typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
function fun() {
    console.log('hello ');
}
fun();
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。
var foo;
//    a=123; //错误的写法
foo = (function () {
    throw new Error('错误');
})();

```

# 3.Typescript的函数

##    3.1、函数的定义

```typescript
// 函数声明法
function run(): string { //声明返回值
    return "run"
}

var fun2 = function (): number { //匿名声明
    return 123
}
// ts 定义方法传参

function getInfo(name: string, age: number): string {
    return `${name} --- ${age}`;
}

var getInfo1 = function (name: string, age: number): string {
    return `${name} --- ${age}`;
}

```

## 	3.2、方法可选参数 

​		es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数。

```typescript
function getInfo2(name: string, age?: number): string {// age?: ->可选参数。
    //可选参数必须配置到参数的最后面

    if (age) {
        return `${name} --- ${age}`;
    } else {
        return `${name} ---年龄保密`;
    }
}
```

##      3.3 默认参数 可选参数

```typescript
// ts可以设置默认参数
function getInfo3(name: string, age: number = 20): string {

    if (age) {
        return `${name} --- ${age}`;
    } else {
        return `${name} ---年龄保密`;
    }
}
```

## 3.4、剩余参数

```typescript
function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}
//三点运算符 接受新参传过来的值
function sum1(...result: number[]): number {
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}

function sum3(a: number, b: number, ...result: number[]): number {
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
```

## 3.5 函数的重载

```typescript
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
//ts为了兼容es5 以及 es6 重载的写法和java中有区别。

function getInfoo(name: string): string;
function getInfoo(age: number): string;
function getInfoo(str: any): any {
    if (typeof str === 'string') {
        return '我叫：' + str;
    } else {
        return '我的年龄是' + str;
    }
}       
// console.log(getInfoo("张三"))正确
// console.log(getInfoo(10)) 正确
//console.log(getInfoo(true))错误

function getInfooo(name:string):string;
function getInfooo(name:string,age:number):string;
function getInfooo(name:any,age?:any):any{
    if(age){

        return '我叫：'+name+'我的年龄是'+age;
    }else{

        return '我叫：'+name;
    }
}
```

## 3.6箭头函数

```typescript
//箭头函数里面的this指向上下文

setTimeout(() => {
    alert('run')
}, 1000)
```

# 4.类

## 4.1类的定义

```typescript
class person {

    public name: string; //属性  public可以省略

    constructor(n: string) { //构造方法
        this.name = n;
    }

    getName():string{
        return this.name;
    }

    setName():void{
        this.name = name;
    }
    
    run(): void {
        console.log(this.name);
    }
}
```

## 4.2ts中实现继承 extens super 

```typescript
    class student extends person{
        constructor(name:string){
            super(name)//初始化父类的构造函数
        }
        run():string{
            return `${this.name}在运动`
        }
        work(){
            return(`${this.name}在工作`)
        }
    } 
```

## 4.3 	修饰符

public :        公有           在当前类里面、 子类  、类外面都可以访问。

protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问。

private ：	私有          在当前类里面可以访问，子类、类外部都没法访问。

属性如果不加修饰符 默认就是 公有 （public）。

## 4.4静态方法和属性

```typescript
  class Per{
        public name:string;
        public age:number=20; 

        static sex="男";//静态属性
        constructor(name:string) {
                this.name=name;
        }
        run(){  /*实例方法*/
            console.log(`${this.name}在运动`)
        }
        work(){
            console.log(`${this.name}在工作`)
        }
        static print(){  /*静态方法  里面没法直接调用类里面的属性*/
            console.log('print方法'+Per.sex);
        }
    }

    // var p=new Per('张三');

    // p.run();

    Per.print();

    console.log(Per.sex);
```

## 4.5多态

父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现

```typescript
class Animal {

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    eat() {
        //具体吃什么  不知道   ，  具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
        console.log("吃锤子")
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {

        return this.name + "吃狗粮"
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {

        return this.name + "吃鱼"
    }
}
```

## 4.6抽象类和抽象方法

typescript中的抽象类：

1 ，它是提供其他类继承的基类，不能直接被实例化。

2，用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。

3，abstract抽象方法只能放在抽象类里面

3，抽象类和抽象方法用来定义标准 。   标准：Animal 这个类要求它的子类必须包含eat方法

```typescript
abstract class Animal1 {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;  //抽象方法不包含具体实现并且必须在派生类中实现
    run() {
        console.log('其他方法可以不实现')
    }
}

// var a=new Animal1() /*错误的写法*/

class Dog1 extends Animal1 {

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name: any) {
        super(name)
    }
    eat() {
        console.log(this.name + '吃粮食')
    }
}

class Cat1 extends Animal1 {

    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name: any) {
        super(name)
    }
    run() {
    }
    eat() {
        console.log(this.name + '吃老鼠')
    }

}
```

