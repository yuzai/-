1. box-sizing:content-box.   width = content//w3c标准盒子
   box-sizing:border-box.    width = content+padding+border//IE盒子

2. float是否脱离文档流？和position:absolute有什么区别？
    CSS中脱离文档流，也就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。
　　需要注意的是，使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在周围。
　　而对于使用absolute positioning脱离文档流的元素，其他盒子与其他盒子内的文本都会无视它。
    [例子](http://blog.csdn.net/paediatrician/article/details/52583653)

3. relative:依旧占据原本位置。并不会脱离文档流

4. css优先级，class='test1 test2',test1,test2中有相同的设置，css文件中后面定义的会覆盖前面的

5. 伪元素: content内容是纯文本

6. css选择器以及伪元素: nth-child(an+b)的理解

7. bootstarp中栅格布局中的清除浮动的方案：clearfix,也就是row类。

8. 包含块的概念：元素的位置和大小由一个长方形来决定，这个长方形就是包含块、
                body的包含块是初始包含块
                其余元素，除了Position=absolute，其包含块由最近的块级祖先元素盒子的内容边界组成
                如果元素有属性 'position:absolute'，containing block 由最近的 position 不是 static 的祖先建立，
                具体步骤如下：
                  如果祖先是块级元素，containing block 由祖先的 padding edge 形成。
                  如果祖先是内联元素，containing block 取决于祖先的 direction 属性。
                  如果 direction 是 ltr（左到右），祖先产生的第一个盒子的上、左内容边界是 containing block 的上方和左方，祖先的最后一个盒子的下、右内容边界是 containing block 的下方和右方。
                  如果 direction 是 rtl（右到左），祖先产生的第一个盒子的上、右内容边界是 containing block 的上方和右方，祖先的最后一个盒子的下、左内容边界是 containing block 的下方和左方。
                  如果没有祖先，根元素盒子的内容边界确定为 containing block。
