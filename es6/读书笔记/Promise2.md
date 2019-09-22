# Promise对象

## 1.三个状态

pengding初始化

fullfilled 成功状态

rejected 失败状态

## 2.回调函数中的两个参数

```javascript
// 1. 创建promise对象
var promise = new Promise(function(resolve, reject){ 
  // 做异步的操作 
  if(成功) { // 调用成功的回调
    resolve(result); 
  } else { // 调用失败的回调
    reject(errorMsg); 
  } 
}) 
// 2. 调用promise对象的then()
promise.then(function(
  (result) => console.log(result), 
  (errorMsg) => alert(errorMsg)
))
```

## 3.promise的执行过程

![1568168967078](assets/1568168967078.png)

## 3.promise 发送异步ajax的例子

```javascript
// 定义获取新闻的函数
function getNews(url) {
  let promise = new Promise((resolve, reject) => {
    //初始化
    //执行异步任务
    //创建xmlhttp对象
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      // 由于ready 是 1 - 4 变化的 会直接进入rejected状态 if( && ) else
      if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
          resolve(xmlHttp.responseText);
        } else {
          reject('暂无新闻');
        }
      }
    };
    // open 设置请求方式和 url
    xmlHttp.open("GET", url);
    xmlHttp.send();
  })
  return promise;
}

getNews('http://localhost:3000/news?id=2').then((data) => {
  // console.log(data)
  //发送请求获取评论内容
  let commentUrl = Json.parse(data).commentsUrl
  let url = "http://localhost:3000" + commentUrl
  return getNews(url)
}, (error) => {
  console.log(error)
}).then((data) => {
  console.log(data)
}, (error) => {
  console.log(
    console.log(error)
  )
})


```

