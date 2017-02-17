function Router(){
  this.routes = {};
}
Router.prototype.route = function(url,handler){
  this.routes[url] = handler || function(){};
}
Router.prototype.go = function(){
  history.pushState({},'',location.pathname);
  this.refresh();
}
Router.prototype.refresh = function(){
  this.routes[location.pathname]();
}
Router.prototype.init = function(){
  window.addEventListener('popstate',this.refresh.bind(this));
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
