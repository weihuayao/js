scope = "stone";
function Func() {
    var scope = "sophie";
    function inner() {
        console.log(scope);
    }
    scope = "tommy";
    return inner;
}
var ret = Func();
ret(); // 请输出结果
// tommy  -> tommy