
// nodeJS 采用CommonJS规范
// 根据这个规范，每个文件都是一个模块，都有自己的作用域，在这个文件里可以定义自己的变量、函数、类等
// 都是私有的，对其他文件不可见

// 变量是私有的
var data = {
    id: 1,
    name: 'test',
    desc: 'hello world'
}

// 函数也是私有的
var func = function () {
    console.log('hello world');
}

// CommonJS规范规定，在每个模块内部，module代表当前模块，该变量是一个对象，具有一个exports属性。
// 该属性是该模块对外的接口
// 加载这个模块，实际上就是在加载module.exports属性。
module.exports = func;


