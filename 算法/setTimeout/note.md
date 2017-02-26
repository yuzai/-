## 参考文章
1. [setTimeout好面试题](https://zhuanlan.zhihu.com/p/25407758)
2. [你所不知道的setTimeout](http://www.jeffjade.com/2016/01/10/2016-01-10-javacript-setTimeout/)

## 关键
setTimeout和setInterval的运行机制是，将指定的代码移出本次执行，等到下一轮Event Loop(个人认为就是当前的脚本都执行完了)时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮Event Loop时重新判断。这意味着，setTimeout指定的代码，必须等到本次执行的所有代码都执行完，才会执行。

## 易错的this

```js
var name = 'xiaohuan';
var foo = {
  name:'xiaobo',
  sayname:function(){
    console.log(this.name)
  },
}
setTimeout(foo.sayname,1000);//浏览器:xiaohuan,node:undefined
```

上述代码其实很容易出错，因为foo.sayname传递的是函数本身，this会在该函数执行的时候进行绑定，从而指向的是window或者global。解决方法也很简单，将foo.sayname放入一个匿名函数即可。如下:

```js
var name = 'xiaohuan';
var foo = {
  name:'xiaobo',
  sayname:function(){
    console.log(this.name)
  },
}
setTimeout(function(){
      foo.sayname();
  },1000);
```
## delay为0，表示什么？

```js
setTimeout(function(){
  console.log(i)
});
for(var  i=0;i<5;i++){
}
```

上面代码输出5，可以证明，当延时参数不设置或者设置为0的时候，等待当前代码执行完毕，最后执行setTimeout中的函数

再举一个例子：

```js
for(var i=0;i<5;i++){
  setTimeout((function(i){
    function(){
       console.log(i);
    }
  })(i),i*1000);
}
```

在理解了之前delay=0的情况之后看这段代码，第一次执行的时候应该是setTimeout(function(){console.log(i)}),0);所以第一次执行的代码应该是在for循环结束之后0s执行。而第二次应该是setTimeout(function(){console.log(i)}),1000);所以应该是代码执行完毕之后1s延时执行。所以是刚开始输出1个5，然后间隔1s输出4个5.
