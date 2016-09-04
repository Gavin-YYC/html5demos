define(function() {
  var Model = Backbone.Model.extend({

    default: {
      nav: null
    },

    initialize: function () {},

    getNav: function () {
      this.set({
        nav: {
          a:1,
          b:1
        }
      });
      // var that = this;
      // var lsh = new Wilddog("https://lsh.wilddogio.com/");
      // var ref = lsh.child('nav');
      // ref.on('value', function ( data ) {
      //   that.set( 'nav', data.val() );
      // }, function ( error ) {
      //   console.log( error )
      // });
    }
  })

  return Model;
})
