define(function () {
  var Tpl = [
    '<header class="mui-bar mui-bar-nav">',
      '<div class="mui-icon mui-action-menu mui-icon-bars mui-pull-left {{if index}} menu{{else}} back{{/if}}"></div>',
      '<div class="mui-title">主页</div>',
      '{{if index}}',
        '<div class="mui-action-back mui-btn mui-btn-link mui-pull-right">da</div>',
      '{{/if}}',
    '</header>'
  ].join("")

  return Tpl;
})
