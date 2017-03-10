function optionalChaining(obj,chain){
  var _arr = chain?chain.split('.'):[];
  var init = obj;
  for(var i=0;i<_arr.length;i++){
    if(init[_arr[i]]){
      init = init[_arr[i]];
    }else {
      return undefined;
    }
  }
  return init;
}
var user = {
  name:{
    first:{
      name:'xiaobo'
    },
    second:null
  },
  age:{
    first:1,
    second:2
  }
}
console.log(optionalChaining(user,''));
console.log(user);
