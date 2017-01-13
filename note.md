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
    缺点：父类的引用实例会被所有对象共享。不能向子类传递参数  
    ##### 构造函数方法进行继承：在子类中采取call或者apply的方式执行父类的构造方法即可实现继承，可以避免对象的共享，但是存在方法不能共享的问题。
    缺点：实例并不是父类的实例，只是子类的实例
         只能继承父类的实例属性和方法，不能继承原型属性/方法
         无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
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

    实例继承：
    不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
    缺点：
      实例是父类的实例，不是子类的实例
      不支持多继承

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
20. use strict的区别是什么？**有待补充**[参考](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)
    1. 严格模式的用法
        整个脚本：放在脚本第一行即可
        整个函数：放在函数第一行，整个函数以严格模式运行
        在多文件合并的时候，可以把每个文件的js用立即执行函数包装起来，在开头加上"use strict";即可保证所有文件都在严格模式下运行
    2. 语法和行为改变
       1. 全局变量显示声明。在正常模式中，如果一个变量没有赋值就声明，默认是全局变量。严格模式下，变量未声明就使用会报错。
       2. 静态绑定。原本js支持一种动态绑定的手段，就是某些属性和方法到底属于哪一个对象，不是在编译的时候确定，而是在运行的时候确定。严格模式下：属性和方法属于哪一个对象，在编译阶段就确定。
           1. 禁用with.
           2. 创建eval作用域。原本eval的作用域取决于自身。严格模式下，eval本身就是一个作用域。他生成的变量只在内部。但是可以访问到外部原本能够访问到的变量
       3. 安全措施
           1. 禁止this指向全局对象，this指向全局对象时，应该为undefined,使用构造函数不加new，this.a会报错，因为this指向undefined
           2. 禁止函数内部使用函数名.caller和函数名.Arguments
       4. 禁止删除变量，只有configurable为true的对象属性，才能被删除。
       5. 显式报错。
           对只读对象进行赋值，会显式报错
           严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。
           严格模式下，对禁止扩展的对象添加新属性，会报错。
           严格模式下，删除一个不可删除的属性，会报错。
       6. 重名错误
           1. 对象不能有重名的属性  正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于
              语法错误。
           2. 函数不能有重名的参数正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误
              。
       7.  禁止八进制表示法  正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示
           法，整数第一位为0，将报错。
       8.  arguments对象的限制
           （1）不允许对arguments赋值
           （2）arguments不再追踪参数的变化
           （3）禁止使用arguments.callee
       9. 函数必须声明在顶层  不允许在非函数的代码块内声明函数。
       10. implements, interface, let, package, private, protected, public, static, yield。使用这些词作为变量名将会报错。
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
    4. ajax获取js代码，然后eval执行或者动态加载
28. Ajax 是什么? 如何创建一个Ajax？
    ajax全称是 Asynchronous javascript and xml.异步传输js和xml
    异步就是指在向服务器发送请求的时候，不必等待结果，可以做其它事情，等有了结果会根据设定进行后续操作。页面不会整体刷新，提高用户体验。见js_ajax
29. Ajax解决浏览器缓存问题？
    1. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

    2. 在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

    3. 在URL后面加上一个随机数： "fresh=" + Math.random();。

    4. 在URL后面加上时间搓："nowtime=" + new Date().getTime();。

    5. 如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
30. 同步和异步的区别?**有待仔细研究**
    同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.
    同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作
    异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。
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
46. 如何编写高性能的Javascript？**有待研究**
47. 那些操作会造成内存泄漏？**有待研究**
    内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
    垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

    setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
    闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
48. jquery相关。。**有待研究**
    1. JQuery的源码看过吗？能不能简单概况一下它的实现原理？
    2. jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
    3. jquery中如何将数组转化为json字符串，然后再转化回来？
    4. jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
    5. jquery.extend 与 jquery.fn.extend的区别？
    7. jQuery 的队列是如何实现的？队列可以用在哪些地方？
    8. 谈一下Jquery中的bind(),live(),delegate(),on()的区别？
    9. JQuery一个对象可以同时绑定多个事件，这是如何实现的？
    10. 是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？
    11. jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）
    12. 针对 jQuery性能的优化方法？
    13. Jquery与jQuery UI 有啥区别？
    14. jquery 中如何将数组转化为json字符串，然后再转化回来？
    15. jQuery和Zepto的区别？各自的使用场景？
    16. Zepto的点透问题如何解决？
    17. jQueryUI如何自定义组件?
    18. jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?
    19. JQuery一个对象可以同时绑定多个事件，这是如何实现的？
      多个事件同一个函数：
      $("div").on("click mouseover", function(){});
      多个事件不同函数
      $("div").on({
          click: function(){},
          mouseover: function(){}
      });
49. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？
    和前端路由一个道理，采用前端路由技术实现。
50. 什么是前端路由？后端路由的区别？如何自己实现一个前端路由?
    前端路由，即由前端来维护一个路由规则。url的改变直接在前端进行处理，不会传回给服务器端，速度要快很多。且不需要整个页面进行刷新。
    后端路由是用户访问一个url，服务器端渲染完毕把整个页面传回客户端。
    如何实现？
    1. h5的history  **没有解决**
    2. location.hash以及hashchange事件
51. 如何判断当前脚本运行在浏览器还是node环境中？（阿里）
    this === window? 'window':'node'
52. 移动端最小触控区域是多大？
    移动屏幕的分辨率。480*800，表示手机由480列，800行组成。
    像素密度：1英寸（2.54cm）长度上排列的像素点的数量
    最小保证7mm*7mm,最好9*9mm
    44px*44px
53. 把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
    并没有区别，都是最后解析他们。实际上，浏览器会把放在</body>之后的<script>放到</body>之前。放在之后是错误的，但是浏览器会自动修正错误。
54. 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？
    click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。
    解决方案：
    1. 禁用缩放，在head中加入user-scalable禁用缩放<meta name="viewport" content="width=device-width, user-scalable=no">
    2. fastclick插件
55. 知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?
    **有待整理**
56. Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？
    1. collections:Array,Object.
      提供的方法：map,max,min,filter,shuffle,every,some,groupBy,sample等方法，比较方便的有 **shuffle,sample,groupBy**
      当操作数是对象的时候，有些方法只针对属性值，不针对键值
    2. Arrays:
      提供的方法:
      1. first/last，
      2. flatten（变成1维数组）
      3. zip/unzip():多个数组合并/解除合并
      4. \_.object(a,b):数组object,a是key,b是value
      5. \_.range(a,b[,c]):a-(b-1)步长为c的数组
      6. \_.isEqual(a,b):数组中有对象元素会进行深度比较（与键值的顺序无关）。
    3. Functions:
      1. bind. es5已经有了
      2. partial，偏函数，函数缺少值用_替换，简化函数的书写
      3. memoize，缓存函数计算出来的数值，减少计算事件
      4. once,函数只能执行一次
      5. delay，类似setTimeout,参数传递比较方便。
    4. Objects:
      1. keys/allKeys
      2. values,不包括原型
      3. mapObject
      4. invert,键值和属性值反转
      5. extend,extendOwn,几个对象进行合并，键值相同取最后一个
      6. clone，复制对象，浅复制。新对象中 *引用类型* 的数据的修改会影响原对象的数据
      7. isEqual：比较对象的键值和属性值是否相同，与键值的顺序无关。
    5. Utility
       Utility部分比较有用的是生成随机数和生成ID，还包括增加自定义函数的mixin，转义html的escape，以及一个简单的html模板函数。
       1. random(a,b):产生从a-b的随机整数，[a,b]
       2. uniqueId():产生独一无二的Id
       3. mixin:可以自定义函数hello()，\_.hello就可以执行
       4. escape,unescape把字符串转义成html，主要是<>等关键字的转义
    6. chainning,
       \_.函数的链式调用，想要使用clone,再map。可以采用chain实现
       \_.chain(obj).clone().map(function(value){return value;}).value();
57. nodejs适用场景？
    优点：高并发  适合I/O密集型应用
    缺点：
    1. 不适合CPU密集型应用；CPU密集型应用给Node带来的挑战主要是：由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起；
    解决方案：分解大型运算任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起；
    2. 只支持单核CPU，不能充分利用CPU
    3. 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃
    原因：单进程，单线程
    解决方案：（1）Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；
    （2）开多个进程监听同一个端口，使用cluster模块；
    4. 开源组件库质量参差不齐，更新快，向下不兼容
    5. Debug不方便，错误没有stack trace
    适合NodeJS的场景
    1. RESTful API
    这是NodeJS最理想的应用场景，可以处理数万条连接，本身没有太多的逻辑，只需要请求API，组织数据进行返回即可。它本质上只是从某个数据库中查找一些值并将它们组成一个响应。由于响应是少量文本，入站请求也是少量的文本，因此流量不高，一台机器甚至也可以处理最繁忙的公司的API需求。
    2. 统一Web应用的UI层
    目前MVC的架构，在某种意义上来说，Web开发有两个UI层，一个是在浏览器里面我们最终看到的，另一个在server端，负责生成和拼接页面。
    不讨论这种架构是好是坏，但是有另外一种实践，面向服务的架构，更好的做前后端的依赖分离。如果所有的关键业务逻辑都封装成REST调用，就意味着在上层只需要考虑如何用这些REST接口构建具体的应用。那些后端程序员们根本不操心具体数据是如何从一个页面传递到另一个页面的，他们也不用管用户数据更新是通过Ajax异步获取的还是通过刷新页面。
    3. 大量Ajax请求的应用
    例如个性化应用，每个用户看到的页面都不一样，缓存失效，需要在页面加载的时候发起Ajax请求，NodeJS能响应大量的并发请求。　　总而言之，NodeJS适合运用在高并发、I/O密集、少量业务逻辑的场景。
58. (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?
    **nodejs相关**
59.  解释一下 Backbone 的 MVC 实现方式？
    **MVC相关应该不是重点**
60. 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?
    webkit：Chrome,Safari浏览器内核。
61. 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?
    **前端测试**
62. 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?
    **前端模板引擎**
    简述一下 Handlebars 的基本用法？
    简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？
63. 检测浏览器版本版本有哪些方式？
    主要是通过navigator.userAgent进行检测
64. What is a Polyfill?
    polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
    例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
    所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
    一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。
65. 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？
    比如： html5shiv、Geolocation、Placeholder **事实上，我没有**
66. 给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？
    两次，先执行捕获，再执行冒泡
67. 使用JS实现获取文件扩展名？
      (function(filename){
        console.log( filename.slice(filename.lastIndexOf('.')===-1?filename.length:filename.lastIndexOf('.')+1));
      })('.index')
