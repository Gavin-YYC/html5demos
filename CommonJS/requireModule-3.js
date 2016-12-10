// 第一次加载某个模块时，该模块会被缓存，以后再次加载时，会直接从缓存里取
//
// 所有缓存都在require.cache中
//
// 可以通过

delete require.cache( 'cacheName' );    // 清除缓存

// 环境变量
// NODE_PATH
// node在执行脚本时，会先查看环境变量NODE_PATH，他是一组以分号分隔的绝对路径，当在其他位置找不到指定模块时，node会去这些路径找
// 可以将NODE_PATH加入.bashrc
// exports NODE_PATH = '/user/local/lib/node'

// 在执行脚本时
// NODE_PATH=lib node index.js

// require.main()
// 该方法用来判断模块是否直接执行，还是被调用执行
// require.main === module
// 直接执行时，require.main指向本身，返回true
// 调用执行时，返回false

// 一旦模块加载完毕，后续的所有修改，都不会影响该模块内部
