function require(p){
   var path = require.resolve(p);
   var mod  = require.modules[path];
   if(!mod) throw new Error('failed to require"'+p+'"');
   if(!mod.exports){
     mod.exports = {};
     mod.call(mod.exports,mod,mod.exports);
   }
   return mod.exports;
}
require.modules={};
require.register = function(path,fn){
  require.modules[path] = fn;
};
require.resolve = function(path){
  var orig = path;
  var reg = path+'.js';
  var index = path+'index.js';
  return require.modules[reg]&&reg
    || require.modules[index]&&index
    || orig
}
