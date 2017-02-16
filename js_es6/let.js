{
  var s = 5;
  let j = 4;
}
console.log(s);
try{
  console.log(j);
}catch(e){
  console.log(e.name+'  '+e.message);
}
var a = [];
for(let i =0;i<3;i++)
{
  if(i===1)
  setTimeout(function(){console.log(i)},1000);
}

for(let i=0;i<5;i++){
  i=6;
  console.log(i);
}
try{
  console.log(g)
}catch(e){
  console.log(e.name+'  '+e.message);
}
let g=5;
console.log(g)

var tmp = 1;
{
  let tmp = 'wo';
  try{
    let tmp = 'ni';
    console.log(tmp);
  }catch(e){
    console.log(e.name+'  '+e.message);
  }
  console.log(tmp);
}

const foo = {
  name:'xiaobo',
  age:24
};
foo.age = 20;
console.log(foo.age);
