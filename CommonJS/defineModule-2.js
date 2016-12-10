// 在nodeJS内部有一个Module构建函数，所有模块都是Module实例
// function Module () {
//      this.id = ''
//      this.exports = {};
//      this.parent = parent;
//      ...
// }

function Animal( name  ) {
    this.name = name;
}

Animal.prototype = {
    say: function () {
        console.log( this.name );
    }
}


// 每个模块内部都有一个module对象，代表当前模块，其实Module的实例
// 它有如下属性
// module {
//      id: '',             模块标识符，通常是带有绝对路径的模块文件名
//      filename: '',       模块的文件名，带有绝对路径
//      loaded: false,      返回一个布尔值，表示该模块是否已经加载
//      parent: {},         返回一个对象，表示调用该模块的模块
//      children: [],       返回一个数组，表示该模块要用到的其他模块
//      exports: {}         表示模块对外输出的值
// }
module.exports = Animal;
