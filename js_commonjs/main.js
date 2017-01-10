require.register('./math',function(module,exports,require){
  module.exports = function(x){
    console.log(x);
  }
})

var math = require('./math');
math(5);
