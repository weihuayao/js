scope = "stone";
function Func() {
    var scope = "sophie";
    function inner() {
        console.log(scope);
    }
    return inner;
}
var ret = Func();
ret(); // 请输出结果

// sophie   验证-> sophie