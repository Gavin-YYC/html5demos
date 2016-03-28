# Backbone中的Model验证

## 一、model验证

### 1、validate方法

在向model添加数据的时候可以对数据进行验证，backbone提供了验证方法：`validate`。

`validate`方法在backbone中并没有具体实现，需要自己手动实现覆盖该方法，该方法接收两个参数，第一个是传入的参数`attrs`，第二个是配置参数`options`。

下面是在设置set的时候进行属性验证：

	var Model = Backbone.Model.extend({
		defaults: {
			name: "yangyoucun",
			age: 25
		},
		validate: function( attrs, options ) {
			if ( attrs.name === '' ){
				alert( "不能为空！" );
			}
		}
	})

	var model = new Model();
	model.set({
		name: ''
	}, {
		validate: true
	})


如果是执行模型的`save`方法，则会自动触发`valadate`验证，此时可以不用传入参数，而在`set`的时候是不会进行验证的，除非在`set`的时候设置选项参数：`validate: true`。

### 2、invalid事件

当模型验证失败时触发的事件，该方法需要和`validate`方法一起使用，`validate`方法用于返回错误信息，监听`invalid`事件监听后，会捕捉到该信息：

    var Model = Backbone.Model.extend({
        defaults: {
            name: 'yangyoucun',
            age: 25
        },
        initialize: function () {
            this.on( 'invalid', function( model, error){
              console.log( error );
            })      
        },
        validate: function ( attrs, options ) {
            if ( attrs.name === '' ){
      				return "不能为空！";
      			}
        }
    });
    var model = new Model();
    model.set({
        name: ''
    }, {
        validate: true
    });

需要将validate中的error信息返回出去，这样被`invalid`事件捕捉到，然后在执行相应的规则即可。

也可以在model外进行model的监听，以及在collection中进行监听，使用方法相同，比如初始化后再进行验证监听：

    var Model = Backbone.Model.extend({
      defaults: {
          name: 'yangyoucun',
          age: 25
      },
      validate: function ( attrs, options ) {
          if ( attrs.name === '' ){
            return "不能为空！";
          }
      }
    });
    var model = new Model();
    model.on( 'invalid', function ( model, error ) {
        console.log( error )
    })

> 猜想：当validate方法返回验证失败的信息后，该信息保存在了模型的validationError属性上，当监听invalid事件时，实际上是在判断监听model的change:validationError，所以当validationError有改变时，invalid事件监听成功，把上下文和validationError的值传递给回调函数。

### 3、model.isValid()方法

模型验证的状态，没有验证和验证成功都返回true，验证失败返回false，就是model的`isValid()`方法，也可以传入一个`options`参数。

这个方法有点迷糊（后来验证的时候出现了问题，不一定正确）:

* 1、如果模型中不存在validate方法，则返回true，意思就是你练验证规则都没有，还验证个毛线！model还没有验证，所以就是true。
* 2、如果存在validate方法，则把attrs和options传进去，如果验证成功，就返回true。
* 3、如果验证，则触发`invalid`事件，并设置`validationError`，返回false。


## 二、向model中添加数据

### 1、初始化时传入数据

向模型中添加数据的方式主要是调用model的set、get方法，另外，在初始化模型的时候也可以传入数据，比如：

    var Model = Backbone.Model.extend({
        defaults: {
            name: 'yangyoucun',
            age: 25
        }
    })
    // 初始化模型，并传入数据
    var model = new Model({
        job: 'fe'
    });
    // 输入初始化的时候传入的数据
    console.log( model.get("job") ) // fe

### 2、通过set方法传入数据

    var Model = Backbone.Model.extend({
        defaults: {
            name: 'yangyoucun',
            age: 25
        }
    })
    // 并传入数据
    var model = new Model();
    model.set({
        job: 'fe'
    });
    // 输入初始化的时候传入的数据
    console.log( model.get("job") ) // fe


![pic](http://7mj4a6.com1.z0.glb.clouddn.com/backbone-save.png)
