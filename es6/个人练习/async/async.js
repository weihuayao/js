async function foo() {
  return new Promise(resolve => {
    setTimeout(resolve,2000);
  })
}

async function test() {
  console.log("开始执行",new Date().toTimeString());
  await foo();
  console.log("执行完毕", new Date().toTimeString());
}

