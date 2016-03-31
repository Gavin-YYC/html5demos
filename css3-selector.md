# 笔记：css3 伪元素

> 为了与伪类区分，css3对伪元素进行了调整，在原来一个冒号的基础上增加了一个冒号。在IE6-8值只支持单冒号写法，现代浏览器支持两种写法。

## 1、伪元素

  利用伪元素实现首字母下沉效果与首行效果：[http://sandbox.runjs.cn/show/dcwznqvt 
](http://sandbox.runjs.cn/show/dcwznqvt )

* `::first-letter`选中元素中的首字母 

* `::first-line`选中元素中的首行

* `::selectoion`可以对用户选中的文本进行修饰，比如选中文本的**颜色**、**背景色**，`::selection`只支持该两个属性。

  在属性选择器中容器混淆的是：`E[attr~=val]`与`E[attr*=val]`

两者都可以选择包含val的元素，不同之处在于，`[attr~=val]`是选中带有空格分开的具有多个属性的元素，`[attr*=val]`表示只要有val就可以选中，比如：

    <p class="header fixed">这是一个段落。</p>

则两个选择器都会选中，但是：

    <p class="headerfixed">这是一个段落。</p>

只有`[class*=header]`能够选中。  选择器`[attr|=val]`可选择带有“val-”的元素，比如：“col-”，常用于设置多语言版本：lang-zh 

* `^` 表示以什么开头
* `$` 表示以什么结尾
* `*` 表示匹配任意字符  伪元素

## 2、::before 与 :: after

`::before`与`::after`常用于**清除浮动**，**设置字体**，插入的元素不是DOM的一部分，但同样可以设置样式。要让该伪元素生效，需要设置content属性。  

content属性的设置很灵活，可以这是计数器，对页面元素进行计数并显示。也可以获取当前元素的属性`attr()`并进行设置：

如：`content: attr(class)`，表示插入了该元素的class值。  

另外一个有用的是在多语言版本中的设置，因为每种语言可能对应不同的引号，所以可以用::before与::after设置不同语言的引号。

    :lang( zh ) q {
      quotes: ‘“’ ‘”’;
    }
	p::before {
	  content: open-quote;
	}
	p::after {
      content: close-quote;
    }

## 3、web font

  另外，在自定义字体的时候也多用`content`来完成。这一部分会在以后学习css3的font的时候总结，这里记录一下：

> 平时使用的字体是用的16进制的Unicode编码，在Unicode字符集中，E000至F8FF属于用户造字区，原本是空的，用户可以在里面定义字符的形状，我们所用的webfont就在这一区域。

用户设定好字体文件后，可以直接在页面调用\f001类似的编码引用字体，但是这样开发者不知道该代码所指向的图标具体是什么，所以一般会定义一个class用content来引入该16进制编码:

    .font_close::before { 
      content: '\f001'
    }

 所以在使用的时候，只需要进行如下标记：

	<a class="font font_close"></a>

即可引入图标。
