// 递归一般来说 效率比较差 但是方便理解  es6中由于尾调用的优化 递归不会更慢

function fib(num){
    if(num ===1 || num ===2 ){
        return 1
    }
    else
        return fib(num-1) + fib(num-2)
}