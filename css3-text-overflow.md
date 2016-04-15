# css3 text-overflow

## 1、简介

css的`text-overflow`属性是用来解决当文本超出元素范围时该怎么截断的问题。

## 2、使用方法

在之前的实现中，文本溢出一般是通过`overflow: hidden`来实现的，或者通过js来判断字符的长度，实现截取然后多余的补上`...`替代符号。现在直接通过css的一个属性就可完成此项工作，下面先看看`text-overflow`的语法。

    element {
      text-overflow: normal | clip | ellipsis | string;
    }

下面解释一下参数：

  * `normal`：正常情况下，效果和clip相同
  * `clip`： 如果超出box，则内容直接截断，不会显示`...`标记
  * `ellipsis`：文本溢出时显示`...`标记，在最后一个字符中插入
  * `string`：用户可自定义的分隔符，比如`... more`

> 注意：经测试，只有firefox浏览器支持string属性，可以自定义分隔符

这里需要注意的是，`text-overflow`单独使用是没有任何效果的，需要配合其他css属性一起使用：

    element {
      text-overflow: ellipsis;
      // 需要配合如何属性一起使用
      white-space: nowrap;
      overflow: hidden;
    }

> text-overflow 只发生在block与inline-block元素中，因为这些元素需要宽度来防止内容过多时溢出。当设置direction属性为：rtl，此时不会出现左边没有出现...的标记符。

## 3、测试例子

[点击进入在线Demo](http://htmlpreview.github.io/?https://github.com/Gavin-YYC/html5demos/blob/master/css3-text-overflow.html)

## 4、如何实现多行文本的溢出处理

上面通过`white-space: nowrap`设置后会产生一个问题，即文本不会换行，而现实中经常会碰到的需求是：我们有多行文本，如果溢出则进行分割，这种情况下怎么办呢？

* 方案1：`-webkit-line-clamp：line-number`，webkit内核支持，其他浏览器不支持

        .text-overflow-multy-line {
          word-break: normal;
          height: 120px;
          text-overflow: ellipsis;
          overflow: hidden;
          // 最后三个属性必须支持
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

* 方法2：`text-overflow: -o-ellipsis-lastline;`，只有Opera浏览器支持

        p {
            overflow: hidden;
            white-space: normal;
            height: 3em;
            text-overflow: -o-ellipsis-lastline;
        }

* 方法3：jquery

        $(".figcaption").each(function(i){
          var divH = $(this).height();
          var $p = $("p", $(this)).eq(0);
          while ($p.outerHeight() > divH) {
              $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
          };
        });

* 方法4：::after

        p::after {
          content:"...";
          font-weight:bold;
          position:absolute;
          bottom:0;
          right:0;
          padding:0 20px 1px 45px;
        }

* 方案5： 插件方法，[Clamp.js](https://github.com/josephschmitt/Clamp.js)


## 5、老版本的text-overflow

老版本的`text-overflow`还有其他属性，比如：`text-overflow: ellipsis ellipsis;`，其有两个参数，分别控制着容器内左右两边的溢出，这个时候需要设置`text-align:center`，这个属性已经废弃了。不知道如何实现这种效果的，难道是在容器中间取一个更小的容器？

另外一个老版本的属性是：`ellipsis-word`，过去`text-overflow`是`text-overflow-mode`与`text-overflow-ellipsis`的缩写，现在那些单独的属性都不存在了。

## 6、浏览器兼容性

![](http://7mj4a6.com1.z0.glb.clouddn.com/362468298.png)

## 7、参考文档

* [多行文本溢出显示省略号(...)的方法](http://c7sky.com/text-overflow-ellipsis-on-multiline-text.html)

* [text-overflow](https://css-tricks.com/almanac/properties/t/text-overflow/)

* [Text-overflow middle cropping](https://www.w3.org/wiki/Text-overflow_middle_cropping)

* [多行文本溢出显示省略号(…)全攻略](http://www.css88.com/archives/5206)
