define(function () {
  var Model = Backbone.Model.extend({
    defaults: {
      nav: null,
      index: true
    },
    initialize: function () {
      this.getNav();
    },
    getNav: function () {
      var that = this;
      var lsh = new Wilddog("https://lsh.wilddogio.com/");
      var ref = lsh.child('nav');
      ref.on('value', function ( data ) {
        that.set( 'nav', data.val() );
      }, function ( error ) {
        console.log( error )
      });
    }
  });

  return Model;
})
