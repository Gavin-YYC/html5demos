// module.exports 属性表示该模块对外的输出的接口，其他文件加载该模块，实际上就是在读取module.exports变量
// 在模块内容，还有一个变量，和module.exports的意义相同，为：exports
// 其实，在模块内部都有一句声明：
// var exports = module.exports

exports.say = 'hello world';
exports.hello = '你好';
exports.sum = function ( a, b ) {
    return  a + b;
}

// 上述相当于
// module.exports = {
//      say: 'hello world',
//      hello: '你好',
//      sum: function( a, b ) {
//          return a + b;
//      }
// }

console.log( exports );
console.log( module.exports );
console.log( exports === module.exports );  // true

// 需要注意的是，不能直接给exports复制，这样就切断了exports与module.exports的联系
// exports = 'hello'  不可以这样写，否则exports只成了该模块的一个变量，相当于重新赋值，exports不在指向module.exports
// 所有如有一个模块只有一个出口，那么只能通过module.exports来进行！

