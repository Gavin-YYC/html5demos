# View

# el参数

`el`属性是指view将渲染到什么地方。每个视图都有一个`el`参数，及时el对应的DOM还没有插入到页面中去。视图可以在任何时候渲染，然后一次性插入到DOM中去。这样尽量减少reflows和repaints从而获得更高的UI渲染。

`el`参数可以通过`tagName`、`className`、`id`、`attributes`来创建，如果都为指定，`el`会是一个空的`div`。

> this.$el = $(view.el);

> this.$el.find(selector) = this.$(selector);

# setElement

如果你要把一个存在的视图应用到一个不同的DOM元素上，你可以使用`setElement`。而重写`this.el`需要同时改变DOM和重新绑定事件给新的元素。

`setElement`方法会返回一个缓存的`$el`给你，并把视图中绑定在老的元素上的事件移动到新的元素上。

只需把新创建的元素，并调用视图的`setElement`方法即可。

    var btn1 = $("<button></button>");
    var btn2 = $("<button></button>");
    var View = Backbone.View.extend({
      events: {
        click: function (e) {
          console.log( view.el === e.target );
        }
      }
    });

    var view = new View({
      el: btn1
    });
    view.setElement(btn2);
    btn1.trigger('click');
    btn2.trigger('click');

如上，创建两个元素btn1、btn2，刚开始把事件绑定在了btn1上面，然后重新设置其el为btn2，则视图上的事件全部绑定到了btn2上面。

其中参数也可以是页面中已经存在的元素：

    var view = new Backbone.View();
    view.setElement("<p><a><span>test</span></a></p>");
    view.$("a span").html();  // test
