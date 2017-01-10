1. js基本数据类型：boolean,string,number,null,undefined
2. js的内置对象：数据封装类对象：object,Number,Array,String,Boolean
其它对象：Function,Arguments,Math,Date,RegExp,Error
3. js编程规范：
[参考](http://www.ruanyifeng.com/blog/2012/04/javascript_programming_style.html)
    1. 表示区块起首的大括号，不要另起一行。应为js会自动在每一行最后胡添加；
    2. 不要省略区块大括号
    3. 一行只有一条赋值语句
    4. 变量定义放在开头
    5. 避免使用全局变量
    6. 构造函数开头用大写，其余函数用小写
    7. 用严格等，不要用==
4. js原型，原型链，特点；
    每一个对象在新建的时候，内部会初始化一个属性，就是prototype,当访问对象的一个属性的时候，如果该对象中不存在，就会去原型中去寻找，如果还是没有，就回去原型中的原型中寻找。就是原型链。
    instance.constructor === instance
    instance.constructor.prototype == instance.\__proto__;
    其特点在于：原型中存储的都是引用类型，修改一处均会导致所有实例的修改。

5. js有几种类型的值，内存图？
    栈：原始数据类型（undefined,Null,Boolean,Number,String）
    堆：引用数据类型（对象，数组和函数）
    不同：存储位置不同
    原始数据类型：直接存储在栈中，属于频繁使用的数据
    引用：存在堆中，在栈中存储了指针

6. 将字符串转换成数字，parseFloat(),正则表达式
7. 将浮点数的左边每三位添加一个,
    采用正则表达式实现;
    ```js
    function commafy(num){
      return num && num.toString().replace(/(\d)(?=(\d{3})+\.)/g,"$1,");
    }
    ```
8. 如何实现数组的随机排序
9. JS创建对象的方式
    #### 创建对象
    ##### 最简单的方法就是字面量直接创建
    ##### 工厂模式:抽象了创建具体对象的过程。通俗来说就是封装了创建对象的过程。

    ```js
    function creatPerson(name,age,job){
      var o = new Object();
      o.name=name;
      o.age =age;
      o.job =job;
      o.sayName = function(){
        console.log(this.name);
      };
      return o;
    }

    var person1 = createPerson('xiaobo',20,'student');
    var person2 = createPerson('xiaohuan',20,'student');
    ```

    优点：解决了创建多个相似对象的问题
    缺点：没有解决对象识别的问题（无法分辨每隔对象的类型），同时也存在同一个函数的多次创建问题，无法实现函数的复用

    ##### 构造函数模式：使用new + 函数名的方式创建对象

    ```js
    function Person(name,age,job){
      this.name = name;
      this.age  = age;
      this.job  = job;
      this.sayName = function(){
        console.log(this.name);
      }
    }
    var person1 = new Person('xiaobo',20,'student');
    var person2 = new Person('xiaohuan',20,'student');

    console.log(person1.constructor == Person)//true
    console.log(person2.constructor == Person)//true

    console.log(person1 instanceof Person);//true
    console.log(person2 instanceof Person);//true

    console.log(person1.sayName == person2.sayName);//false
    ```

    这个函数和工厂模式的结果完全相同，new+函数名的形式，会执行下列四个过程：
        1. 创建一个新的对象
        2. 将构造函数的作用域赋值给该对象（this指向该对象）
        3. 执行构造函数的代码（为新对象添加属性）
        4. 返回新对象

    同时，新建的对象具有一个constructor属性指向Person。可以使用instanceof方法来判断该对象所属的类别。
    优点：成功解决了对象标识的问题。
    缺点：没有同一实现函数的复用。虽然可以采用全局函数的方式来实现函数的复用，但是这样的话，类就没有封装性可言了。
    ##### 原型模式：将对象的共有属性和方法存储到构造函数的prototype属性中

    ```js
    function Person(){

    }
    Person.prototype.name = 'xiaobo';
    Person.prototype.age = 20;
    Person.prototype.job = 'student';
    Person.prototype.sayName = function()
    {
      console.log(this.name);
    }
    var person1 = new Person();
    person1.sayName();//'xiaobo'
    var person2 = new Person();
    person2.sayName();//'xiaobo'
    console.log(person1.sayName === person2.sayName);//true
    ```

    ###### 原型对象：不论什么时候，只要创建了一个新函数，就会为这个新函数添加一个prototype,prototype.constructor又会指向这个函数。用户自定义构造函数，原型会默认取得construcor这个属性，指向函数本身，其余的属性是用户自定义的。当调用自定义构造函数创建对象时，会有一个指针，指向该构造函数的prototype,从而可以访问prototype中定义的属性。这个指针不能显性访问，在chrome,firefox中提供了__proto__来进行访问。也可以通过Object.getPrototypeOf(person1)进行访问。

    优点：解决了函数共享问题
    缺点：当共享属性值是引用类型的时候，采用Push等方法，会直接更改所有对象中的共享属性值。

    ##### 组合使用原型模式和构造函数模式：最常见的方法，构造函数模式用于定义实例属性，原型模式定义共享的方法和属性，每个实例都会有自己一份对象属性的副本，又能够共享一些属性和方法。

    ```js
    function Person(name,age,job){
      this.name = name;
      this.age = job;
      this.friends = ['xiaobo','xiaohuan']
    }
    Person.prototype = {
      constructor:Person,
      sayName:function(){
        console.log(this.name);
      }
    }
    var person1 = new Person('xiaobo',20,'student');
    var person2 = new Person('xiaohuan',20,'student');

    person1.friends.push('xiaoqiang');
    console.log(person1.friends);
    console.log(person2.friends);
    console.log(person1.friends === person2.friends)
    console.log(person1.sayName === person2.sayName)
    ```

    解决了面向对象编程的所有问题，最常用的模式

    ##### 动态原型模式，寄生构造模式，稳妥构造函数模式

10. JS实现继承的方式
    #### 继承
    面向对象，不免要说到继承，在js中继承主要采用原型链的形式进行，只支持实现继承。不支持接口继承

    ##### 原型链：原型对象等于另一个对象的实例。此时，原型对象中包含指向另一个原型的指针，由此往复，形成一个实例与原型的链条。实现原型链的方法很简单，让原型等于另一个对象的实例即可。

    ```js
    function Supertype(){
      this.propertype = true;
    }
    Supertype.prototype.getsupervalue = function(){
      console.log(this.propertype)
    }

    function Subtype(){
      this.propertype = false;
    }
    Subtype.prototype = new Supertype();
    Subtype.prototype.getsubvalue = function(){
      console.log(this.propertype);
    }
    var instance = new Subtype();
    instance.getsupervalue();
    ```

    事实上，所有的函数的prototype还具有一个默认的[[proto]]指向object,所以说，js中一切都继承自object对象

    ##### 构造函数方法进行继承：在子类中采取call或者apply的方式执行父类的构造方法即可实现继承，可以避免对象的共享，但是存在方法不能共享的问题。

    ##### 组合继承：其实就是原型链和构造函数方法结合，充分利用两者的优点。是最常见的实现继承的手段

    ```js
    function supertype(name){
      this.name=name;
      this.color=[1,2,3,4];
    }
    supertype.prototype.sayname=function(){
      console.log(this.name);
    }
    function subtype(name,age){
      supertype.call(this,name);
      this.age = age;
    }
    subtype.prototype = new supertype();
    subtype.prototype.sayage = function(){
      console.log(this.age);
    }

    var ins1 = new subtype('xiaobo',20);
    var ins2 = new subtype('xiaohuan',21);
    ins1.color.push(5);
    console.log(ins1.color);
    console.log(ins2.color);
    console.log(ins1.sayage===ins2.sayage);
    console.log(ins1.sayname === ins2.sayname);
    ```

11. js中作用域链的问题？
外部函数无法访问内部函数的细节，但是内部函数可以查看上层的函数细节，直至全局细节。当需要在局部函数中使用一个属性或者方法的时候，如果当前作用域没有，可以去上层函数的作用域查找，直至全局函数。这种组织形式就是作用域链。
12. this的理解？
    1. this始终指向函数的直接调用者
    2. 在事件中，this指向触发这个事件的对象
13. eval的作用？
    1. 将字符串转换成js代码进行执行，比较消耗性能，需要一次解析，一次执行
    2. 可以将JSON转换成对象， var obj = eval('('+str+')');
14. window 和document？
window是指浏览器当前打开的窗口，document是HTML文档对象的一个只读引用，window对象的一个属性
15. null undefined的区别？
    1. null表示一个对象是没有值的值，undefined是一个变量声明了但是没有初始化。
    2. undefined不是一个有效的JSON值，null是。typeof undefined 是undefined,typeof null是Object
    3. js将未被赋值的变量初始化为undefined,Null由程序员指定，js不会主动指定某个变量的值为Null.
    4. null == undefined // true null === undefined // false
16. 写一个通用的事件侦听器函数？
    1. 事件监听函数主要是为了处理不同浏览器下事件绑定，事件解绑，停止传播，阻止默认行为等事件。
    2. IE和其它浏览器中关于事件监听的方法不太相同，所以需要一个通用的事件监听函数来针对不同的浏览器执行不同的操作
17. [1,2,3].map(parseInt)的结果[1,NaN,NaN]
    map的参数有3个，1个是item,1个是index,最后一个是数组本身，parseInt接收两个参数,value以及base,
    所以上述函数可以写为parseInt(1,0),parseInt(2,1),parseInt(3,2)。2和3都超过了1进制和2进制的范围，所以输出not a number
18. 事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
    事件是文档和浏览器窗口发生的一些特定的交互瞬间。
    IE只支持事件冒泡，火狐支持事件捕获和事件冒泡。
    阻止冒泡的方法：
    ```js
    stopPropagation:function(event){
      if(event.stopPropagation){
        event.stopPropagation();
      }else {
        event.cancelBubble = true;
      }
    }
    ```
19. 什么是闭包（closure），为什么要用它？
    闭包是指有权访问另一个函数的作用域中变量的函数，创建闭包最常见的方法就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用域链，将函数内部的变量和方法传递到外部。
20. use strict的区别是什么？**有待补充**
21. 判断对象的类？
    1. typeof 可以判断是基本类型还是object
    2. instanceof
    3. instance.constructor
    4. Object.prototype.toString(instance)
22. new 操作符的具体作用？
    1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
    2. 属性和方法被加入到 this 引用的对象中。
    3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。
    var obj  = {};
    obj.\__proto__ = Base.prototype;
    Base.call(obj);
    return obj;
23. 用原生的js实现过什么功能？**有待补充**
24. js中有一个函数在执行的时候不会查找原型，是hasOwnProperty,用来判断一个对象的实例中是否有某个属性，所以不会访问原型链
25. JSON是什么？
javascript object notation是一个轻量级的数据交换格式。基于js的一个子集，数据格式简单，易于读写，占用带宽小。
json字符串转换为JSON对象：
var obj = eval('('+str+')');
var obj = JSON.parse(str);
var obj = jQuery.parseJSON(str); **属于jquery**
json对象转换为json字符串：
var last = JSON.stringify(obj);

26. 其实是对页面中的每一个元素加上一个随机颜色的outline
能解释一下这段代码的意思吗？

```js
[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})
```

27. js延迟加载的方法？
    1. defer标签，延迟加载脚本，在script中加入defer标签，代码会在dom解析结束后下载执行，对inline不起作用,不支持document.write;
    2. async标签，异步加载脚本，会遇到script后异步下载代码，不会停止对DOM的解析，在script下载完之后，不论代码加载完没，都会立即执行script代码，对inline不起作用,有可能会出错。不支持document.write()
    3. 动态创建DOM方式：onload之后新建一个script，将src指向目标js文件，实现js的延迟加载，比较常用。
    4. ajax获取js代码，然后eval执行
28. Ajax 是什么? 如何创建一个Ajax？
    ajax全称是 Asynchronous javascript and xml.异步传输js和xml
    异步就是指在向服务器发送请求的时候，不必等待结果，可以做其它事情，等有了结果会根据设定进行后续操作。页面不会整体刷新，提高用户体验。见js_ajax
29. Ajax解决浏览器缓存问题？
    1. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

    2. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

    3. 在URL后面加上一个随机数： "fresh=" + Math.random();。

    4. 在URL后面加上时间搓："nowtime=" + new Date().getTime();。

    5. 如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
30. 同步和异步的区别?**有待解决**
31. 如何解决跨域问题?**有待解决**
32. 页面编码和被请求的资源编码如果不一致如何处理？**有待解决**
33. 模块化开发怎么做？
    es5主要通过立即执行函数来实现。es6有import export
    服务器端可以直接使用require。因为node基于commonjs,浏览器端不能直接使用，且也不适合使用commonjs,更适合AMD,异步加载，可以通过requirejs，define实现
34. AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？
    1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理
    方式不同）。CMD 推崇 as lazy as possible.
    2. CMD 推崇依赖就近，AMD 推崇依赖前置。
35. requireJS的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何 缓存的？）**有待仔细研究**
36. JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？**有待研究**
37. 谈一谈你对ECMAScript6的了解？**有待补充**
38. ECMAScript6 怎么写class么，为什么会出现class这种东西?**有待补充**
39. 异步加载JS的方式有哪些？
    1. defer :只支持IE
    2. async：异步加载js，加载完毕立即执行，如果操作dom有可能会出错（dom还没有构建完毕）
    3. 创建script，插入到dom中，onload加载完毕指定src
40. documen.write和 innerHTML的区别？
    1.document.write只能重绘整个页面
    2.innerHTML可以重绘页面的一部分
41. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?**有待阅读高级程序设计**
42. .call() 和 .apply() 的区别？
    两者都是用来解决一个方法用在别的对象上的问题，可以修改函数执行时this的指向，不同的是该方法的参数传递问题，call中参数以a,b,c的形式，apply中参数需要以数组的形式进行传递。
43. 数组和对象有哪些原生方法，列举一下？**比较多，有待补充**
44. JS 怎么实现一个类。怎么实例化这个类,参见对象的构建与继承。
45. JavaScript中的作用域与变量声明提升？
    js的作用域指的是内层的函数可以访问外层函数的变量，当在内层函数访问一个变量的时候，如果不存在，就回去上一层查找，再去上一层，形成了作用域链。
    变量名提升：
    包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。
    函数声明的优先级大于变量声明的优先级
    函数表达式不会被提升
47. 什么是前端路由？后端路由的区别？如何自己实现一个前端路由?
    前端路由，即由前端来维护一个路由规则。url的改变直接在前端进行处理，不会传回给服务器端，速度要快很多。且不需要整个页面进行刷新。
    后端路由是用户访问一个url，服务器端渲染完毕把整个页面传回客户端。
    如何实现？
    1. h5的history  **没有解决**
    2. location.hash以及hashchange事件