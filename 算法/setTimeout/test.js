// console.log(1);
// setTimeout(function(){console.log(2)},1000);
// console.log(3);
//
// var x = 1;
// var o = {
//   x: 2,
//   y: function(){
//     console.log(this.x);
//   }
// };
// setTimeout(o.y,1000);// 1

// var startTime = new Date();
// setTimeout(function () {
//     console.log(new Date() - startTime);
// }, 100)
// var sum=0;
// for(var i=0;i<1000;i++){
//   console.log(i);
// }

// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//   },i*1000);
// }

// setTimeout(function(){
//   console.log(i)
// });
// for(var  i=0;i<5;i++){
// }

// var name = 'xiaohuan';
// var foo = {
//   name:'xiaobo',
//   sayname:function(){
//     console.log(this.name)
//   },
// }
// setTimeout(function(){
//       foo.sayname();
//   },1000);
// var date_s = new Date();
// setTimeout(function(){
//   console.log(new Date()-date_s)
// },5000);
// setTimeout(function(){
//   console.log(new Date()-date_s)
// },5000);


// for(var i=0;i<5;i++){
//   setTimeout(function(){
//     console.log(i);
//     console.log(new Date()-date_s);
//   },i*1000);
// }

// for(var i=0;i<5;i++){
//   setTimeout((function(){
//     return function(){
//        console.log(i);
//        console.log(new Date()-date_s);
//     }
//   })(i),i*1000);
// }

// var date_s = new Date();
// for (var i = 0; i < 5; i++) {
//   setTimeout((function(i) {
//     console.log(i);
//     console.log(new Date()-date_s);
//   })(i), i * 1000);
// }

// var bar = {
//   name:'xiaobo',
//   test:function(){
//     console.log(this.name);
//   }
// }
// function foo(fn){
//   fn();
// }
// foo(bar.test);

function sayhi(){
  console.log('hi');
  console.log(new Date()-time_s);
};
var time_s = new Date();
setTimeout(sayhi,3000);
for(var i=1;i<1e9;i++){
  var sum =  3*10;
};
console.log(new Date()-time_s);
