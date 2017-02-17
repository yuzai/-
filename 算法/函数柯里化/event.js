var addEvent = (function curryevent() {
    if (window.addEventListener) {
        return function(el, type, fn, capture) {
            el.addEventListener(type, function(e) {
                fn.call(el, e);
            }, capture);
        }
    } else if (window.attachEvent) {
        return function(el, type, fn) {
            el.attachEvent("on" + type, function(e) {
                fn.call(el, e);
            });
        }
    } else {
      return function(){
        el['on' + type] = fn;
      }
    }
})();
