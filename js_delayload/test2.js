var s=document.getElementById('div2');
console.log(s);
s.style['background-color']='yellow';
var p= [].filter.call(s.childNodes,function(item){return item.nodeName!=='#text'});
[].forEach.call(p,function(item){item.style['color'] = '#'+((~~(Math.random()*(1<<24))).toString(16));})
