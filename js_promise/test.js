// var p = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log('执行完成')
// 		resolve('你好')
// 	},2000);
// })
// console.dir(p);


// function runAsync1(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('异步任务1执行完成');
//             resolve('随便什么数据1');
//         }, 1000);
//     });
//     return p;            
// }
// function runAsync2(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('异步任务2执行完成');
//             resolve('随便什么数据2');
//         }, 100);
//     });
//     return p;            
// }
// function runAsync3(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             console.log('异步任务3执行完成');
//             resolve('随便什么数据3');
//         }, 100);
//     });
//     return p;            
// }

// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     return runAsync3();
// })
// .then(function(data){
//     console.log(data);
// });


// var promise = new Promise(function(resolve, reject) {
//  var value = 111;
//  if (true/* 异步操作成功 */){
//  console.log('done')
//  resolve(value);
//  } else {
//  reject(error);
//  }
// });

// // promise.then(function(value) {
// //  // success
// //  console.log(value)
// // }, function(value) {
// //  // failure
// // });

// function timeout(ms){
// 	return new Promise(function(resolve,reject){
// 		setTimeout(resolve,ms,'done');
// 	})
// }
// timeout(100).then(function(value){
// 	console.log(value);
// })

// var p = new Promise(function(resolve,reject){
// 	console.log('hi1')
// 	resolve('hi2');
// })

// function loadImage(url){
// 	return new Promise(function(resolve,reject){
// 		var image = new Image();
// 		image.onload = function(){
// 			resolve(image);
// 		}
// 		image.onerror = function(){
// 			reject(new Error("couldn't "+url));
// 		}
// 		image.src = url;
// 	});
// };


function taskA() {
    console.log("Task A");
    throw new Error("throw Error @ Task A")
}
function taskB() {
    console.log("Task B");// 不会被调用
}
function onRejected(error) {
    console.log(error);// => "throw Error @ Task A"
}
function finalTask() {
    console.log("Final Task");
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);