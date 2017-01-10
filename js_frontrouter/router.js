(function(){
  window.Router = function(){
    var self = this;
    self.hashlist = {};
    self.index = null;
    self.key = '/';
    window.onhashchange = function(){
      self.reload();
    }
  };
  /**
     * 添加路由,如果路由已经存在则会覆盖
     * @param addr: 地址
     * @param callback: 回调函数，调用回调函数的时候同时也会传入相应参数
     */
  Router.prototype.add = function(addr,callback){
    var self = this;
    self.hashlist[addr] = callback || function(){};

  };
  /**
     * 删除路由
     * @param addr: 地址
     */
  Router.prototype.remove = function(addr){
    var self = this;
    delete self.hashlist[addr]
  };
  /**
     * 设置主页地址
     * @param index: 主页地址
     */
  Router.pototype.setIndex = function(index){
    self.index = index;
  };
  /**
    * 跳转到指定地址
    * @param addr: 地址值
    */
  Router.pototype.go = function(addr){
    window.location.hash = '#' + this.key + addr;
  }
})
