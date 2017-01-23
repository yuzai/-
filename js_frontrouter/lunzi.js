function Router(){
  this.currentUrl='';
  this.routes={};
}
Router.prototype.route = function(path,callback){
  this.routes[path] = callback || function(){}
}
Router.prototype.refresh = function(){
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
}
Router.prototype.init = function(){
  window.addEventListener('load',this.refresh.bind(this),false);
  window.addEventListener('hashchange',this.refresh.bind(this),false);
  // console.log(location.hash)
  // if(location.hash.slice(1)!=='/')
  //     location.hash = '#/';
}
var route = new Router();
route.init();
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
