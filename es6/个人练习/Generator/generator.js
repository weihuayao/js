function* generatorTest() {
  console.log('函数开始执行');
  yield 'hello';
  console.log('函数暂停后再次启动');
  yield 'generator';
}


let Gt = generatorTest();
// 执行函数，遇到yield后即暂停
let result = Gt.next(); // 函数执行,遇到yield暂停
console.log(result); // {value: "hello", done: false}
result = Gt.next(); // 函数再次启动
console.log(result); // {value: 'generator', done: false}
result = Gt.next();
console.log(result); // {value: undefined, done: true}表示函数内部状态已经遍历完毕


// 对象的Symbol.iterator属性;
let myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 4;
};
for (let i of myIterable) {
  console.log(i);
}
let obj = [...myIterable];
console.log(obj);