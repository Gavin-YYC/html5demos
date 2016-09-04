define( ['backbone'], function () {

  // 定义路由
  var Router = Backbone.Router.extend({

    routes: {
      'home': 'home',
      'my': 'my',
      'list': 'newsList',
      'back': 'routerManager'
    },

    initialize: function () {},

    home: function () {
      var url = 'home/controller';
      require( [ url ], function ( controller ) {
        controller();
      })
    },

    my: function () {
      console.log("myName");
      this.navigate('#my?name=yangyoucun', {trigger: false, replace: true});
    },

    myItem: function () {
      console.log("myItem");
      // var url = 'my/controller';
      // require( [ url ], function ( controller ) {
      //   controller();
      // })
    },

    newsList: function () {
      console.log("list")
      // var url = 'list/controller';
      // require( [ url ], function ( controller ) {
      //   controller();
      // })
    },

    deafultAction: function () {
      // 404 页面
    }

  })

  var router = new Router();


  return router;
})
