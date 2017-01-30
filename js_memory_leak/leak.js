// //演示 js中的内存管理
// //在这个例子中，menu中保存了一份div1元素，在dom中删除该元素之后，menu中依然还存有一份
// function Menu(title){
//   this.title = title;
//   this.elem = document.getElementById('div1');
// };
//
// var menu = new Menu('my menu');
//
// document.body.innerHTML = '';
//
// console.log(menu.elem);
//
// menu = new Menu('his menu');
// console.log(menu.elem);

// //setHandler的作用域包含了elem元素，elem的元素又包含了setHandler的作用域，形成了一个循环
// function setHandler(){
//   var elem = document.getElementById('div1');
//   elem.onclick = function(){
//
//   };
// }
// //删除了elem元素，虽然setHandler函数中还有一个elem,但是elem元素的onclick已经被清除，所以没有指向setHandler的引用
// //所以会进行回收
// function cleanUp() {
//   var elem = document.getElementById('id')
//   elem.parentNode.removeChild(elem)
// }


//内存泄漏发生的原因是：浏览器因为一些原因，不能释放再也不需要使用的对象占用的内存
//1. IE<8 dom-js 内存泄漏
function setHandler(){
  var elem = document.getElementById('div1');
  elem.onclick = function(){

  };
}
//删除了elem元素，虽然setHandler函数中还有一个elem,但是elem元素的onclick已经被清除，所以没有指向setHandler的引用
//所以会进行回收
//IE8不会，
function cleanUp() {
  var elem = document.getElementById('id')
  elem.parentNode.removeChild(elem)
}
