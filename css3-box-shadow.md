# box-shadow

# 一、基本语法

> box-shadow可以给任何元素添加一组或几组投影效果。

基本语法：

    box-shadow: [inset] x-offset y-offset blur-radius spread-radius color;

其中，`box-shadow`默认值为`none`。

# 二、参数介绍

* `inset`：如果设置`inset`关键字，则声明创建的是内阴影，如果不设置`inset`关键字，则声明的是外阴影，**默认为外阴影**。

        // 内偏移，只需一个inset关键字即可
        .inset {
          width: 100px;
          height: 100px;
          box-shadow: inset 20px 20px 0px 0px #ccc;
        }
        // 外偏移，不用任何关键字
        .out {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 0px 0px #ccc;
        }

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407081755180.png)

* `x-offset`，阴影在水平方向上的偏移，如果是正值，是向右偏移，如果是负值，向左偏移，如果是0，则不偏移。`x-offset`的值便是偏移的距离。

        // 正偏移
        .positive {
          width: 100px;
          height: 100px;
          box-shadow: 20px 0px 0px 0px #ccc;
        }
        // 负偏移
        .nagative {
          width: 100px;
          height: 100px;
          box-shadow: -20px 0px 0px 0px #ccc;
        }

   ![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407083502688.png)

* `y-offset`，阴影在垂直方向上的偏移，如果是正值，是向下偏移，如果是负值，向上偏移，如果是0，则不偏移。`y-offset`的值便是偏移的距离。

        // 下偏移
        .positive {
          width: 100px;
          height: 100px;
          box-shadow: 0px 20px 0px 0px #ccc;
        }
        // 上偏移
        .nagative {
          width: 100px;
          height: 100px;
          box-shadow: 0px -20px 0px 0px #ccc;
        }

   ![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407091415204.png)

* `blur-radius`: 阴影模糊半径，该值只能是正值。为0时，表示不模糊，此时如果有阴影的话，那么该阴影将会棱角分明。该值越大，就越模糊。

        // 无模糊
        .positive {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 0px 0px #ccc;
        }
        // 有模糊
        .nagative {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 20px 0px #ccc;
        }

   ![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407092139995.png)

* `spread-radius`：阴影拓展半径，可以是正值，表示阴影会扩大多少像素，负值表示阴影会减少多少像素。

        // 正拓展
        .positive {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 0px 20px #ccc;
        }
        // 无拓展
        .nagative {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 0px 0px #ccc;
        }
        // 负拓展
        .nagative {
          width: 100px;
          height: 100px;
          box-shadow: 20px 20px 0px -20px #ccc;
        }

   ![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407094109334.png)

* `color`：阴影颜色，也可以不设置颜色，不设置颜色话取浏览器默认色。但在有些浏览器上不设置的话会为透明。

# 三、阴影模型

## 3.1 模型图

下面这张图是w3给的一张效果图，在这张图上可以很清晰的知道各个参数对应的效果：

    .demo {
      width: 100px;
      height: 100px;
      border: 12px solid blue;
      background-color: orange;
      border-top-left-radius: 60px 90px;
      border-bottom-right-radius: 60px 90px;
      box-shadow:
        64px 64px 12px 40px rgba(0,0,0,0.4),
        12px 12px 0px 8px rgba(0,0,0,0.4) inset;
    }

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407095021383.png)

在图中，外阴影部分中的虚线区域是阴影最基本的区域，阴影至边缘部分是阴影拓展区域，阴影拓展区域之外是阴影模糊区域，可见阴影模糊半径是占外界空间与拓展阴影空间的各二分之一。

另外，阴影的形状继承元素圆角的形状。

## 3.2 基本阴影

![ss](http://7mj4a6.com1.z0.glb.clouddn.com/jbbkjb.png)

# 四、效果示例

## 4.1 单边阴影

可以通过简单的阴影偏移即可完成单边阴影效果。

	// 上边阴影
	div {
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		box-shadow: 0px -5px; 0px 0px rgba(0,0,0,.5);
	}

![](http://7mj4a6.com1.z0.glb.clouddn.com/dadasfg.png)

另外，如果我们不仅只是设置了偏移，另外设置了阴影的话会是什么效果，可以看下截图：

	// 上边阴影
	div {
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		box-shadow: 0px -5px; 5px 0px rgba(0,0,0,.5);
	}

![](http://7mj4a6.com1.z0.glb.clouddn.com/32457862984.png)

可以看到，尽管我们只是设置了某一方向上的阴影，但是当设置模糊半径的时候，其他边也会有一些阴影效果。

上面提到过，模糊半径是为10px时，各站外界区域和阴影区域5px，那么可以设置负的拓展，来把外面模糊的5像素抵消：

	// 上边阴影
	div {
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		box-shadow: 0px -10px; 5px -5px rgba(0,0,0,.5);
	}

![](http://7mj4a6.com1.z0.glb.clouddn.com/462729831.png)


## 4.2 四边相同的阴影

要想获取四边的阴影相同，有两种方法，第一，不设置偏移，只设置模糊半径和拓展。

	div {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
	}

> 随着拓展半径的增大，其阴影会越来越深。

![](http://7mj4a6.com1.z0.glb.clouddn.com/241423534657.png)

第二种方法就是设置扩展半径和阴影颜色，这样获取不到模糊效果：

	div {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.5);
	}

## 4.3 border-image与box-shadow

![](http://7mj4a6.com1.z0.glb.clouddn.com/6547756758.png)

由上图可见，`border-image`并不会影响`box-shadow`的外阴影。

外阴影在最下面，不受任何影响，内阴影在border之下，background之上，背景图片在背景颜色之上。所以层级关系为：`边框 > 内阴影 > 背景图片 > 背景颜色 > 外阴影`。

## 4.4 box-shadow与页面布局

另外一个问题是，`box-shadow`的阴影是否会影响页面布局，是否会在页面占据空间？下面实例演示看看效果：

![](http://7mj4a6.com1.z0.glb.clouddn.com/6239857923750.png)

可见，阴影并不占据页面的任何内容，也不会影响页面布局。所以可以尽情使用，只不过需要调整好层级关系。

# 五、浏览器兼容性

![](http://7mj4a6.com1.z0.glb.clouddn.com/dqwdqf.png)

# 六、参考链接

* [https://www.w3.org/TR/css3-background/#box-shadow](https://www.w3.org/TR/css3-background/#box-shadow)
* [http://www.w3cplus.com/content/css3-box-shadow]http://www.w3cplus.com/content/css3-box-shadow()
* [更多Drop shadow效果](http://nicolasgallagher.com/css-drop-shadows-without-images/demo/)
