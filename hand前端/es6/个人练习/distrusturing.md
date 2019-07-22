array
```
// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
   //  let firstValue = [1];
    let [firstValue] = [1]
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
   //  let lastValue = [1, 2, 3];
    let [lastValue] = [1, 2, 3].slice(-1)
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    // [x, y] = [x, y];
    [x, y] = [ y , x];
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
   //  const [,z] = all;
    const [,,z] = all;
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
   //  const [firstName, surname, age] = user;
    const [[firstName, surname], age] = user;
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  it('chained assignments', () => {
    let c, d;
  //  let a, b = [c, d] = [1, 2];
       let [a, b] = [c, d] = [1, 2];
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  it('in for-of loop', () => {
    // for (var [a, b] of [[0, 1, 2]]) {}
    for (var [,a, b] of [[0, 1, 2]]) {}
    assert.deepEqual([a, b], [1, 2]);
  });
});

```
String
```
// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
   //   let a, b, c = 'abc';
        let [a,b,c] = 'abc'
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    // const [a, c] = 'ab';
     const [a, ,c] = 'ab';
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
   //  const [space, coffee] = 'a ☕';
    const [space, ,coffee] = 'a ☕';
    assert.equal(coffee, '\u{2615}');
  });
});

```
Object
```
// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    // const x = {x: 1};
        const {x:x} = {x: 1};
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
     // const {magic: [second:second]} = {magic};
      const {magic: {second}} = {magic};
      assert.equal(second, 42);
    });
    it('object and array', () => {
    //  const {z:[x]} = {z: [23, 42]};
      const {z:[,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
     //  const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
     const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      // const {z} = {x: 1,z: 2};
      const {z} = {x: 1, c: 2};
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
    //  const {substr} = 1;
     const {substr} = '1';
      assert.equal(substr, String.prototype.substr);
    });
  });
});

```
Defaults
```
// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
  it('just assign a default value, like so `a=1`', () => {
   //  const [a:1] = [];
   const [a=1] =[]
    assert.equal(a, 1);
  });
  it('for a missing value', () => {
   // const [b=2] = [1,,3];
   const [,b=2,] = [1,,3];
    assert.equal(b, 2);
  });
  it('in an object', () => {
  //  const [a, b=2] = {a: 1,};
   const {a ,b=2} = {a: 1,};
    assert.equal(b, 2);
  });
  it('if the value is undefined', () => {
   // const {a, b} = {a: 1, b: void 0};
   const {a, b=2} = {a: 1, b: void 0};
    assert.strictEqual(b, 2);
  });
  it('also a string works with defaults', () => {
   // const [b=2] = '1';
      const [a,b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });
});

```
Parameters
```
// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring function parameters', () => {
  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      // const fn = ({id}, {name}) => {
      const fn = ({id, name}) => {
        assert.equal(id, 42);
        assert.equal(name, 'Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });
    it('multiple params from array/object', () => {
      // const fn = ([{name}]) => {
      const fn = ([,{name}]) => {
        assert.equal(name, 'Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });
  describe('default values', () => {
    it('for simple values', () => {
     // const fn = (id, name='Bobby') => {
        const fn = (id, name='Bob') => {
        assert.strictEqual(id, 23);
        assert.strictEqual(name, 'Bob');
      };
      fn(23);
    });
    it('for a missing array value', () => {
      const defaultUser = {id: 23, name: 'Joe'};
     // const fn = ([user]) => {
        const fn = ([user = defaultUser]) => {
        assert.deepEqual(user, defaultUser);
      };
      fn([]);
    });
    it('mix of parameter types', () => {
      //const fn = (id, [arr], {obj}) => {
      const fn = (id = 1, [arr =2] , {obj = 3} ) => {  
        assert.equal(id, 1);
        assert.equal(arr, 2);
        assert.equal(obj, 3);
      };
      fn(void 0, [], {});
    });
  });
});

```
Assign
```
// 15: destructuring - assign
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Assign object property values to new variables while destructuring', () => {
  describe('for simple objects', function() {
    it('use a colon after the property name, like so `propertyName: newName`', () => {
      // const {x: newName} = {x: 1};
      const {x: y} = {x: 1};
      assert.equal(y, 1);
    });
    it('assign a new name and give it a default value using `= <default value>`', () => {
    //  const {x: y=2} = {y: 23};
      const {x: y=42} = {y: 23};
      assert.equal(y, 42);
    });
  });
  describe('for function parameter names', function() {
    it('do it the same way, with a colon behind it', () => {
      // const fn = ({x}) => {
      const fn = ({x:y}) => {
        assert.equal(y, 1);
      };
      fn({x: 1});
    });
    it('giving it a default value is possible too, like above', () => {
     // const fn = ({x: z=3}) => {
        const fn = ({x: y=3}) => {
        assert.equal(y, 3);
      };
      fn({});
    });
  });
});

```