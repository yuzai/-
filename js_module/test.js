var s = (function(){
  var s=document.getElementById('div1');
  var p= [].filter.call(s.childNodes,function(item){return item.nodeName!=='#text'});
  function m1(){
    s.style['background-color']='green';
  }
  function m2(){
    [].forEach.call(p,function(item){item.style['color'] = '#'+((~~(Math.random()*(1<<24))).toString(16));})
  }
  return {
    m1:m1,
    m2:m2
  }
})();
s.m1();
s.m2();
