/**
 * ES6 为字符串添加了遍历器接使得字符串可以由for ... of 循环遍历。
 */
for (let codepoint in "foo") {
    console.log(codepoint)
}

/**
 * charAt()返回给位置字符串的字符
 */

console.log("asdaf".charAt(3))

/**
 * ES6 为字符串实例提供了normalize 方法， 用来将宇符的不同表示方法统－ 为同样的形
   式，这称为Unicode 正规化。
*/

/**
  * includes()  starsWith()  endsWith()
  * 
  * includes（） ：返回布尔值，表示是否找到了参数字符串。
    starts With （）： 返回布尔值， 表示参数字符串是否在源字符串的头部。
    ends With （）：返回布尔值， 表示参数字符串是否在源字符串的尾部。
    这3 个方法都支持第二个参数， 表示开始搜索的位置
    repeat()  repeat 方法返回一个新字符串，表示将原字符串重复n 次。
  */
    var  s = 'hello world'
    s.startsWith("hello")
    s.endsWith("d")
    s.includes("h")

/** 
 * padStart（）、padEnd()
 * 如果某个字符串不够指定长度，会在头部或尾部补全。
 * padStart （ ） 用于头部补全， pad E nd （） 用于尾部补全。
*/

/**
 * 模板字符串  
 * 在模板字符串中嵌入变量，需要将变量名写在$｛｝中。
 * 模板字符串中还能调用函数。
 * ＜ ul ＞ 等 标签前面会有一个换行。如果不想要这个换行，可以使用trim 方法消除。
 */
$('#result').append(`
this is <b>${basket.count}</b> items 
in your basket , <em>${basket.onSalae}</em>
are on sale
`)


/*
  String . raw 方法往往用来充当模板字符串的处理函数， 返回一个反斜线都被转义（即反
斜线前面再加一个反斜线〉的字符串，对应于替换变量后的模板字符串。
String.raw 方法也可以作为正常的函数使用。这时，其第一个参数应该是一个具有raw
属性的对象，且raw 属性的值应该是一个数组。
*/ 

String.raw(`hi\n${3+2}`)  // hi \\n5

String. raw ( { raw:"test "} , 0, 1, 2);
  //’ t0els2t ’