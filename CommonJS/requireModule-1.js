// nodeJS 采用CommonJS规范
// require也是内置的命令，用来加载文件
// require的基本功能是：读取并执行JavaScript文件，返回该模块的exports对象
// 如果没有该模块，则会报错

var mod1 = require('./defineModule-1.js');

// require命令用来加载文件，后缀名默认是js，所以如果加载js模块，可以不用写后缀名
var mod2 = require('./defineModule-2');


// 打印模块的exports对象
// 都可以正常加载
console.log( mod1 );    // [Function]
console.log( mod2 );    // [Function: Animal]



// require参数不同，那么就会去不同路径寻找模块
// 如果传入的参数以/开头，则表示根路径
// 如果是以 ./ 开头，则表示是相对当前路径
// 如果不是 / 或者 ./ 开头，则表示加载的是一个核心模块，或者一个位于各级node_modules中已安装的模块

require('/hello.js');   // 根目录查找，找不到，会报错
require('./hello.js');  // 当前模块查找，找不到，会报错
require('hello.js');    // 查找全局模块或默认模块，找不到，会报错

// 如果js模块没有查找到，node会继续为文件添加.js、.json、.node再次查找

