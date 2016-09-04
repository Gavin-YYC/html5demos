define( [ 'home/view', 'home/model' ], function ( View, Model ) {
  var controller = function () {
    var model = new Model();
    var view = new View({
      model: model
    });
    model.getNav();
  };
  return controller;
})
