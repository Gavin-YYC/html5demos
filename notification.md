# Web Notifications

## 1、安全性

要呈现通知需要获得用户的许可。

## 2、模型

1、每个模型都有标题、方向、语言和来源

2、每个通知都要有与之相关的内容（body）、标签（tag）、图标地址（icon URL）和图标（icon image）。

### 2.1 direction

### 2.2 language

### 2.3 permission

如果用户准许，就可以使用notification，其权限permission可以是如下三个字符串：

* `default`: 和`denied`一样，只用户没有做出选择。
* `denied`: 指用户拒绝接收通知
* `granted`: 指用户同意展示通知

### 2.4 notification list


### 2.5 展示通知

步骤：

## 方法

| 事件处理器  | 事件类型 |
|-----------|---------|
| onclick   | click   |
| onshow    | show    |
| onerror   | error   |
| onclose   | close   |


## 一个通知构造的过程

Notification(title, options);

1、实例化Notification通知对象

2、设置通知对象的标题

3、根据options中的`dir`设置通知对象的`direction`

4、如果选项的`lang`存在，则设置`language`，否则设置为诶空

5、根据当前的源设置通知的来源

6、如果options中的`body`存在，设置通知的`body`

7、如果options中的`tag`存在，设置通知的`tag`

8、如果options中的`icon`存在，使用`API base URL`解析icon

9、返回通知，继续异步执行其他步骤

10、执行通知的展示步骤

## 展示通知的步骤

1、如果通知源的权限不是`granted`，则取消任何的操作，执行error事件，终止其他步骤。

2、
