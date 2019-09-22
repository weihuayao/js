
```
// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map` is a key/value map', function(){
  it('`Map` is a new global constructor function', function() {
   // const typeOfMap = '???';
   const typeOfMap = 'function';
    assert.equal(typeof Map, typeOfMap);
  });
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
   // map.set('key', null);
    map.set('key', 'value')
    //const value = map.get();
    const value = map.get("key")
    assert.equal(value, 'value');
  });
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
   // const hasIt = map.hazz;
    const hasIt = map.has("key");
    assert.equal(hasIt, true);
  });
  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    //const mapAsArray = map; 
    const mapAsArray =Array.from(map); 
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    //map.set(otherObj, '');
    assert.equal(map.has(otherObj), false);
  });
});

```
get()
```
// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map.prototype.get` returns the element from the map for a key', function(){
  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');
    //const value = map.get;
    const value = map.get('key')
    assert.equal(value, 'value');
  });
  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');
    //var value = map.get(map.get(map.get()));
    var value = map.get(map.get(map.get('value')))
    assert.equal(value, 'value');
  });
  it('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    //map.set({}, 'object is key');
    map.set(obj, 'object is key');
    assert.equal(map.get(obj), 'object is key');
  });
  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');
    //const value = map.get(___);
    const value = map.get();
    assert.equal(value, 'yo');
  });
  it('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set(void 0, 1);
    //const value = map.get();
    const value = map.get("11");
    assert.equal(value, void 0);
  });
});
```
set()

```
// 46: Map.prototype.set()
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map.prototype.set` adds a new element with key and value to a Map', function(){
  it('simplest use case is `set(key, value)` and `get(key)`', function() {
    let map = new Map();
    //map.set();
    map.set("key", "value")
    assert.equal(map.get('key'), 'value');
  });
  it('the key can be a complex type too', function() {
    const noop = function() {};
    let map = new Map();
    //map.set(function() {}, 'the real noop');
    map.set(noop, 'the real noop');
    assert.equal(map.get(noop), 'the real noop');
  });
  it('calling `set()` again with the same key replaces the value', function() {
    let map = new Map();
    map.set('key', 'value');
    //map.set('key', 'value3');
    map.set('key', 'value1')
    assert.equal(map.get('key'), 'value1');
  });
  it('`set()` returns the map object, it`s chainable', function() {
    let map = new Map();
    map.set(1, 'one')
       .set(2, 'two')
       // add
       .set(3,"three")
    ;
    assert.deepEqual([...map.keys()], [1,2,3]);
    assert.deepEqual([...map.values()], ['one', 'two', 'three']);
  });
});
```
initialize
```
// 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('initialize a `Map`', function(){
  it('a `new Map()` is empty, has size=0', function() {
    //const mapSize = new Map()
    const mapSize = new Map().has();
    assert.equal(mapSize, 0);
  });
  it('init Map with `[[]]` has a size=1', function() {
    const mapSize = new Map([[]]).size;
    //const mapSize = new Map().size;
    assert.equal(mapSize, 1);
  });
  it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
    //let map1 = new Map();
    let map1 = new Map([[1]]);
    let map2 = new Map().set(1, void 0);
    assertMapsEqual(map1, map2);
  });
  it('init Map with multiple key+value pairs', function() {
    const pair1 = [1, 'one'];
    const pair2 = [2, 'two'];
    //const map = new Map();
    const map = new Map([pair1,pair2]);
    assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
  });
  it('keys are unique, the last one is used', function() {
    const pair1 = [1, 'one'];
    const pair2 = [1, 'uno'];
    const pair3 = [1, 'eins'];
    const pair4 = [2, 'two'];
    //const map = new Map([pair3, pair1, pair2, pair4]);
    const map = new Map([ pair1, pair2,pair3, pair4]);
    assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
  });
  it('init Map from an Object, is a bit of work', function() {
    let map = new Map();
    const obj = {x: 1, y: 2};
    const keys = Object.keys(obj);
    // keys.forEach(key => map.set());
    keys.forEach(key => map.set(key,obj[key]));
    const expectedEntries = [['x', 1], ['y', 2]];
    assertMapsEqual(map, expectedEntries);
  });
});

function mapToArray(map) {
  return Array.from(map);
}
function assertMapsEqual(map1, map2) {
  assert.deepEqual(mapToArray(map1), mapToArray(map2));
}

```
has
```
// 62: Map - `has()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`map.has()` indicates whether an element with a key exists', function() {
  it('finds nothing in an empty map', function() {
    let map = new Map();
   // const hasKey = map.hazz(void 0);
   const hasKey = map.has(void 0);
    assert.equal(hasKey, false);
  });
  it('finds an element by it`s key', function() {
    let map = new Map([['key', 'VALUE']]);
    // const hasKey = map.has();
    const hasKey = map.has('key');
    assert.equal(hasKey, true);
  });
  it('finds `undefined` as key too', function() {
    let map = new Map([[void 0, 'not defined key']]);
   // const hasUndefinedAsKey = map;
    const hasUndefinedAsKey = map.has()
    assert.equal(hasUndefinedAsKey, true);
  });
  it('does not coerce keys', function() {
    let map = new Map([[1, 'one']]);
    // const findsStringOne = true;
     const findsStringOne = false;
    // or    assert.equal(map.has(1), findsStringOne)
     assert.equal(map.has('1'), findsStringOne);
    
  });
  it('after removal (using `map.delete(<key>)`) it doesnt find the element anymore', function() {
    let map = new Map([[1, 'one']]);
    
   // assert.equal(map.has(1), false);
    assert.equal(map.has(1), true);
  });
  it('adding an item (using `map.set(key, value)`) later will make `has()` return true', function() {
    let map = new Map;
    map.set(void 0,"")
    //
    assert.equal(map.has(void 0), true);
  });
});

```