### css3 note
1. css3比较重要的模块有：
    1. 选择器
    2. 盒模型 弹性盒子
    3. 背景和边框
    4. 文字特效
    5. 2d/3d转换
    6. 动画
    7. 多列布局  column
    8. 用户界面
2. 多列
   column-count,决定列数
   column-gap:决定列与列之间的间隙
   column-rule-style:边框样式
   column-rule-width:边框宽度
   column-rule-color:颜色
   column-rule: 1px solid red;
   column-span:指定元素占用几列
   column-width:一列的宽度
3. 弹性盒子
     CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。
     弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。
     弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。
     弹性容器内包含了一个或多个弹性子元素。



### 面试分析
1. 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
    CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。
    指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，还必须添加填充，边框和边距。
    最终元素的总宽度计算公式是这样的：
    总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距
    元素的总高度最终计算公式是这样的：
    总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距
    （1）有两种， IE 盒子模型、W3C 盒子模型；
    （2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；
    （3）区  别： IE的content部分把 border 和 padding计算了进去;
2. CSS选择符有哪些？哪些属性可以继承？
      1.id选择器（ # myid）
      2.类选择器（.myclassname）
      3.标签选择器（div, h1, p）
      4.相邻选择器（h1 + p）（以加号分隔）
      5.子选择器（ul > li）(以大于号分隔）
      6.后代选择器（li a）(以空格分隔)
      7.普通兄弟选择器（div~p）~分隔
      8.通配符选择器（ * ）
      9.属性选择器（a[rel = "external"]）
      10.伪类选择器（a:hover, li:nth-child）
      可继承的样式： font-size font-family color, UL LI DL DD DT;
      不可继承的样式：border padding margin width height ;
3. CSS优先级算法如何计算？
      优先级就近原则，同权重情况下样式定义最近者为准;
      载入样式以最后载入的定位为准;
      优先级为:
      同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
      !important >  id > class > tag
      important 比 内联优先级高
4. CSS3新增伪类有那些？
