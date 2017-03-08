### promise的注意的点

1. resolve,reject函数异步执行，相当于settimeout(resolve(),0)。会在同步代码执行完毕之后异步调用
2. 链式调用的注意点：
```js
function taskA(){
    console.log('taskA');
} 
function taskB(){
    console.log('taskB');
}
function taskC(){
    console.log('taskC');
}
function error(){
    console.log('error');
}
Promise.reject('123')
.then(taskA)
.then(taskB)
.catch(error)//一旦出错，会去后面找catch，而不一定是第一个catch
.then(taskC);
console.log('taskme');//先执行这一条，因为then中都是异步调用的，相当于setTimeout(,0)
```
3. 