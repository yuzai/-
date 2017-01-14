#### html5一些新的有趣的特性：
1. 用于绘画的 canvas 元素
2. 用于媒介回放的 video 和 audio 元素
3. 对本地离线存储的更好的支持
4. 新的特殊内容元素，比如 article、footer、header、nav、section
5. 新的表单控件，比如 calendar、date、time、email、url、search

#### HTML5 <!DOCTYPE>
1. <!DOCTYPE html>表明是h5页面

#### h5新增的语义元素
header,section,footer,aside,nav,main,article,figure
如果希望旧的浏览器可以兼容，直接将这些元素的css定义成：display:block即可。

#### h5可以新定义元素
document.createElement('myElement');然后就可以在html中定义<myElement></myElement>;

#### h5兼容低版本IE，在head 中加入如下shiv代码即可
<!--[if lt IE 9]>
<script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->

#### h5新增的新元素：
1. canvas,画布标签，主要用js来进行画图
2. 新增多媒体元素：
   1. audio
   2. video
   3. source,自定义多媒体资源
   4. embed，定义嵌入的内容
   5. track ,为audio,video媒介定义外部文本轨道
3. 新增表单元素
   1. datalist,定义选项列表，用input来定义可能的值
   2. keygen 规定用于表单的密钥对生成器字段
   3. output 定义不同类型的输出
4. 新的语义元素  


### HTML面试问题
1. Doctype作用？标准模式与兼容模式各有什么区别?
  （1）、<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不
   存在或格式不正确会导致文档以兼容模式呈现。

  （2）、标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行
   为以防止站点无法工作。
2. HTML5 为什么只需要写 <!DOCTYPE HTML>？
    HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；
    而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
3. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
    首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
    1. 行内元素有：a b span img input select strong
    2. 块级元素有: div ul ol li h系列 p
    3. 常见的空元素: <br><hr><img><input><link><meta>
4. 页面导入样式时，使用link和@import有什么区别？
  （1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
  （2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
  （3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
5. 介绍一下你对浏览器内核的理解？
    主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。
    渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，
    然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。
    JS引擎则：解析和执行javascript来实现网页的动态效果。
    最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
6. 常见的浏览器内核有哪些？
    Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
    Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
    Presto内核：Opera7及以上。      [Opera内核原为：Presto，现为：Blink;公认的速度最快的内核
    Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]
7. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
    HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
     绘画 canvas;
     用于媒介回放的 video 和 audio 元素;
     本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
     sessionStorage 的数据在浏览器关闭后自动删除;
     语意化更好的内容元素，比如 article、footer、header、nav、section;
     表单控件，calendar、date、time、email、url、search;
     新的技术webworker, websocket, Geolocation;
    移除的元素：
     纯表现的元素：basefont，big，center，font, s，strike，tt，u;
     对可用性产生负面影响的元素：frame，frameset，noframes；
    支持HTML5新标签：
      IE8/IE7/IE6支持通过document.createElement方法产生的标签，
      可以利用这一特性让这些浏览器支持HTML5新标签，
      浏览器支持新标签后，还需要添加标签默认的样式。
      当然也可以直接使用成熟的框架、比如html5shim;
      <!--[if lt IE 9]>
         <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
      <![endif]-->
    如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素
8. 简述一下你对HTML语义化的理解？
      用正确的标签做正确的事情。
      html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
      即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
      搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
      使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
9. HTML5的离线储存怎么使用，工作原理能不能解释一下？
      在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
      原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，
      这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。
      如何使用：
      1、页面头部像下面一样加入一个manifest的属性；
      2、在cache.manifest文件的编写离线存储的资源；
      CACHE MANIFEST
      #v0.11
      CACHE:
      js/app.js
      css/style.css
      NETWORK:
      resourse/logo.png
      FALLBACK:
      / /offline.html
      3、在离线状态时，操作window.applicationCache进行需求实现。
10. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？
        在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
        离线的情况下，浏览器就直接使用离线存储的资源。
11. 
