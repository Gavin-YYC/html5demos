# Backbone：了解model的set与事件触发

之前认为对象的直接对比一直都是`false`，比如：

```javascript
// Object
{} == {}  		// false
{} === {} 		// false
// Array
[] == []	 	// false
[] === [] 		// false
// Function 
var a = function (){};
var b = function (){};
a == b 			// false
a === b 		//false
// RegExp
/a/ == /a/ 		// false
/a/ === /a/ 	// false
```

于是，在使用Backbone的时候，也理所当然的认为当监听`change`事件的时候，只要model中的值发生变化，就会触发该事件，并执行相应的方法，因为在测试过程中没有发现有重复性内容，所以也就没有发现该想法存在的问题。

直到出现这种情况，在执行`Model`的`set`方法的时候，设置前和设置后，其对象key与value与上次设置的是相同的，此时不会触发change事件，而对于此时页面需要刷新时，将变得无能为力。

下面就看看Backbone是如何在`set`的时候，触发`change`事件的，这里先贴下set的相关代码：

```javascript
// 设置模型的attributes属性，同时触发“change”事件. 
// 这是操作模型的最直接的方法，更新数据的时候，如果谁监听了该数据的变化，将会触发它
set: function(key, val, options) {
 // 如果没有内容传入，直接return
 if (key == null) return this;

 // 可以设置两种形式，一种是：(key, value)
 // 另一种是对象的形式：{ key: value}
 // 不管哪一种，attrs都保存了为第二种形式
 var attrs;
 if (typeof key === 'object') {
   attrs = key;
   options = val;
 } else {
   (attrs = {})[key] = val;
 }

 options || (options = {});

 // 进行参数验证
 // 可以在option中设置：{validate: false}可跳过验证
 // 验证失败，把消息设置在validationError上
 // 同时触发“invalid”事件，错误消息返回
 if (!this._validate(attrs, options)) return false;

 // Extract attributes and options.
 var unset      = options.unset;
 var silent     = options.silent;
 var changes    = [];	
 var changing   = this._changing;
 this._changing = true;
	
  // 
 if (!changing) {
   this._previousAttributes = _.clone(this.attributes);
   this.changed = {};
 }

 var current = this.attributes;
 var changed = this.changed;
 var prev    = this._previousAttributes;

 // 深度遍历，记录哪些属性发生变化
 // _.isEqual() 是对两个对象进行深度比较
 for (var attr in attrs) {
   val = attrs[attr];
   if (!_.isEqual(current[attr], val)) changes.push(attr);
   // 如果与上次的值相比没有变化，则在changed中删掉它
   if (!_.isEqual(prev[attr], val)) {
     changed[attr] = val;
   } else {
     delete changed[attr];
   }
   unset ? delete current[attr] : current[attr] = val;
 }

 // 每一次set都重新更新id值
 if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);


 // 事件触发
 // 如果传入{silent: true}，则不会触发任何事件
 if (!silent) {
   if (changes.length) this._pending = options;
   for (var i = 0; i < changes.length; i++) {
     this.trigger('change:' + changes[i], this, current[changes[i]], options);
   }
 }

 // Changes can be recursively nested within `"change"` events.
 if (changing) return this;
 if (!silent) {
   while (this._pending) {
     options = this._pending;
     this._pending = false;
     this.trigger('change', this, options);
   }
 }
 this._pending = false;
 this._changing = false;
 return this;
}
```

这里比较重要的是`underscore`的`_.isEqual()`方法，该方法用于判断两个对象是否相等，如果不相等，就把改变的属性对于的key，存到“changes”数组中。

不过，在这之前需要先了解一下`Backbone`中保存值时的三个状态：

* current：即通过this.attributes来获取，未设置值时当前的数据
* previous：通过this.previousAttributes来获取，返回上一个模型的副本，一般用不到，不过回滚的时候回用到
* now：将要set的值，是在执行model的set方法时传入的值

很显然，需要将`now`中的值和`current`中的值进行对比，通过的`_.isEqual()`方法，下面看看该方法的具体实现（代码进行了简化）：


```javascript
var eq = function(a, b, aStack, bStack) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // null == undefined为true，但是这两个并不相同，需要判断
  if (a == null || b == null) return a === b;
  // 如果是underscore对象，先解压出来
  if (a instanceof _) a = a._wrapped;
  if (b instanceof _) b = b._wrapped;
  // 比较其数据类型，两种数据类型不同，返回false
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
  	// 如果是字符串、数字、正则、日期、布尔的比较
    case '[object RegExp]':
    // 正则表达式转化成字符串进行比较：'' + /a/i === '/a/i'
    case '[object String]':
      return '' + a === '' + b;
    case '[object Number]':
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    // 对于日期和布尔，转化成数字进行比较
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  
  // 递归比较对象和数组
  // 比较数组
  if (areArrays) {
    length = a.length;
    if (length !== b.length) return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  // 比较对象
  } else {
    // 对象的深度比较
    var keys = _.keys(a), key;
    length = keys.length;
    // 确保比较前，两个对象包含相同的属性数量
    // 如果不相同，则不不满足比较规则，返回false
    if (_.keys(b).length !== length) return false;
    while (length--) {
      // 比较每一个属性值
      key = keys[length];
      // 规则：b有相同的属性，并且两个对象的该属性值相同，否则false
      if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  return true;
};
```	

重点的代码是最后的对象判断，先获取a，b中的key，组成数组，比较数组的长度，长度不相等，肯定对象不相等。

如果长度相等，然后比较属性值，两个对象具有相同的属性并且属性值也一样，则是相等的，否则，不相等。

可见，`Backbone`中进行比较的还是属性值，而不是进行的简单的对象判断。


