// 通过，我们会有相关的文件放到一个目录下，便于组织管理
// 那么该目录有一个入口文件
// require可以只加载该目录，然后自动读取该目录下的package.json文件
// {
//      "name": "xxx",
//      "main": "xxx.js"
// }


var mod = require('./mod1/');

console.log( mod );

// 如果该文件夹下面没有package.json或者没有main属性
// 则会自动加载该文件夹下的index.js或index.node文件
