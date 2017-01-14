### 半小时入门gulp，真是利器，后悔一直没用！！！
1. gulp到底用来干什么的？
   1. 在一个大型的web应用中，sass,es6都要使用，可以使用sass watch，babel watch来监测文件的变化来实时更新。但是文件多了，每次打开应用都要先执行这么几条指令，可以写成脚本，每次执行就行了，但是慢慢的就会忘记指令的具体执行格式。什么watch 参数。。。。
   gulp应运而生。
   2. gulp能干什么？
   每次启动web应用，直接一条指令，gulp，什么sass,es6等等等，都不用管，直接打开应用就能调试。大大简化了开发人员的工作量
2. gulp怎么用？
   以sass为例，
   1. 全局安装gulp：npm install -g gulp
   2. 新建一个文件夹，npm init（注意:文件名不要和之后的dev-dependence冲突，此处是gulp和gulp-sass）
   3. 局部安装gulp,gulp-sass:npm install --save-dev gulp gulp-sass（全局安装是为了能够执行gulp指令，局部安装是为了能够require(gulp)）
   4. 编写gulpfile.js
       规则很简单。如下：
       主要用法：task,src,pipe,dest,watch。掌握这几个就可以实现想要的watch sass的效果。之后每次只需要运行gulp，就会自动检测scss文件的变化并反映到css中。其它使用babel,less的用法基本一致。

        ```js
        导入工具包 require('node_modules里对应模块')
        var gulp = require('gulp'), //本地安装gulp所用到的地方
            sass = require('gulp-sass');

        //定义一个testLess任务（自定义任务名称）
        gulp.task('sass', function () {
            gulp.src('src/sass/index.scss') //该任务针对的文件
                .pipe(less()) //该任务调用的模块
                .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
        });
        gulp.task('sass:watch',function(){
      	    gulp.watch('src/sass/main.scss',['sass']);
        });
        gulp.task('default',['sass:watch']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
        ```
    5. gulp即可运行

3. 插件：gulp的强大，在于插件的强大。gulp-babel,gulp-less等等，都是很好的工具，实例用法也在npm上有说明，可以直接百度gulp-babel，立马就能看到示例用法，很强大，速度也很快，占用内存小。   
