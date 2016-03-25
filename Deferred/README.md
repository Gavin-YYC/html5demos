# jQuery Deferred

> 简介

> 延迟对象是jQury中很重要的一部分，包括Ajax、动画还有其他一些异步操作基本都用延迟对象进行了改写。延迟对象可以让你不关心耗时任务什么时候结束，你只需指定该任务结束后执行什么样的回调即可，在等待的过程中，其他业务逻辑代码依然可以继续运行。

## 一、jQuery.Deferred( [beforeStar] );

该方法创建一个延迟对象，并可以传入一个可选的函数，该函数会在返回延迟对象前被调用。创建完成后，会返回一个延迟对象实例，该实例上有该延迟对象的一些方法，这些方法可以进行链式调用。例如：

    // 创建一个延迟对象
    var d = $.Deferred( function () {
      alert( "beforeStar" );
    });
    // 任务结束后的调用
    d.done( function(){
      alert(" 任务成功完成！");
    });
    // 模拟耗时任务
    setTimeout( function(){
      d.resolve();
    }, 3000);

# 二、回调队列

延迟对象提供将回调添加入回调队列的方法，该方法是通过jquery的回调对象来完成的，即jQuery.Callbacks()的add()方法；同时，还有调用回调函数的方法，类似fire()方法。不过其底层还是通过回调队列进行管理。

    var d = $.Deferred();
    var fn1 = function () { alert( "fn1" ) };
    var fn1 = function () { alert( "fn1" ) };
    var fn1 = function () { alert( "fn1" ) };
    // 类似 callbacks.add()，添加三个回调
    d.done( fn1 ).fail( fn2 ).progress( fn3 );
    //模拟耗时任务
    setTimeot( function(){
		// 类似callbacks.fire()，执行回调队列中的回调
		d.reject();
	}, 3000);

以上，可以将延迟方法按照回调的add()、fire()进行划分，可以更方便的理解回调。

> done() | fail() | progress() | then() | always() 类似于callbacks.add()方法
> reject() | resolve() | notify() rejectWith() | resolveWith() | notifyWith() 类似于fire()方法

# 三、常用方法

### 3.1 resolve()  |  done()

将回调状态更改为`resolve`，并将自动触发所有的`done`回调函数，并可以传入相应参数。这里的`done`回调函数可以是done()方法中的，也可以是then()方法中的。如下例子：

	var d = $.Deferred();
	d.done( function ( args ) {
		alert( args );
	});
	setTimeout(function(){
		d.resolve( "完成啦，快现身！" );
	}, 3000)

另外一种是resolveWith( context [  , args ] )，该方法不仅可以传入参数自动触发`完成回调函数`还能指定回调函数的context（上下文），即可以改变回调函数中的`this`指向，比如：

	var d = $.Deferred();
	d.done( function ( args ) {
		console.log( this ); // Object，即Deferred对象
		alert( args );   // 同时可以接受参数
	});
	setTimeout(function(){
		d.resolveWith( d, "又完成啦，现身吧！");
	}, 3000);

### 3.2 reject()  |  fail()

和resolve()使用方法完全相同，只是resolve是解决，reject是拒绝。

将回调状态更改为`reject`，并将自动触发所有的`fail`回调函数，并可以传入相应参数。这里的`fail`回调函数可以是fail()方法中的，也可以是then()方法中的。如下例子：

	var d = $.Deferred();
	d.fail( function ( args ) {
		alert( args );
	});
	setTimeout(function(){
		d.reject( "被拒了！" );
	}, 3000)

同样，与resolveWith()相对应的是rejectWith()方法，该方法同样可以传入context与args，使用方式和resolveWith()相同，不做例子了。

### 3.3 notify()  |  progress()

一个回调的状态可能是`resolve`与`reject`，还有一个状态是`pending`，即回调正在进行中，此时状态既没有完成也没有拒绝，处在中间的进度态。而`notify()`方法就是处理这个状态的调度。

执行该方法后，会自动触发`progress()`回调，或者`then()`方法中的第三个参数。基本使用方式和上述两个相同：

	var d = $.Deferred();
	d.progress( function ( args ) {
		alert( args );
	});
	setTimeout(function(){
		d.notify( "进度中" );
	}, 3000)

可以通过notify()方法来实现进度条或者上次提示等功能。比如，下面模仿一个进度条的实现：

	var d = $.Deferred();
	// 此处只是模拟使用
	d.progress( function ( args ) {
		$(".bar").css( "width", now + "%" ).html(now + "%");
	});

	/* 模仿回调 */
    var count = 1024;
    var now = 0;
    setInterval( function() {
        now = parseInt( now +  Math.random() * 20 );
        if ( now < count ) {
            d.notify( (now / count * 100).toFixed( 2 ) );
        } else {
            d.resolve( "100" );
        }
    }, 100);

 这里做了一个在线演示：[进度条](http://sandbox.runjs.cn/show/4y1ut71w)。

### 3.4 全能的then()

从对以上的用法总结上来看，`then()`基本在每一小结都出现了，看来这个`then()`确实很强大，其实其也并不是很强大，只是很全能，它能一下子把done()、fail()、progress()收入囊中，不必单独拿出来一个个的写，其语法有三种：

*  deferred.then( doneCallback );
*  deferred.then( doneCallback, failCallback );
*  deferred.then( doneCallback, failCallback, progressCallback );

其中的doneCallback、failCallback、progressCallback是指成功、失败、进度时的回调函数。

比如：

	function done(){ alert( "success" ) };
	function fail(){ alert( "error" ) };
	function progress(){ alert( "progress" ) };

	var d = $.Deferred();
	d.then( done, fail, progress );
	setTimeout(function(){
		d.resolve( "完成！" );
	}, 3000)

这样，把三个回调都写到了一个`then()`中，这样回调是什么状态都会流通到`then()`中，然后在去执行相应的回调。

### 3.5 多个回调

jquery的延迟对象的强大之后是，我可以给一个延迟对象添加多个回调！这些回调会一次被执行，比如：

	// 直接罗列回调
	var d = $.Deferred();
	d.done( fn1, fn2 );
	setTimeout(function(){
		d.resolve();
	}, 1000)

	// 或者才用数组的形式
	var d = $.Deferred();
	d.done( [ fn1, fn2, fn3 ] );
	setTimeout(function(){
		d.resolve();
	}, 1000)

	// 也可以连着写多个done()
	var d = $.Deferred();
	d.done( fn1 ).done( fn2 ).done( fn3 );
	setTimeout(function(){
		d.resolve();
	}, 1000)

这是用`done()`做了个实例，`fail()`、`progress()`、`then()`都可以这样连用。也可以混合连用，先`done().fail().done().progress().fail()`想怎么连就怎么连，充分利用链式调用满足自己。

### 3.6 延迟对象的状态：state()

当我们创建完一个延迟对象后，有时候需要得到延迟对象的状态，并根据这个状态来执行相应的方法。`state()`方法可以返回这个状态。延迟对象的状态主要有：

*  resolve   任务执行完成
*  reject  任务执行失败
*  pending    任务正在进行中

使用如下：

	var d = $.Deferred();
	console.log( d.state() ); // pending
	d.always( function () {
		if ( d.state !== 'pending' ) {
		    return "sorry";
	    }
	    console.log( d.state() );
	});
	setTimeout( function() {
		d.resolve();
	}, 3000);

# 四、deferred.promise()

现在我们可以很轻松的切换延迟对象的状态，并执行相应的回调，但是还有一点，如果我们创建的延迟对象是全局的，那么该延迟对象的状态就有可能被外部更改。具体可参考阮一峰的介绍博客：[jQuery的deferred对象详解](http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object.html)，另外，也有一篇比较详细介绍promise的文章：[jQuery deferred 对象的 promise 方法](http://blog.allenm.me/2012/01/jquery_deferred_promise_method/)。

该方法返回延迟对象的一个`promise`对象。`promise`对象也有一些方法，和deferred对象的方法相似，只不过隐藏了deferred对象的更改状态的方法：比如`resolve()`，`reject()`，`notify()`，`resolveWith()`，`rejectWith()`，`notifyWith()`，这些方法需要我们手动触发才能切换回调的状态，而`promise`对象把这些都省去了，你只能通过`done()`、`fail()`、`then()`添加回调或者判断状态来添加回调。

下面通过一些例子来说明promise的作用：

### 4.1 全局的延迟对象被修改

	var d = $.Deferred();
    var wait = function() {
        setTimeout( function() {
            d.resolve();
        }, 1000);
        return d.promise();
    }
    d.reject();
    // 此时不会有任何的弹出提示
    $.when( wait() ).done( function() {
	    alert("延迟对象状态被外部修改了！");
	});

或者这样：

    var d = $.Deferred();
    var wait = function( d ) {
        setTimeout( function() {
            d.resolve();
        }, 1000);
	    return d.promise();
    }
    // 此时会立即弹出提示“a”
    $.when( wait() ).done( function(){
        alert("a");
    });
    d.resolve();

上面的两种情况相同，即如果延迟对象是全局的，在调用任务前状态已经改为reject了，所以不会提示内容，第二种情况是，$.when()去执行异步回调，回调会在1s后执行，那么程序继续往下执行代码，状态被改为resolve，所以弹出立马弹出。

### 4.2 安全保护延迟不被修改

安全保护延迟对象不被修改，一个解决方法便是不设全局的延迟对象，只在任务中声明：然后返回该延迟对象的`promise`对象，因为promise对象是不具有操作状态的方法的，所以这样外部就无法修改延迟对象的状态了。

例如：

	// 创建一个全局的延迟对象
    var d = $.Deferred();
    var wait = function( d ) {
        // 创建一个局部的延迟对象
        var d = $.Deferred();
        setTimeout( function() {
            d.resolve();
        }, 1000);
	    return d.promise();
    }
    // 全局延迟对象状态被修改
    d.resolve();
    // 不影响内部的延迟对象，依然是1s后弹出“a”
    $.when( wait() ).done( function(){
        alert("a");
    });


# 五、jQuery.when();

jquery的延迟对象还有一个强大之处在于，你不仅可以给一个延迟对象添加无数个回调，你还可以同时使用多个延迟对象，并把结果给一个回调！利用`jQuery.when()`即可实现这种效果。

### 5.1

在上面的例子中已经用到了`$.when()`方法，该方法不仅可以接受一个延迟对象或者延迟对象的`promise`对象，还可以接受多个延迟对象，并返回一个“宿主”延迟对象，`$.when()`会同时请求多个延迟对象，只有等到所有延迟对象都解决时，才执行done()方法，如果有一个延迟对象reject，则执行fail()方法。

	$.when( $.ajax(), $.ajax() )
	    .done( function() {})
	    .fail( function() {});

### 5.2 传入参数

也可以将任意参数传递给`$.when()`，则会立即执行done()回调。

	$.when( 123 )
		.done( function (){
	        alert("a");
        })
        .fail( function (){
			alert("b");
		});
