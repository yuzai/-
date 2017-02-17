;(function(){
  function Router(){
  this.currentUrl='';
  this.routes={};
  }
  Router.prototype.route = function(path,callback){
    this.routes[path] = callback || function(){}
  }
  Router.prototype.refresh = function(){
    this.currentUrl = location.hash.slice(1) || '/';
    console.log(this.currentUrl );
    if(typeof(this.routes[this.currentUrl]) ==='function'){
      this.routes[this.currentUrl]();
    }
  }
  Router.prototype.init = function(){
    window.addEventListener('hashchange',this.refresh.bind(this),false);
    this.refresh();
  }
  var route = new Router();
  function changecolor(color){
    var body = document.getElementsByTagName('body')[0];
    body.style['background-color'] = color;
  }
  route.route('/',changecolor.bind(null,'skyblue'));
  route.route('/blue',changecolor.bind(null,'blue'));
  route.route('/green',changecolor.bind(null,'green'));
  route.route('/color',function(){
    var p= document.getElementsByTagName('a');
    [].forEach.call(p,function(item){item.style['color'] = '#'+((~~(Math.random()*(1<<24))).toString(16));})
  });
  route.init();
})();


// ;(function(win){
//   win.Router = //；
//   //定义Router的一些方法
//
// })(window)
