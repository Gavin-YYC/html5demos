(function ( factory ) {

  // 判断环境是window还是global
  var root = ( typeof self === 'object' && self.self === self && self ) ||    // window 环境
            ( typeof global === 'object' && global.global === global && global ); // global环境

  // 适配AMD模块加载方案
  if ( typeof define === 'function' && define.amd ) {
    define(['underscore', 'jquery', 'exports'], function ( _, $, exports ) {
      root.Backbone = factory( root, exports, _, $ );
    });

  // commonJs规范
  } else if ( typeof exports !== 'undefined' ) {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory( root, exports, _, $ );

  // 普通的加载
  } else {
    root.Backbone = factory( root, {}, root._, ( root.jQuery || root.Zepto || root.ender || root.$ ));
  }

})(function ( root, Backbone, $ ) {

  // 防止版本冲突
  var previousBackbone = root.Backbone;
  Backbone.noConflict = function () {
    root.Backbone = previousBackbone;
    return this;
  }

  // 全局变量设置
  Backbone.$ = $;
  Backbone.VERSION = '1.3.3';
  Backbone.emulateHTTP = false;
  Backbone.emulateJSON = false;

  var Events = Backbone.Events = {};
  var Model = Backbone.Model = {};
  var View = Backbone.View = {};

  var Collection = Backbone.Collection = {};

  var Router = Backbone.Router = {};

  var History = Backbone.History = {};

  var extend = function () {

  }

  Model.extend = View.extend = Collection.extend = Router.extend = History.extend = extend;

  return Backbone;
})
