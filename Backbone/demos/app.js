(function ( win ) {

  var config = {
    baseUrl: './',
    paths: {
      $: 'libs/jquery-2.2.0.min',
      _: 'libs/underscore',
      backbone: 'libs/backbone-min',
      T: 'libs/template',  // artTemplate
      css: 'libs/css.min'
    },
    shim: {     // 引入没有使用requirejs模块写法的类库
      'backbone': {
        deps: [ '$', '_' ],
        exports: 'Backbone'
      }
    }
  }

  require.config( config );

  require( [ 'backbone', 'router', 'css' ], function () {
    Backbone.history.start();
  })

})( window )
