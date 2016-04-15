# css3 word-wrap / overflow-wrap

## 1、简介

解决什么问题？

在一个容器内，如果任意的一个字符串较长（比如URL）就会溢出该容器，`word-wrap`定义该容器内的字符串是否在溢出时自动换行。先看看效果：

![](http://7mj4a6.com1.z0.glb.clouddn.com/63129846192649.png)

Demo地址：[http://sandbox.runjs.cn/show/whzwpxw9](http://sandbox.runjs.cn/show/whzwpxw9)

> 注意：尽管所有浏览器都支持`word-wrap`，但是W3C决定将`word-wrap`更名为`overflow-wrap`，两者功能属性完全相同，只不过`overflow-wrap`的兼容性不如`word-wrap`的兼容性好。在使用的时候最好同时使用两个，可向前兼容。

## 2、使用方法

> 注意：该属性是有在`white-space`允许换行的时候才可以使用。

语法：

    word-wrap: normal | break-word;

属性如下：

* `normal`：文本只允许在特定的点（比如：空格、-等）处换行，默认属性。
* `break-word`：如何说字符连续且没有特定分隔符会在任意的断开，否则的话，在可接受的端点处换行。

兼容性语法：

    .element {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

> 同时书写两种形式，向前兼容。

## 5、浏览器兼容性

word-wrap所有浏览器都兼容。overflow-wrap的兼容性如下：

![](http://7mj4a6.com1.z0.glb.clouddn.com/1264319264.png)

## 6、参考文档

* [https://drafts.csswg.org/css-text-3/#overflow-wrap-property](https://drafts.csswg.org/css-text-3/#overflow-wrap-property)
* [Word Wrap / Overflow Wrap](http://css3clickchart.com/#overflow-wrap)
* [https://docs.webplatform.org/wiki/css/properties/overflow-wrap](https://docs.webplatform.org/wiki/css/properties/overflow-wrap)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap)
