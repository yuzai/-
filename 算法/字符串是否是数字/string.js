module.exports = function(str){
  return !isNaN(Number(str)) && str.trim()!=='';
}
