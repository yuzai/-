1. 和大多数浏览器不同，Chrome 浏览器的每个标签页都分别对应一个呈现引擎实例。每个标签页都是一个独立的进程。

## js
[异步脚本载入提高页面性能](http://harttle.com/2016/05/18/async-javascript-loading.html)

1. 脚本载入暂停dom解析
2. 把脚本都放在<body>尾部。 这时页面可以被显示出来了，但是在脚本载入前，DOMContentLoaded事件仍然不会触发。
3. 异步加载脚本的方式来阻止浏览器显示忙，setTimeout未指定第二个参数（延迟时间），会立即执行第一个参数传入的函数。 但是JavaScript引擎会将该函数插入到执行队列的末尾。 这意味着正在进行的DOM渲染过程完全结束后（此时浏览器忙提示当然会消失），才会调用上述函数。
4.

## css
1. 在多数浏览器中DOMContentLoaded事件的触发会考虑到外部样式文件（CSS）的载入， 以及在HTML中脚本标签和样式标签的相对位置。 如果脚本位于样式之后，浏览器通常会认为该脚本依赖于样式的渲染结果， 也就更倾向于延迟脚本的执行（直到样式渲染结束）。
2. DOMContentLoaded是一个纯DOM事件，与样式表无关。 与此同时，HTML5要求：
脚本执行前，出现在当前<script>之前的<link rel="stylesheet">必须完全载入。使用defer async可以避免这样，不需要等待style下载完毕就可以执行。脚本执行会阻塞DOM解析。
这样的话，假如脚本和样式一起放在HTML<head>中， DOM解析到<script>标签时会阻塞DOM解析，开始如下操作：
获取当前<script>的脚本文件；
获取并载入前面的所有<link rel="stylesheet">。
执行当前脚本文件。


## 总结
1. js的下载以及执行，都会阻塞DOM的解析
2. css的下载不会阻塞DOM解析，但是如果在其下载完之前遇到了script，（不带有async和defer），会在css下载完之后执行脚本文件，会造成阻塞dom阻塞
3. css下载完之前，即便DOMContentLoaded已经ok，还是不会显示数据的
4. 浏览器什么时候会呈现页面给用户，dom解析完毕，css渲染完毕才能呈现数据

## dom渲染流程
1. 浏览器下载HTML文件并开始解析DOM。（对应network中的document先下载）
2. 遇到link[rel=stylesheet]的时候，将其加入资源下载队列，继续解析dom
3. 当遇到script的时候，之后有三种情况：1. 如果之前的stylesheet没有下载完毕，等待下载完毕再执行代码。（此时会阻塞dom的解析）2. 如果没有，进行下载，下载完毕之后立即执行代码。（这中间的过程都会阻塞dom解析）3.script有defer,async标签，加入下载队列，下载好之后立即执行（两者下载均不会阻塞dom的解析，defer会等待之前的defer script执行完毕再执行,两者的执行都会阻塞dom解析），执行完之后继续解析dom。
4. 整个dom解析完成，触发DOMContentLoaded。
5. css下载完毕（有可能在5之前，如果没有下载完毕，是不会展示页面的），渲染，展示页面


6. CSS 不会阻塞 DOM 加载，只会阻塞 JS！DOM 的绘制依赖于 CSS 加载与解析，DOM Tree 》Render Tree》layout》paint，但是 DOM 的绘制与 DOM 加载是两个概念。
