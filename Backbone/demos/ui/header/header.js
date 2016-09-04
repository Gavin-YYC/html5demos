/**
 * Header
 * 公共组件，生成header菜单
 * 向野狗服务请求数据
 * 在需要引入header的地方直接引入该模块即可
 */

 // 引入css
 // 'css!ui/header/header'
define( ['T', 'ui/header/tpl', 'ui/header/model'], function ( T, Tpl, Model ) {

  var Header = Backbone.View.extend({
    el: '#container',

    model: null,

    initialize: function () {
      this.model = new Model();
      this.listenTo( this.model, 'change', this.render );
    },

    render: function () {
      var data = {
        nav: this.model.get('nav')
      };
      this.$el.append( T.compile( Tpl )( data ) );
    }
  });

  return new Header();
})
