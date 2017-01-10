var s=document.getElementById('div1');
console.log(s);
s.style['background-color']='green';
var p= [].filter.call(s.childNodes,function(item){return item.nodeName!=='#text'});
console.log(p);
// for(var i=0;i<p.length;i++)
// {
    [].forEach.call(p,function(item){item.style['color'] = '#'+((~~(Math.random()*(1<<24))).toString(16));})
