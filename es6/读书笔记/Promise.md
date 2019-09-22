## Promise 对象有以下两个特点。
（1）对象的状态不受外界影响。 Promise 对象代表一个异步操作，有三种状
态： pending （进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。 Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected 。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）
## 基本用法
Promise 对象是一个构造函数，用来生成 Promise 实例。下面代码创造了一个 Promise 实例。
```
var promise = new Promise(function (resolve, reject) {
    // ... some code
    if ( /* 异步操作成功 */ ) {
        resolve(value);
    } else {
        reject(error);
    }
});
```
Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。
```
promise.then(function(value) {
// success},
function(error) {
// failure
});
```
图片异步加载
```
function loadImageAsync(url) {
return new Promise(function(resolve, reject) {
var image = new Image();
image.onload = function() {
resolve(image);
};
image.onerror = function() {
reject(new Error('Could not load image at ' + url));
};
image.src = url;
});
}
```
Promise 对象实现的 Ajax 操作的例子
```
var getJSON = function (url) {
    var promise = new Promise(function (resolve, reject) {
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
};
getJSON("/posts.json").then(function (json) {
    console.log('Contents: ' + json);
}, function (error) {
    console.error('出错了', error);
});
```
调用 resolve 或 reject 以后，Promise 的使命就完成了，后继操作应该放到 then 方法里面，而不应该直接写在 resolve 或 reject 的后面。所以，最好在它们前面加上 return 语句，这样就不会有意外。
```
new Promise((resolve, reject) => {
resolve(1);
console.log(2);
}).then(r => {
console.log(r);
});



new Promise((resolve, reject) => {
return resolve(1);
// 后面的语句不会执行
console.log(2);
})

```
## Promise.all()
```
var p = Promise.all([p1, p2, p3]);
```

（1）只有 p1 、 p2 、 p3 的状态都变成 fulfilled ， p 的状态才会变成 fulfilled ，此时 p1 、 p2 、 p3 的返回值组成一个数组，传递给 p 的回调函数。

（2）只要 p1 、 p2 、 p3 之中有一个被 rejected ， p 的状态就变成 rejected ，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函
数。

## Promise.race()
```
var p = Promise.race([p1, p2, p3]);
```
上面代码中，只要 p1 p2 p3之中有一个实例率先改变状态， p 的状态就跟着改变。那个率先改变的 Promise实例的返回值,就传递给 p 的回调函数。
## Promise.resolve()

1 参数是Promise实例，那么 Promise.resolve 将不做任何修改、原封不动地
返回这个实例

2 thenable 对象指的是具有 then 方法的对象，比如下面这个对象。
```
let thenable = {
then: function(resolve, reject) {
resolve(42);
}
};
```
3 Promise.resolve 方法会将这个对象转为Promise对象，然后就立即执
行 thenable 对象的 then 方法。

4 Promise.resolve 方法允许调用时不带参数，直接返回一个 resolved 状态的
Promise对象。

## Promise.reject()

Promise.reject(reason) 方法也会返回一个新的 Promise 实例，该实例的状态
为 rejected 。回调函数会立即执行。

## done()

asyncFunc()
.then(f1)
.catch(r1)
.then(f2)
.done();

```
Promise.prototype.done = function (onFulfilled, onRejected) {
this.then(onFulfilled, onRejected)
.catch(function (reason) {
// 抛出一个全局错误
setTimeout(() => { throw reason }, 0);
});
};
```

## finally()

finally 方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与 done 方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。

```
Promise.prototype.finally = function (callback) {
let P = this.constructor;
return this.then(
value => P.resolve(callback()).then(() => value),
reason => P.resolve(callback()).then(() => { throw reason })
);
};
```

## 应用
### 加载图片
我们可以将图片的加载写成一个 Promise ，一旦加载完成， Promise 的状态就
发生变化。
```
const preloadImage = function (path) {
return new Promise(function (resolve, reject) {
var image = new Image();
image.onload = resolve;
image.onerror = reject;
image.src = path;
});
};

```

## Generator函数与Promise的结合

使用Generator函数管理流程，遇到异步操作的时候，通常返回一个 Promise 对
象。

```
function getFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}
var g = function* () {
    try {
        var foo = yield getFoo();
        console.log(foo);
    } catch (e) {
        console.log(e);
    }
};

function run(generator) {
    var it = generator();

    function go(result) {
        if (result.done) return result.value;
        return result.value.then(function (value) {
            return go(it.next(value));
        }, function (error) {
            return go(it.throw(error));
        });
    }
    go(it.next());
}
run(g);
```