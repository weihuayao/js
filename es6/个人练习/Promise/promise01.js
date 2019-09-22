// 定义获取新闻的函数
function getNews(url) {
  let promise = new Promise((resolve, reject) => {
    //初始化
    //执行异步任务
    //创建xmlhttp对象
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
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

// getNews('http://localhost:3000/news?id=2').then((data) => {
//   // console.log(data)
//   //发送请求获取评论内容
//   let commentUrl = Json.parse(data).commentsUrl
//   let url = "http://localhost:3000" + commentUrl
//   return getNews(url)
// }, (error) => {
//   console.log(error)
// }).then((data) => {
//   console.log(data)
// }, (error) => {
//   console.log(
//     console.log(error)
//   )
// })