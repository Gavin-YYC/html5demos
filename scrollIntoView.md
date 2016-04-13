# scrollIntoView

> scrollIntoView可以实现让元素滚动到视图(可视)范围内，其接受一个可选参数，true / false

## 1.使用方法

使用方法：

    ele.scrollIntoView( arg );

## 2、参数介绍

### 2.1 参数是boolean形式

如果是：`true`，则表示元素滚动到视图的`顶部`，默认为`true`

    ele.scrollIntoView( true );

如果是：`false`，则表示元素滚动到视图的`底部`

    ele.scrollIntoView( false );

### 2.2 参数是对象形式

> 这种形式，目前只有firefox 36+支持。

另外，其还接受一个对象格式：`scrollIntoViewOptions`，其有如下选项：

    {
        behavior: "auto"  | "instant" | "smooth",
        block:    "start" | "end"
    }

其中`behavior`默认是`instance`，`block`默认是`start`。

调用方式如下：

    ele.scrollIntoView({
      behavior: "smooth",
      block:    "end"
    });

> 注意：

> 如果block是“start”，相当于设置了参数：true

> 如果block是“end”，相当于设置了参数：false

## 3、具体示例

  [Demo地址](http://sandbox.runjs.cn/show/u1ogecdw)

> 注意：节点可能不会特别准确的滚动到滚动区域的上边界或者下边界，这取决于其他元素的布局。

> Depending on the size of the given object and the current window, this method might not be able to put the item at the very top or very bottom, but will position the object as close to the requested position as possible.

## 4、浏览器兼容性

![浏览器兼容性：http://7mj4a6.com1.z0.glb.clouddn.com/23482348923.png](http://7mj4a6.com1.z0.glb.clouddn.com/23482348923.png)

## 5、scrollIntoViewIfNeeded(align)

该属性和`scrollIntoView`属性类似，不同的是，这个属性可以实现自我判断，只有元素不在可视区域内才会滚动到可视区。

如果元素已经在可视区，则不会发生滚动。

该方法同样接受一个参数，是否居中显示，`true`表示垂直居中， `false`表示什么都不做。

## 5、资料来源

* [https://www.w3.org/TR/2009/WD-html5-20090423/editing.html#dom-scrollintoview](https://www.w3.org/TR/2009/WD-html5-20090423/editing.html#dom-scrollintoview)

* [https://msdn.microsoft.com/en-us/library/ms536730(v=vs.85).aspx](https://msdn.microsoft.com/en-us/library/ms536730(v=vs.85).aspx)

* [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded)

* [http://caniuse.com/#search=scrollintoview](http://caniuse.com/#search=scrollintoview)
