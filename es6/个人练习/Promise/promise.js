let promise = new Promise((resolve, reject) => {
  //初始化promise状态:  pending
  console.log("1")
  //异步操作
  setTimeout(() => {
    console.log("3")
    //根据异步任务返回结果修改状态码
    //异步任务执行成功
    resolve("success"); // 将任务状态修改为fullfilled 
    //任务执行失败
    // reject("err");// 将任务状态修改为fullfilled 
  }, 2000)
})

console.log("2")
promise.then((data) => { //成功回调
  console.log("成功了 =>" + data)
}, (err) => { //失败回调
  console.log("失败了 =>" + err)
})




