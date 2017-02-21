"use strict";

function sum(){
  var args = [].slice.call(arguments);
  if(args.length === 2)
  {
    return args[0]+args[1];
  }
  else {
    return function(b){return args[0]+b};
  }

};

module.exports = sum;
