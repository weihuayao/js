creation 
```
// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
   // let TestClass = ;
    class  TestClass{}
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });
  it('a class is block scoped', () => {
   // class Inside {}
   
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });
  it('the `constructor` is a special method', function() {
    class User {
      constructor(id) {
      // 
      this.id = id
      }
    }
    const user = new User(42);
    assert.equal(user.id, 42);
  });
  it('defining a method by writing it inside the class body', function() {
    class User {
      //
      writesTests(){
        return false;
      }
    }
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });
  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      // isLazy(){}
      isLazy() { return !this.everWroteATest }
    }
    const tester = new User();
    //未调用 wroteATest 之前 everWroteATest为 undefined  !undefined === true
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });
  it('anonymous class', () => {
    // const classType = typeof {};
    const classType = typeof class{};
    assert.equal(classType, 'function');
  });
});
```
Accessors
```
// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
  it('a getter is defined like a method prefixed with `get`', () => {
    class MyAccount {
      // get money() { return Infinity; }
      get balance() { return Infinity; }
    }
    
    assert.equal(new MyAccount().balance, Infinity);
  });
  it('a setter has the prefix `set`', () => {
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }
    const account = new MyAccount();
    // account.balance = 42;
    account.balance = 23;
    assert.equal(account.balance, 23);
  });
  
  describe('dynamic accessors', () => {
    it('a dynamic getter name is enclosed in `[]`', function() {
     // const balance = 'yourMoney';
     const getterName = 'yourMoney';
      class YourAccount {
        get [getterName]() { return -Infinity; }
      }
      assert.equal(new YourAccount().yourMoney, -Infinity);
    });
    it('a dynamic setter name as well', function() {
      const propertyName = 'balance';
      class MyAccount {
        get [propertyName]() { return this.amount; }
        // set propertyName(amount) { this.amount = 23; }
        set [propertyName](amount) { this.amount = 23; }
      }
      const account = new MyAccount();
      account.balance = 42;
      assert.equal(account.balance, 23);
    });
  });
});

```
Static
```
// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class you can use the `static` keyword', () => {
  describe('for methods', () => {
    class UnitTest {}
    it('a static method just has the prefix `static`', () => {
      class TestFactory {
       // makeTest() { return new UnitTest(); }
      static makeTest() { return new UnitTest(); }
      }
      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });
    it('the method name can be dynamic/computed at runtime', () => {
     // const methodName = 'makeTest';
       const methodName = 'createTest';
      class TestFactory {
        static [methodName]() { return new UnitTest(); }
      }
      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });
  describe('for accessors', () => {
    it('a getter name can be static, just prefix it with `static`', () => {
      class UnitTest {
      //  get testType() { return 'unit'; }
      static get testType() { return 'unit'; }
      }
      assert.equal(UnitTest.testType, 'unit');
    });
    it('even a static getter name can be dynamic/computed at runtime', () => {
      const type = 'test' + 'Type';
      class IntegrationTest {
        // get type() { return 'integration'; }
        static get testType() { return 'integration'; }
      }
      assert.ok('testType' in IntegrationTest);
      assert.equal(IntegrationTest.testType, 'integration');
    });
  });
});

```
Extends
```
// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another using `extends`', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      // let A
      class A{}
      assert.equal(new A() instanceof Object, true);
    });
    it('when B extends A, B is also instance of `Object`', () => {
      class A {}
      // class B {}
      class B extends A{}
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    it('a class can extend `null`, and is not an instance of Object', () => {
      // class NullClass extends Object {}
      class NullClass extends null {}
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
  });
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      // let A;
      class A{}
      class B extends A {}
      assert.equal(new B() instanceof A, true);
    });
    it('extend over multiple levels', () => {
      class A {}
      //
      class B extends A{ }
      class C extends B {}
      assert.equal(new C instanceof A, true);
    });
  });
});

```
More extends
```
// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another', () => {
  it('extend an `old style` "class", a function, still works', () => {
   // let A;
    class A{};
    class B extends A {}
    assert.equal(new B() instanceof A, true);
  });
  
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
     // const isIt = A.isPrototypeOf();
       const isIt = A.isPrototypeOf(B);
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
     // const proto = B;
     const proto = B.prototype;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('e.g. the inline assignment of the parent class', () => {
        let A;
      // class A;
     // class B extends (A ={}) {}
      class B extends (A = class{}) {}
      assert.equal(new B() instanceof A, true);
    });
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
     // class B extends returnParent {}
      class B extends returnParent('xxxxx') {
        
      }
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
});

```
Super in method
```
// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
  //  class A {hasSuper() { return super(); }}
   class A {hasSuper() { return false; }}
    assert.equal(new A().hasSuper(), false);
  });
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
   // class B extends A {hasSuper() { return super.hasSuper; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}
    assert.equal(new B().hasSuper(), true);
  });
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    //class B extends A {hasSuper() { return 'nothing'; }}
    class B extends A {hasSuper() { return undefined; }}
    assert.equal(new B().hasSuper(), void 0);
  });
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return true; }}
    class B extends A {}
   // class C extends B {iAmSuper() { return iAmSuper(); }}
    class C extends B {iAmSuper() { return super.iAmSuper(); }}
    assert.equal(new C().iAmSuper(), true);
  });
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    // class B extends A {getMethod() { return super.undefined }}
     class B extends A {getMethod() { return super.null}}
    assert.equal(new B().getMethod(), void 0);
  });
});

```
Super in constructor
```
// 28: class - super in constructor
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class`s constructor `super()` can be used', () => {
  it('`extend` a class and use `super()` to call the parent constructor', () => {
    class A {constructor() { this.levels = 1; }}
    // class B {
    //   constructor() {
        
    //     this.levels++;
    //   }
        class B  extends A{
      constructor() {
        super();
        this.levels++;
      }
    }
    assert.equal(new B().levels, 2);
  });
  it('`super()` may also take params', () => {
    class A {constructor(startValue=1, addTo=1) { this.counter = startValue + addTo; }}
    class B extends A {
      constructor(...args) { 
       //  super();
        super(...args)
        this.counter++; 
      }
    }
    assert.equal(new B(42, 2).counter, 45);
  });
  it('it is important where you place your `super()` call!', () => {
    class A {inc() { this.countUp = 1; }}
    class B extends A {
      inc() {
      //  super.inc();
        this.countUp = 2;
        super.inc()
        return this.countUp;
      }
    }
    assert.equal(new B().inc(), 1);
  });
  it('use `super.constructor` to find out if there is a parent constructor', () => {
    class ParentClassA {constructor() {"parent"}}
    class B extends ParentClassA {
      constructor() {
        super();
      //  this.isTop = '' + super.konstructer;
       this.isTop = '' + super.constructor;
      }
    }
    //如果value的值为true，那么什么也不会发生。如果value为false，将抛出一个信息为message的错误。
    assert(new B().isTop.includes('ParentClassA'), new B().isTop);
  });
});

```