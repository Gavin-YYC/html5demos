define( function () {
  var Tpl = [
    '<header class="header">',
      '<nav>',
        '<ul>',
          '{{ each nav as link title }}',
          '<li><a href="#/{{link}}">{{title}}</a></li>',
          '{{/each}}',
        '</ul>',
      '</nav>',
    '</header>'
  ].join("");

  return Tpl;
})
