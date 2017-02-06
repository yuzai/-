记录阅读[寒冬的博客](https://github.com/wintercn/blog/issues/4)的心得

1. position的取值:
    absolute:
    生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
    元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。(会脱离文档流)
    fixed
    生成绝对定位的元素，相对于浏览器窗口进行定位。
    元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
    relative
    生成相对定位的元素，相对于其正常位置进行定位。
    因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
    static	默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
    inherit 规定应该从父元素继承 position 属性的值
2. containing block(包含块)

3. bfc的概念：
    从样式上看，具有 BFC 的元素与普通的容器没有什么区别，但是从功能上，具有 BFC 的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器没有的一些特性，例如可以包含浮动元素，上文中的第二类清除浮动的方法（如 overflow 方法）就是触发了浮动元素的父元素的 BFC ，使到它可以包含浮动元素，从而防止出现高度塌陷的问题。

    简单来说，BFC 就是一种属性，这种属性会影响着元素的定位以及与其兄弟元素之间的相互作用。
    见css_bfc note.md
4. writing mode direction
5. base line line-height
6. bidi 
