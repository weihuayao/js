/**
 * ES6 提供了二进制和八进制数值的新写法，分别用前缀Ob （ 或OB ）和O o （或OO ）表示。
 * 
 */

//  console.log(0b111===7)
//  console.log(0o767===503)
 /**
  * 只对number对象有用不进行类型转换
  * Number.isFinite()  检查数字是否有限    isNaN用来检查一个值是否为NaN
  * parseint （）和parseFloat （）移植到了Number 对象上面，行为完全保持不变。
  * Nurnber.islnteger （）用来判断一个值是否为整数。 3 3.0 3.n个零 是同一个值
  * Number.EPSILON一个极小的常量 当浮点运算 误差小于这个常量视为精确值
  * JavaScript 能够准确表示的整数范围在－pow(2,53) 到pow(2.53) 之间
  * Number.MAX SAFE INTEGER 和Number . MIN SAFE INTEGER 两个常量，用来表示这个范围的上下限
  *  Number.isSafeInteger()判断一个数是否在安全范围
  *     
  */

//console.log(Number.isInteger(2.000))

/**
 * MAth 对象扩展
 * Math.tunrc() 除去一个小数部分  ,返回整数部分  非数值先转化为数值  空值无法取整 返回NAN
 * Math.sign 方法用来判断－ 个数到底是正数、负数，还是零。对于非数值，会先将其转换为数
 * Math.cbrt 计算一个数的立方根
 * Math.fround 方法返回一个数的单精度浮点数形式
 * Math.hypot 方法返回所有参数的平方和的平方根。
 */