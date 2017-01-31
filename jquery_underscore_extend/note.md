### 摘要
js的对象都是引用类型，所以直接对对象赋值之后的变量进行属性的修改，依然会影响到原来的对象。这在很多时候不是我们想要的效果。要实现对象的赋值，可以自己编写代码实现浅拷贝，深拷贝，或者借助underscore以及jQuery等工具的现成方法。
本笔记主要记录笔者在学习深浅拷贝的一些过程，主要包括：
1. 自己实现简单的深浅拷贝
2. 研究jQuery的实现手段(jQuery虽然不怎么用了，但是很多说人看jQuery的源码始终能够学到很多的编程思想)

### 自行实现深浅拷贝
所谓深浅拷贝只是指是否对对象中的属性值为引用类型的属性进行备份。换句话说，浅拷贝任何嵌套的对象或数组都通过引用拷贝，不会复制。而深拷贝恰恰相反。

```js
var person = {
  name:'xiaobo',
  age:24,
  //测试属性值为数组
  city:['上海','北京','运城',['南京','西安','北京']],
  //测试属性值为对象
  wife:{
    name:'xiaohuan',
    age:24
  }
};
//浅拷贝
function extendl(obj){
  var newobj = {};
  for(var key in obj){
    //直接对属性值进行拷贝，属性值为引用类型的修改会影响原来的属性值
    newobj[key] = obj[key];
  };
  return newobj;
};
//深拷贝
function deepextend(obj){
  //由于存在属性值为Array的情况，新建对象为Array,Array的属性就是0,1,2,3
  var newobj = obj instanceof Array?[]:{};
  for(var key in obj){
    if(typeof obj[key] === 'object'){
      newobj[key] = deepextend(obj[key]);//递归解决引用类型的深拷贝
    }else {
      newobj[key] = obj[key];
    }
  }
  return newobj;
}
var newperson = extendl(person);
var newperson2 = deepextend(person);
console.log('原对象');
console.log(person);
newperson.name = 'maxiaobo';
newperson.city.push('西安');//对引用类型值的修改，会对原对象进行修改(如果是赋值，不属于修改，不会影响原对象)
newperson.city[3].push('杭州');
newperson.wife.name = 'tanghuan';
// newperson.city = ['上海','北京','运城','西安']
newperson2.name = 'maxiaobo2';
newperson2.city.push('西安2');
newperson2.city[3].push('杭州2');
newperson2.wife.name = 'tanghuan2';
console.log('浅拷贝');
console.log(newperson);
console.log('深拷贝');
console.log(newperson2);
console.log('对原对象的影响');
console.log(person);
```

### underscore中拷贝的源码分析
underscore.js提供了一系列常见函数的集合，可以很方便的进行很多操作，此处主要讨论其clone以及extend方法。
下面是underscore中关于这两种实现方法所牵扯到的代码。

```js
  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };
```
