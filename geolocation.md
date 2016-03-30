# Geolocation

> geolocation是navigator中的方法，可以获取用户的位置信息，包括经纬度、海拔高度、当前的方向以及运动速度等信息。

GeoLocation有三个方法：`getCurrentPosition()`，`watchPosition()`，`clearWatch()`。

## 1、getCurrentPosition()

    if ( navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( successCallback, failCallback, options );
    } else {
      alert( "你的浏览器不支持获取位置信息！" )
    }

上面，`successCallback`、`failCallback`、`options`分别对应着成功时的回调、失败时的回调、以及参数。例子如下：

    function successCallback ( location ) {
      console.log( location );
    }
    function failCallback ( error ) {
      console.log( error );
    }

## 2、参数配置

上述`options`可以设置获取位置时的参数，参数配置可以定义是否开启高精度定位、超时设定、应用程序缓存时间：

|  参数                |  含义  | 默认值 |
|---                  |---|----|
| enableHighAccuracy  |是否高精度定位 | false   |
| timeout  | 等待响应的最大时间  | infinity（无限大）|
| maximumAge：  | 应用程序缓存时间  |  0 |

## 3、获取的位置信息

以上述successCallback为例，返回获取的位置信息：

    function successCallback ( location ) {
      var info = location.coords;
      $("body").html( location.timestamp + "--" + info.latitude + "," + info.longitude);
    }

    // 页面效果为
    1459324546863--40.1234,116.1203

请求成功后，返回数据对象，其信息为：

| 属性 | 描述 |
|--|--|
| coords.latitude | 十进制数的纬度 |
| coords.longitude | 十进制数的经度 |
| coords.accuracy | 位置精度 |
| coords.altitude | 海拔，海平面以上以米计 |
| coords.altitudeAccuracy | 位置的海拔精度 |
| coords.heading | 方向，从正北开始以度计 |
| coords.speed | 	速度，以米/每秒计 |
|timestamp|响应的日期/时间|

需要注意的事，往往高度得到的信息不准确，及时是使用比较专业的GPS设置，获取的高度信息也不会很精确，但经纬度一般较为精确。

另外，一般来讲，经纬度和位置精度是有数据返回的，其他的数据可能会返回null。

## 4、错误处理

在使用的过程中可能会发生错误，比如用户不允许打开定位、定位请求超时、获取信息失败等。如果请求发生错误，会自动触发第一条中的`errorCallback`回调，传入一个`error`对象，`error`对象包括`code`与`message`两个属性，即对应的错误代码和错误信息。

| 编号  | 常量  | 说明  |
|---       |---|---|
| 1  | PERMISSION_DENIED  | 用户选择拒绝浏览器获取其位置信息  |
| 2  | POSITION_UNAVAILABLE | 尝试获取用户位置数据，但失败了  |
| 3  | TIMEOUT  | 获取用户位置时超时(如果设置了可选的timeout值)|

## 5、watchPosition()

DEMO地址：[watchPosition](http://sandbox.runjs.cn/show/ptjwtkat)

除了`getCurrentPosition()`方法之外，还有一个获取位置信息的方法是`watchPosition()`，该方法不仅可以获取用户的位置信息，而且如果用户的位置信息发生变化，会自动触发`successCallback`，从而更新位置信息。

如果实在移动中的设备或者高精度设备可以使用方法。

## 6、clearWatch()

停止`watchPosition()`方法。

## 7、高德地图API

遇到的问题是，通过高德地图来定位与直接通过geolocation获取定位有时候获取的位置信息不一致。而高德地图获取的位置更精确一点。

在高德地图上可以查看其定位原理：[这里](http://lbs.amap.com/getting-started/locate/)。

高德地图采用的是混合定位（也叫wifi定位）：GPS+基站+wifi的混合定位方式。


## 8、位置保密

用户打开需要获取位置信息的网站的时候，会弹出一个窗口来询问用户是否同意网站获取你的当前位置信息。

这是一种对用户信息的一种保密，一般用户可以在自己的浏览器上设置位置信息对哪些网站可用，比如chrome，在高级设置的隐私设置中：

![pic](http://7mj4a6.com1.z0.glb.clouddn.com/20160330042606274.png)
