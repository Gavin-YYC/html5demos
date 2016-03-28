# 一、Collection

> Collection是模型的集合，你可以向其中添加多个模型或者移除多个模型。

在实例化集合的时候传递数组进去。

    // 在这里指定model
    var TodoCollection = Backbone.Collection.extend({
      modle: TodoModel
    })
    // 或者是在实例化的时候传递进去model
    var todos = new TodoCollection([model]);
    // 或者这样
    var todos = new TodoCollection({ model: model1 });
    // 在获取传递多个model
    var todos = new TodoCollection([model1, model2, model3]);

# 二、Adding and Removing models

当一个集合已经实例化了，你可以使用add()与remove()方法来增加与删除models。

    // 创建model
    var TodoModel = Backbone.Model.extend({
      defaults: {
        title: 'title of somethings',
        completed: false
      }
    });
    // 创建Collection
    var TodoCollection = Backbone.Collection.extend({
      model: TodoModel
    });
    // 实例化model
    var model1 = new TodoModel({
      title: '111',
      id: 2
    });
    var model2 = new TodoModel({
      title: '222',
      id: 3
    })
    // 实例化Collection并传递进去model
    var todos = new TodoCollection([model1, model2]);
    // 查看Collection中model的数量
    console.log( todos.length );

    // 继续创建model
    var model3 = new TodoModel({
      title: '333',
      id: 3
    });
    // 向集合中添加model
    todos.add( model3 );
    console.log( todos.length );
    // 移除model2
    todos.remove( [model1, model2] );
    console.log( todos.length );

另外需要注意的是，add()方法与remove()方法同样接受当个的model，已经model数组。

同样需要注意的是，`add()`，`remove()`方法除了接受model，还可以接收一个`options`参数对象，如果在该参数对象中传递`{merge: true}`，那么后面添加进来的model如果与已经存在的model属性相同，则会覆盖原来的已经存在的model，而不是被忽略。

我对上面一条内容的理解是：`id`作为一个唯一字段，如果说不添加参数`{merge:true}`的话，默认是不会合并重复内容的，所以会被忽略掉，而如果设置了，则会判断已有的model中是不是已经存在`id`相同的情况，如果有就会覆盖其内容。

# 三、取回model

在Backbone中，每一个模型都有一个id，它是一个model的唯一证明，其形式肯呢个是个数字也可能是个字符串（比如：UUID）。Moedels也有一个`cid`（client id），这是在model创建的时候Backbone自动生成的。无论是id、还是cid，都可以用来从Collection中获取model。

id与cid主要的不同是：cid是由Backbone自动生成的，当你没有设置id的时候这个属性非常有用，比如这个情况：你的模型还没有保存到服务器端或者保存到数据库的时候。

模型的idAttribute属性是从服务器端返回的（比如database中的id）。这个值是可以自定义的，比如你的数据库返回的唯一id是userID，那么你应该在定义model的时候使用userID。

模型的idAttribute属性应该是在模型保存的时候由服务器设置，不必手工设置，除非你有这个必要。

## 3.1 第一种方法：get(id)

`get()`方法只能返回带有`id`的情况，如果model中有id参数，则get(id)即可获取到该模型。

    var todos = new TodoCollection();
    todos.get(2);

## 3.2 第二种方法：get(model.cid)

    var todos = new TodoCollection([model1, model2]);
    newTodo = todos.get( model1.cid );
    console.log( newTodo === model1 ); // true

## 3.4 第三种方法：idAttribute属性

# 四、事件监听

## 4.1 add、remove事件

由于集合是由一系列的模型组成的，我们可以监听集合的`add`以及`remove`事件，即当有模型添加进来或者删除的时候便会触发事件。比如：

    var todos = new TodoCollection();
    todos.on('add', function ( todo ) {
      console.log( '有模型添加进来啦！' + todo );
    });
    todos.on('remove', function ( todo ) {
      console.log( "有模型删除啦！" + todo );
    })

## 4.2 change事件

只要有模型发生改变，便会触发`change`事件。

    var todos = new TodoCollection();
    todos.on('change:title', function ( model ) {
      console.log( '有模型添加进来啦！' + model.get('title') );
    });

## 4.3 事件集合

jquery-style的事件同样也可以使用，这种集合的写法要比分离的写法好看的多。


    myTodo.on({
       'change:title' : titleChanged,
       'change:completed' : stateChanged
    });

## 4.4 once()

Backbone的事件同样支持`once()`方法，该方法会确保回调只执行一次，它和node的`once`以及jquery的`one`相似。这个方法也非常有用，比如：下次发生的时候就触发事件。

# 五、重新设置与激活Collection

## 5.1 set()

之前的adding与removing模型都是在单个进行，有时候我们想立即更新整个集合。 `Collection.set()`方法可以实现。

如果你想把Collection清空，那么只需要执行`Collection.reset()`即可。同时，reset()方法也可以传入model，表示重置为这些model。当然，如果不填入参数的话，只需要执行Collection.reset()即可。需要注意的是，当执行reset()方法的时候并不会触发任何的add、remove、change事件。也可以监听reset事件，当执行reset()方法的时候回触发reset事件。

还有一点需要注意的是：当你监听reset事件的时候，之前的model就会存在回调函数的options参数的previousModels，而options只有这一个熟悉。如下：

    var todos = new TodoCollection();

    todos.on('reset', function ( todos, options ) {
      console.log( options.previousModels );
    })

其中todos是当前的集合。

## 5.2 update()方法

当执行更新方法的时候，不存在的model将会remove，不存在的将会add，如下：

    var theBeatles = new Collection(['john', 'paul', 'george', 'ringo']);
    theBeatles.update(['john', 'paul', 'george', 'pete']);

# 六、underscore的工具方法

## 6.1 forEach()

> 遍历Collection

    var todos = new TodoCollection();

    todos.add([
      { title: '111', completed: true },
      { title: '222', completed: false },
      { title: '333', completed: true },
    ]);

    todos.forEach( function ( model ) {
      console.log( model.get('title') );
    });

## 6.2 sortBy()

> 排序Collection，返回一个排好序的Collection副本

    var sortColl = todos.sortBy( function ( todo ) {
      return todo.get( 'title' ).toLowerCase();
    });
    sortColl.forEach( function ( model ) {
      console.log( model.get( 'title' ) );
    })

## 6.3 map()

> 返回一个新的Collection，一个变化的函数来更新列表的值

## 6.4 min() / max()

> 取回模型中属性的最大或最小的那个

    var minModel = todos.min( function ( model ) {
      return model.id;
    });

    var maxModel = todos.max( function ( model ) {
      return model.id;
    })

    console.log( minModel );
    console.log( maxModel );

## 6.5 pluck()

> 提取一个特殊的属性

    var pluckTest = todos.pluck('title');
    console.log( pluckTest ); // ['111', '222', '333'];

## 6.6 filter()

> 集合过滤

## 6.7 indexOf()

> 根据item，返回其在集合的位置（index）

    console.log( todos.indexOf( model2 ) );

## 6.8 any()

> 确认是否一些值在集合中，如果存在，返回true，不存在，返回false。

      var any = todos.any( function ( model ) {
          return model.id === 1
      });

      // 获取some()
      var some = todos.some( function ( model ) {
          return model.id === 1
      });

      console.log( any );
      console.log( some );

## 6.9 size()

> 返回集合的长度size()，和length结果相同。

    console.log( todos.size() );

## 6.10 isEmpty()

> 查看集合是不是为空

    console.log ( todos.isEmpty() );

## 6.11 groupBy()

>

## 6.12 pick()

## 6.13 omit()

## 6.14 keys()

## 6.15 pairs()

## 6.16 invert()

# 七、链式API

# 查看Collection中model的个数

    var todos = new TodoCollection();
    console.log( todos.length );
