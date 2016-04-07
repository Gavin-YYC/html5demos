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

# 三、一些基本效果

## 3.1 外阴影


## 3.2 内阴影


# 四、效果示例

## 4.1 单边阴影

## 4.2 四边相同的阴影

## 4.2

# 五、浏览器兼容性
