var sum = (function() {
    var list = [];

    var add = function() {
        // 拼接数组
        var args = Array.prototype.slice.call(arguments);
        list = list.concat(args);
        return add;
    }
    // 覆盖 toString 方法
    add.toString = function() {
        // 计算总和
        var sum = list.reduce(function(pre, next) {
            return pre + next;
        });
        // 清除记录
        list.length = 0;
        return sum;
    }

    return add;
})();

sum(2, 3);
// 5
sum(2)(3)；
