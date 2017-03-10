function gen(){
  var random = [];
  var length = Math.floor(Math.random()*30+2);
  for(var i=0;i<length;i++){
    var num = Math.floor(Math.random()*20+1);
    random.push(num);
  };
  return random;
}
module.exports = gen;
