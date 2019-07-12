console.log("开始")
var p1 = new Promise((resolve, reject) => {
    resolve("p1")
})
p1.then(res => {
    console.log("p1")
})
console.log(2)
setTimeout(() => {
    console.log("time1")
})
var p1 = new Promise((resolve, reject) => {
    resolve("p2")
})
setTimeout(() => {
    console.log("time2")
})
p1.then(res => {
    console.log("p2")
})