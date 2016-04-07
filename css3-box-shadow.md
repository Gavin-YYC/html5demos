# box-shadow

# 一、基本语法

> box-shadow可以给任何元素添加一组或几组投影效果。

基本语法：

    box-shadow: [inset] x-offset y-offset blur-radius spread-radius colr;

其中，`box-shadow`默认值为`none`。

# 二、参数介绍

* `inset`：如果设置`inset`关键字，则声明创建的是内阴影，如果不设置`inset`关键字，则声明的是外阴影，**默认为外阴影**。

      // 内偏移，只需一个inset关键字即可
      .inset {
        width: 100px;
        height: 100px;
        box-shadow: inset 20px 20px 0px 0px red;
      }
      // 外偏移，不用任何关键字
      .out {
        width: 100px;
        height: 100px;
        box-shadow: 20px 20px 0px 0px red;
      }

    ![](http://7mj4a6.com1.z0.glb.clouddn.com/20160407081755180.png)

* `x-offset`，阴影在水平方向上的偏移，如果是正值，是向右偏移，如果是负值，向左偏移，如果是0，则不偏移。`x-offset`的值便是偏移的距离。

      // 正偏移
      .positive {
        width: 100px;
        height: 100px;
        box-shadow: 20px 0px 0px 0px red;
      }
      // 负偏移
      .nagative {
        width: 100px;
        height: 100px;
        box-shadow: -20px 0px 0px 0px red;
      }

  <style>
  .basic {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    float: left;  
  }
  .positive {
    box-shadow: 20px 0px 10px 0px rgba(0,0,0,.4);
  }
  .nagative {
    margin-left: 80px;
    box-shadow: -20px 0px 10px 0px rgba(0,0,0,.4);
  }
  .clear {
    clear: both;
  }
  </style>
  <div class="basic positive">左偏移</div>
  <div class="basic nagative">右偏移</div>
  <div class="clear"></div>

# 三、一些基本效果

## 3.1 外阴影


## 3.2 内阴影


# 四、效果示例

## 4.1 单边阴影

## 4.2 四边相同的阴影

## 4.2

# 五、浏览器兼容性
