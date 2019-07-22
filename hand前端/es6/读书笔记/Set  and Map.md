# set
它类似于数组，但是成员的值都是唯一的，没有重复的值。
```
用于去重
function distinct(arr){
    return [...new Set(arr)];
}


 function dedupe(array) {
return Array.from(new Set(array));
}
```

集合运算
```
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```
在遍历操作中，同步改变原来的 Set 结构，
```
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```
# WeakSet
```
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}


const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)

```
# Map
结合数组的 map 方法、 filter 方法，可以实现 Map 的遍历和过滤（Map 本身没有 map 和 filter 方法）。
```
const map0 = new Map()
.set(1, 'a')
.set(2, 'b')
.set(3, 'c');
const map1 = new Map(
[...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}
const map2 = new Map(
[...map0].map(([k, v]) => [k * 2, '_' + v])
);
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}
```
map foreach

```
map.forEach(function(value, key, map) {
console.log("Key: %s, Value: %s", key, value);
});
forEach 方法还可以接受第二个参数，用来绑定 this 。
const reporter = {
report: function(key, value) {
console.log("Key: %s, Value: %s", key, value);
}
};
map.forEach(function(value, key, map) {
this.report(key, value);
}, reporter);
```
map 和对象的转化 
```
function strMapToObj(strMap) {
let obj = Object.create(null);
for (let [k,v] of strMap) {
obj[k] = v;
}
return obj;
}


function objToStrMap(obj) {
let strMap = new Map();
for (let k of Object.keys(obj)) {
strMap.set(k, obj[k]);
}
return strMap;
}
```
Map  JSON 转化

```
function strMapToJson(strMap) {
return JSON.stringify(strMapToObj(strMap));
}

另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON
 
function mapToArrayJson(map) {
return JSON.stringify([...map]);
}
```
json to map 
```
function jsonToStrMap(jsonStr) {
return objToStrMap(JSON.parse(jsonStr));
}


JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。

function jsonToMap(jsonStr) {
return new Map(JSON.parse(jsonStr));
}
jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
```
WeakMap 与 Map 的区别有两点。
   WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。
```
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key

const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
[e1, 'foo 元素'],
[e2, 'bar 元素'],
];

 DOM 元素被清除，其所对应的 WeakMap 记录就会自动被移除。
const wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element) // "some information"

```
   WeakMap 的键名所指向的对象，不计入垃圾回收机制
   WeakMap 应用的典型场合就是 DOM 节点作为键名
   
   ```
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();
myWeakmap.set(myElement, {timesClicked: 0});
myElement.addEventListener('click', function() {
let logoData = myWeakmap.get(myElement);
logoData.timesClicked++;
}, false);
```
WeakMap 的另一个用处是部署私有属

```
const _counter = new WeakMap();
const _action = new WeakMap();
class Countdown {
    constructor(counter, action) {
        _counter.set(this, counter);
        _action.set(this, action);
    }
    dec() {
        let counter = _counter.get(this);
        if (counter < 1) return;
        counter--;
        _counter.set(this, counter);
        if (counter === 0) {
            _action.get(this)();
        }
    }
}
const c = new Countdown(2, () => console.log('DONE'));
c.dec()
c.dec()
// DONE
// DONE
```