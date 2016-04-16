# css3 word-break

## 1、简介

`word-break`属性可以解决断行的时候在哪断的问题。一般来说，断行只发生在具有空格、连字符的地方，该方式执行后就好像出现了一个空格和连字符。

接下来的例子展示`word-break`的使用方式：

    p {
      width: 1em;
      word-break: break-all;
    }

效果就是这样：

![](http://7mj4a6.com1.z0.glb.clouddn.com/46329649283.png)

## 2、参数（value）

* `normal`： 默认规则进行断行
* `break-all`： 任何文字单词都有可能断行
* `keep-all`：对于中文、日文、韩文文本不会断行，其他情况下和`normal`效果相同。（测试效果是：一般不换行，除了碰到标点符号才会换行。该参数可能在不同浏览器上有不同情况）

一般该属性经常和`hyphens`属性一起使用，当中断发生时，连字符自动插入：

    p {
      -ms-word-break: break-all;
          word-break: break-all;

       // Non standard for webkit
          word-break: break-word;

     -webkit-hyphens: auto;
        -moz-hyphens: auto;
             hyphens: auto;
    }



## 3、兼容性

![](http://7mj4a6.com1.z0.glb.clouddn.com/327409732074-023.png)
