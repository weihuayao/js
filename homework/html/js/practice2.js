/*
 * 把 p 中的可枚举属性复制到 o 中，并返回 o
 * 如果 o 和 p 中含有同名属性，则覆盖 o 中的属性
 */
function extend(o, p) {
    for(var i in p)
    o[i] = p[i];
}
