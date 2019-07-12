function person(name , age){
    this.name = name;
    this.age  = age;
}

function New(p){

    //新建一个对象
    let  obj = {};
    //将构造函数的作用域赋给新对象
    let arg = Array.prototype.slice.call(arguments)
    //执行构造函数中的代码(为这个新对象添加属性)；
    obj.__proto__ = p.prototype;
    p.prototype.constructor = p;
    
    p.apply(obj,arg)
    //返回新对象。
    return obj;
}

p1 = New(person);
p2 = New(person);

console.log(p1.__proto__ === p2.__proto__)
console.log(p1.__proto__ === person.prototype);