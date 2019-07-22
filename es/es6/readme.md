npm init 
初始化生成package.json

安装 babel-cli在项目中
npm install --save-dev babel-cli
安装最新的解码规则
npm install --save-dev babel-preset-latest
react 转码规则
npm install --save-dev babel-preset-react
＃不同阶段语法提案的转码规则（共有4 个阶段），选装一个
 npm install --save-dev babel-preset-stage-0
 npm install --save-dev babel-preset-stage-1
 npm install --save-dev babel-preset- stage-2
 npm install --save-dev babel-preset-stage-3
 .babelrc
 "presets":[
        "latest",
        "react",
        "stage-2"
],
从 example.js 转码到 complied .js
babel example . js --out-file compiled.js
＃整个目录转码
 --out-dir 或－ d 参数指定输出目录
babel src --out-dir lib

这个node_modules 让我头疼
新建.gitigonre  
node_modules
npm-debug.log
package-lock.json

隐藏 node_modules文件夹
"files.exclude":
"**/node_modules"
}