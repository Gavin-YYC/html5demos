# border-radius

## 1、基本书写方式

### 1.1 设置四个值

基本形式也是简写形式，例如：

    div {
      border-radius: 10px 5px 10px 5px;
    }

这样可以给`div`的四个角都设置`border-radius`属性，分别对应左上角（`top-left`）、右上角（`top-right`）、左下角（`bottom-left`）、左下角（`bottom-right`）。

> 需要注意的是，border-radius不仅可以使用像素值，还可以使用百分比值。

这种简写方式除了一次性设置四个值外，还有其他的写法，比如设置一个值、两个值、三个值，设置不同的值有不同的效果，下面一一演示：

### 1.2 设置一个值

当设置一个值时，四个角半径相等。

    div {
      border-radius: 10px;
    }

### 1.3 设置两个值

两个值分别对应：

  * 第一个值对应：`top-left` 与 `bottom-right`
  * 第二个值对应：`top-right`与`bottom-left`

		div {
			border-radius: 10px 5px;
		}

### 1.4 设置三个值

三个值分别对应：

  * 第一个值对应：`top-left`
  * 第二个值对应：`top-right`与`bottom-left`
  * 第三个值对应：`bottom-right`


	    div {
	      border-radius: 30px 20px 10px;
	    }

## 2、单独定义每个角的radius

单独定义是需要补充上角落信息：

    div {
      border-radius: 10px 5px 10px 5px;
    }
    // 和下面的效果相同
    div {
      border-top-left-radius: 10px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 5px;
    }

比如：

    div {
      border-radius: 10px;
    }
    // 和下面的效果相同
    div {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }

## 3、水平/垂直方向半径

### 3.1 椭圆模型

除了可以这样书写意外，每个角的半径还有水平半径与垂直半径之分。如下图：

![radius](http://7mj4a6.com1.z0.glb.clouddn.com/corner_meitu_1.jpg)

如图所示，圆角属性的模型是一个椭圆，如果该椭圆的水平半径和垂直半径相同，则显示的效果便是圆角，或者我们给每个角只设置一个属性，也会显示圆角效果。

我们可以设置该椭圆模型的水平半径和垂直半径，从而显示效果更丰富的圆角效果。

    div {
      border-radius: 10px / 5px;
    }

上面的代码设置了`div`的圆角属性，四个角的属性都是`水平半径`10像素，`垂直半径`5像素。

### 3.2 水平/垂直方向半径的简写

    div {
      border-radius: 10px 30px 40px / 4px 8px;
    }

上面的情形拆后的效果为：

    div {
      border-top-left-radius: 10px 4px;
      border-top-right-radius: 30px 8px;
      border-bottom-left-radius: 30px 4px;
      border-bottom-right-radius: 40px 8px;
    }

> 这里需要注意，当单独写样式的时候，水平半径与垂直半径通过空格来分开，如果是简写的样式的时候，水平半径和垂直半径通过 “/” 来分开！

## 4、半径的形状

    div {
      width: 100px;
      height: 100px;
      border-width: 40px;
      border-radius: 20px;
    }

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160406071555896.png)

如果当`border-radius` 小于 `border-width`时，显示直角

    div {
      width: 100px;
      height: 100px;
      border-width: 40px;
      border-radius: 50px;
    }

如果当`border-radius` 大于 `border-width`时，显示圆角

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160406071544588.png)

> border-radius 内边半径 = 外边半径 - 边框宽度

> border-radius 与 border-width 差值越大，在圆角幅度越大。


## 5、宽度与颜色过渡

### 5.1 宽度过渡

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407124404880.png)

	.radius .girl {
        width: 100px;
        height: 100px;
        border-width: 30px 10px 1px 1px;
        border-radius: 80px;
        border-top-left-radius: 50px;
    }

如上图所示，是由`border-radius`绘制的一幅卡通头像，元素的相邻边有不同的宽度，这个角会从宽的边过渡到窄的一边，其中一条边的宽度也可以是0，元素相邻转角是由大道小。

### 5.2 颜色过渡

![](http://7mj4a6.com1.z0.glb.clouddn.com/1313134.png)


      .radius .color {
        height: 100px;
        border-width: 30px 40px 50px 60px;
        border-radius: 40px 50px 60px 70px;
        border-color: red green blue orange;
        margin-bottom: 100px;
      }

颜色过渡包括颜色和样式的过渡，过渡的转折线为：连接内外曲线上两个角的连线。

## 6、表格圆角

目前为止，当`table`的属性：`border-co'collapse`为`collapse`的时候，表格无法呈现圆角。

![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407010039670.png)

## 7、兼容性

![](http://7mj4a6.com1.z0.glb.clouddn.com/4253434.png)

## 6、Demo

[Demo 滑块与小女孩](http://sandbox.runjs.cn/show/emod5wvr)
