# Less

## 1.安装 

$ npm install -g less 

## 2.编译 

这将输出编译的CSS 。要将CSS结果保存到您选择的文件，请使用：

$ lessc  styles.less  styles.css

要输出缩小，你可以使用CSS [`clean-css`插件](https://github.com/less/less-plugin-clean-css)。安装插件时，使用`--clean-css`选项指定缩小的CSS输出：

$ lessc --clean-css styles.less styles.min.css

## 3.语法

### 3.1 变量

```less
使用@声明变量
@width: 10px;
@height: @width + 10px; //20

作为选择器和属性名：#@{selector}的形式
3.作为URL：@{url}
@m:margin
{
  @{m}:0
}	
4.变量的延迟加载 (先读完全部变量再去赋值)
{
    @var:0
      .class{
        @var:1;
        .brave{
        	@var:2;
        		three:@var  //3
        	@var:3;
        	}
      	one:@var  // 1 
     }
}

```

### 3.2混合

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}


#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}

.bordered 类所包含的属性就将同时出现在 #menu a 和 .post a 中
带参数的混合
.bordered(@w,@h){
  width:@w,
  heignt:@h
}
#menu a{
  //some code
  .bordered(100px,100px);
}


默认参数的混合
.bordered(@w：10px,@h：10px){
  width:@w,
  heignt:@h
}
#menu a{
  //some code
  .bordered(100px,100px);
}

#menu a{
  //some code
  .bordered(); w:10 h:10
}
arguments变量
.bordered(){
  border:@arguments //border = 1px, solid,black
}

border(1px, solid,black)  

```



### 3.3嵌套

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
//编译后css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}


& 表示当前选择器的父级  container 和hover评级
 
.class{
  .container{
    
    &：hover
  }
}
```

## 4 . 运算

```less
// 所有操作数被转换成相同的单位
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果是 -1.5cm

// conversion is impossible
@incompatible-units: 2 + 5px - 3cm; // 结果是 4px

// example with variables
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%
```

## 5.导入

```less
@import "library"; // library.less
@import "typo.css";
```

