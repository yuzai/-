(function(){
  var div1 = document.getElementById('test1');
  var div2 = document.getElementById('test2');
  var div3 = document.getElementById('test3');
  var div4 = document.getElementById('test4');
  //  //冒泡
  // div1.addEventListener('click',function(){alert('1')},false);
  // div2.addEventListener('click',function(){alert('2')},false);
  // div3.addEventListener('click',function(){alert('3')},false);
  // div4.addEventListener('click',function(){alert('4')},false);
  //  //捕获
  // div1.addEventListener('click',function(){alert('1')},true);
  // div2.addEventListener('click',function(){alert('2')},true);
  // div3.addEventListener('click',function(){alert('3')},true);
  // div4.addEventListener('click',function(){alert('4')},true);
  //  //同时绑定捕获和冒泡
  div1.addEventListener('click',function(){alert('b1')},true);
  div1.addEventListener('click',function(){alert('m1')},false);
  div2.addEventListener('click',function(){alert('b2')},true);
  div2.addEventListener('click',function(){alert('m2')},false);
  div3.addEventListener('click',function(){alert('b3')},true);
  div3.addEventListener('click',function(){alert('m3')},false);
  div4.addEventListener('click',function(){alert('b4')},true);
  div4.addEventListener('click',function(){alert('m4')},false);
  (function(filename){
    console.log( filename.slice(filename.lastIndexOf('.')===-1?filename.length:filename.lastIndexOf('.')+1));
  })('.index')
})()
