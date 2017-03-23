1. 用法:

    ```js
    var a= {}
    Object.defineProperty(a,"b",{
      value:123
    })
    console.log(a.b);//123
    ```
2. 传入参数
第一个参数:目标对象
第二个参数:需要定义的属性或方法的名字。
第三个参数:目标属性所拥有的特性。（descriptor）

3. descriptor的参数数值
    1. value:属性的值(不用多说了)
    2. writable:如果为false，属性的值就不能被重写,只能为只读了，默认false
    3. configurable:总开关，一旦为false，就不能再设置他的（value，writable，configurable）,默认false
    4. enumerable:是否能在for...in循环中遍历出来或在Object.keys中列举出来。默认false
    5. get:
    6. set:

    实例1：configurable

    ```js
    var a= {}
    Object.defineProperty(a,"b",{
      configurable:false  //第一次设置为false，之后三个属性都不能修改了，修改就会报错
    })
    Object.defineProperty(a,"b",{
      configurable:true
    })
    //error: Uncaught TypeError: Cannot redefine property: b
    ```

    实例2：writable

    ```js
    var a = {};
    Object.defineProperty(o, "b", {
        value : 123,
        writable : false });

    console.log(a.b); // 打印 37
    a.b = 25; // 没有错误抛出（在严格模式下会抛出，即使之前已经有相同的值）
    console.log(o.a); // 打印 37， 赋值不起作用。
    ```

    实例3：enumerable
    属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
    ```js
    var a= {}
    Object.defineProperty(a,"b",{
      value:3445,
      enumerable:true
    })
    console.log(Object.keys(a));// 打印["b"]
    //改为false

    var a= {}
    Object.defineProperty(a,"b",{
      value:3445,
      enumerable:false //注意咯这里改了
    })
    console.log(Object.keys(a));// 打印[]
    ```

    实例4：set 和 get
    在 descriptor 中不能 同时 设置访问器 (get 和 set) 和 wriable 或 value，否则会错，就是说想用(get 和 set)，就不能用（wriable 或 value中的任何一个）

    ```js
    var a= {}
    Object.defineProperty(a,"b",{
      set:function(newValue){
        console.log("你要赋值给我,我的新值是"＋newValue)
        },
      get:function(){
        console.log("你取我的值")
        return 2 //注意这里，我硬编码返回2
       }
    })
    a.b =1 //打印 你要赋值给我,我的新值是1
    console.log(a.b)    //打印 你取我的值
                        //打印 2    注意这里，和我的硬编码相同的
    ```

    简单来说，这个 “b” 赋值 或者 取值的时候会分别触发 set 和 get 对应的函数
4.  
