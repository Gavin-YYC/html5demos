define( [ 'T', 'home/tpl', 'home/model' ], function ( T, Tpl, Model ) {

  var View = Backbone.View.extend({
    el: "#container",
    model: null,
    events: {
      'click span': 'getNav'
    },

    initialize: function () {
      this.model = new Model();
      this.listenTo( this.model, "change:nav", this.render );
      this.model.getNav();
    },
    render: function () {
      var nav = this.model.get("nav");
      this.$el.append('<span>getNav</span>')
      console.log( "nav changed" );
    },
    getNav: function () {
      console.log("clicked")
      this.model.getNav();
      var list = this.listOfPrimes( 20 );
      console.log( list )
    },
    // 生成质数的算法
    // 先生成2~M的数值列表
    // 然后从第一个数开始，排除列表中可被该数整除的数
    // 知道这个数字大于根号下M
    // 剩下的数即为质数
    listOfPrimes: function ( m ) {
      var maxM = Math.floor( Math.sqrt( m ) );
      var s = [];
      for (var i = 2; i < m; i++) {
        s.push( i );
      }
      var index = 1;
      var list = [];
      while( s[index] < maxM ) {
        var prime = s[index];
        for (var i = index + 1; i < m; i++) {
          if ( s[i] % prime !== 0 ) {
            list.push( i );
          } else {
            s.splice( s[i], 1 );
          }
        }
        index++;
      }
      return list;
    }
  });

  return View;
})
