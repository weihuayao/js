## 利用 Symbol定义私有方法
```
const bar = Symbol('bar');
const snaf = Symbol('snaf');
export default class myClass {
    // 公有方法
    foo(baz) {
        this[bar](baz);
    }
    // 私有方法
    [bar](baz) {
        return this[snaf] = baz;
    }
    // ...
};
```
## 是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
```
class Widget {
foo (baz) {
bar.call(this, baz);
}
// ...
}
function bar(baz) {
return this.snaf = baz;
}
```
## 私有属性
```
class Point {
#x;
constructor(x = 0) {
#x = +x; // 写成 this.#x 亦可
}
get x() { return #x }
set x(value) { #x = +value }
}
```
## 静态方法
```
class Foo {
static classMethod() {
return 'hello';
}
}
Foo.classMethod() // 'hello'
var foo = new Foo();
foo.classMethod()
// TypeError: foo.classMethod is not a function
Foo.classMethod()
```

### 如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。
```
class Foo {
static bar () {
this.baz();
}
static baz () {
console.log('hello');
}
baz () {
console.log('world');
}
}
Foo.bar() // hello
```
## 静态属性和实例属性
```
class Foo {
}
Foo.prop = 1;
Foo.prop // 1
```
上面的写法为 Foo 类定义了一个静态属性 prop 。目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

### 类的实例属性
类的实例属性可以用等式，写入类的定义之中。
```
class MyClass {
myProp = 42;
constructor() {
console.log(this.myProp); // 42
}
}

class ReactCounter extends React.Component {
state = {
count: 0
};
}
```
### 类的静态属性
```
class MyClass {
static myStaticProp = 42;
constructor() {
console.log(MyClass.myStaticProp); // 42
}
```
## new.target属性
如果构造函数不是通过 new 命令调用的， new.target 会返回 undefined，因此这个属性可以用来确定构造函数是怎么调用的。
需要注意的是，子类继承父类时， new.target 会返回子类。
```
function Person(name) {
if (new.target !== undefined) {
this.name = name;
} else {
throw new Error('必须使用new生成实例');
}
}
// 另一种写法
function Person(name) {
if (new.target === Person) {
this.name = name;
} else {
throw new Error('必须使用 new 生成实例');
}
}
var person = new Person('张三'); // 正确
var notAPerson = Person.call(person, '张三'); // 报错
```