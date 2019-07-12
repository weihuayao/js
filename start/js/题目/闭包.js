//循环中使用闭包解决 `var` 定义函数的问题

for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i)
    }, i * 1000)
  }

  //第一种是使用闭包的方式
  for (var i = 1; i <= 5; i++) {
    ;(function(j){ setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
//使用 `setTimeout ` 的第三个参数，这个参数会被当成 `timer` 函数的参数传入。
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer(j) {
      console.log(j)
    }, i * 1000 , i)
  }
  //使用 `let` 定义 `i` 了来解决
  for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i)
    }, i * 1000)
  }