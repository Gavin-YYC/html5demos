# throttle and debounce

## 1、概念介绍

首先，**throttling** 与 **debouncing** 都可以对执行的函数进行速率限制。

**throtting**：在一段时间内，对调用函数的最大次数进行限制，比如：在100ms内最多执行一次该函数。

举个例子，如果你的函数会在10s内执行1000次，比如触发`scroll`事件，这时候性能开销就比较大，我们可以使用throttle进行控制，让函数每100ms执行一次，这样，10s内最大执行的次数为100次，有效减少了性能开销。

![throttle](http://gavin-y.qiniudn.com/throttle.png)

**debouncing**：经过一段时间以后才执行相应的函数。并且该函数只执行一次，比如：100ms以后才执行和这个函数。

举个例子：如果你的函数会在10s内执行1000次，比如触发`scroll`事件，当我们加上debounce的特效后，设置经过100ms后执行，Duang的一下，函数不会再这10s内执行了，相反，它会在事件结束后开始算起，经过100ms执行，也就是说在10.1s执行的该函数。

![](http://gavin-y.qiniudn.com/debounce.png)

## 2、演示

在[underscore](http://underscorejs.org/)中提供了[_.throttle()](http://underscorejs.org/#throttle)与[_.debounce()](http://underscorejs.org/#debounce)方法，下面使用这两个方法进行演示，可以明显的看到两个方法的不同。

代码如下：
	
	// throttle
	$( window ).on( 'scroll', _.throttle( func, 200 ) );

	// debounce
	$( window ).on( 'scroll', _.debounce( func, 200 ) );

<iframe style="width: 100%; height: 672px; border: 1px solid #ccc" src="http://sandbox.runjs.cn/show/xcdkk9av" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 2、debounce

上面演示了通过underscore提供的方法实现throttle与debounce，下面具体来看看怎么实现。我们先从最简单的debounce入手，假设只需要提供两个参数：

* **fn**：回调函数
* **wait**：多长时间执行一次

该部分实现比较简单，下面是实现代码：

	var debounce = function ( fn, wait ) {
		var timer = null;
		return function () {
			var context = this, args = arguments;
			clearTimeout( timer );
			timer = setTimeout( function () {
				fn.apply( context, args );
			}, wait );
		}
	}

来演示一下：

	// 使用方式
	var fn = function () {
		// do something
	}
	$( window ).on( 'scroll', debounce( fn, 200 ) );

<iframe style="width: 100%; height: 240px; border: 1px solid #ccc" src="http://sandbox.runjs.cn/show/l9ybgqqo" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

上面通过闭包的方式来实现，因为当我们在调用debounce的时候执行的是一个函数，所以在debounce中，需要返回这么一个函数。

## 3、throttle

上面说完了debounce的创建方式，下面说说throttle的创建方式。

其实，个人认为throttle是debounce的升级版，因为throttle是事件结束后然后在一段时间后才去执行相应函数，那么，有时候我们需要对这个执行过程进行控制，默认的浏览器渲染大约在16~17ms之间（通过最上面的demo的第一个可以看出），那么，如果是我们不想函数执行的这么频繁，即使50ms或者100ms也看不出任何的破绽，那么，我们宁愿使用100ms来执行函数，这也是throttle的作用。

下面我们还是实现比较简单的throttle，进行事件频率限制，同样，该方法接收两个参数：

* **fn**：回调函数
* **wait**：每多少ms执行一次回调函数

实现方式：

	var throttle = function ( fn, wait ) {\
		var last  = 0;
		return function () {
			var context = this;
			var curr = + new Date();
			if ( curr - last >= wait ) {
				fn.call( context );
				last = curr;
			}
		}
	}

使用方式：
	
	var fn = function () {
		// do something
	}
	
	$( window ).on( 'scroll', throttle( fn, 100 ) );
	
过程解释：

* 一开始记录一个时间点
* 随着事件的触发，获取当前触发事件的时间点，判断该时间与事件开始时记录的时间相差是不是大于设定的值
* 如果大于设定的值，则执行函数
* 如果不大于，则什么也不做

<iframe style="width: 100%; height: 240px; border: 1px solid #ccc" src="http://sandbox.runjs.cn/show/r55gmjta" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 4. 简单的封装实现

	/**
	 * throttle 
	 * @param  fn, wait, debounce
	 */
	var throttle = function ( fn, wait, debounce ) {
		var timer = null,		// 定时器
			t_last = null,	// 上次设置的时间
			context,	// 上下文
			args,		// 参数
			diff;		// 时间差
		
		return funciton () {
			var curr = + new Date();
			var context this, args = arguments;
			clearTimeout( timer );
			if ( debounce ) {	// 如果是debounce
				timer = setTimeout( function () {
					fn.apply( context, args );
				}, wait );
			} else {		 	// 如果是throttle
				if ( !t_last ) t_last = curr;
				if ( curr - t_last >= wait ) {
					fn.apply( context, wait );
					context = wait = null;
				}
			}
		}
	}
	
	/**
	 * debounce
	 * @param fn, wait
	 */
	var debounce = function ( fn, wait ) {
		return throttle( fn, wait, true );
	}

注：该封装是一个简单的实现封装，抛掉了一些我自己觉得不必要存在的东西，比如说大多数的throttle的实现都有一个setTimeout的步骤，个人觉得如果时间小于多少的时候，timer会一直被覆盖没有发挥作用，所以就先去掉了。

## 5、underscore的实现方式理解

	_.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;		// 定时器
	    var previous = 0;		// 上次触发的时间
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      
	      // 第一次是否执行
	      if (!previous && options.leading === false) previous = now;
	     
	      // 这里引入了一个remaining的概念：还剩多长时间执行事件
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      // remaining <= 0 考虑到事件停止后重新触发或者
	      // 正好相差wait的时候，这些情况下，会立即触发事件 
	      // remaining > wait 没有考虑到相应场景
	      // 因为now-previous永远都是正值，且不为0，那么
	      // remaining就会一直比wait小，没有大于wait的情况
	      // 估计是保险起见吧，这种情况也是立即执行
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      
	      // 是否跟踪
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	};
	
由上可见，underscore考虑了比较多的情况：

* options.leading： 第一次是否执行，默认为true，表示第一次会执行，传入{leading:false}则禁用第一次执行
* options.trailing：最后一次是否执行，默认为true，表示最后一次会执行，传入{trailing: false}表示最后一次不执行
* 所谓第一次是否执行，是刚开始触发事件时，要不要先触发事件，如果要，则previous=0，remaining 为负值，则立即调用了函数
* 所谓最后一次是否执行，是事件结束后，最后一次触发了此方法，如果要执行，则设置定时器，即事件结束以后还要在执行一次。
* remianing > wait 表示客户端时间被修改过。

-------


	// immediata 表示是否立即执行
    _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	  		// 该过程会频繁进行，直到last>wait
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      // 如果立即调用
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
    };

## 6、使用场景

* scroll resize 事件
* 文本输入自动完成
* 鼠标移动，拖动的情况
* DOM元素的动态定位
* ......

## 6、参考资料

* [https://css-tricks.com/the-difference-between-throttling-and-debouncing/](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)

* [javascript函数的throttle和debounce](http://www.css88.com/archives/4648)

* [浅谈javascript的函数节流](http://www.alloyteam.com/2012/11/javascript-throttle/)

* [jQuery throttle / debounce: Sometimes, less is more!](http://benalman.com/projects/jquery-throttle-debounce-plugin/)

